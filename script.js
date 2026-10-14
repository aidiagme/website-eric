document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const burger = document.querySelector(".burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", false);
  }
});

// Formulaire de contact : ouvre le client mail avec le message pré-rempli.
// Remplacez par Formspree, Netlify Forms ou votre API pour un envoi direct.
const form = document.getElementById("contact-form");
const msg = form.querySelector(".form-msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.classList.remove("error");
  const data = new FormData(form);
  const name = data.get("name").trim();
  const email = data.get("email").trim();
  const text = data.get("message").trim();
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !text) {
    msg.classList.add("error");
    msg.textContent = "Merci de remplir tous les champs avec un email valide.";
    return;
  }
  const subject = encodeURIComponent(`Nouveau projet : ${data.get("type")}`);
  const body = encodeURIComponent(`${text}\n\n— ${name} (${email})`);
  window.location.href = `mailto:contact@eric.dev?subject=${subject}&body=${body}`;
  msg.textContent = "Merci ! Votre messagerie va s'ouvrir pour envoyer la demande.";
  form.reset();
});
