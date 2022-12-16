import { app, auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { showToast } from "./showToast.js";

const singupForm = document.querySelector("#singup_form");

singupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = singupForm["input_email"].value;
  const password = singupForm["input_pass"].value;

  console.log(email, password);

  try {
    const registerResult = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(registerResult);
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      showToast("Alguien ya esta usando el correo", "error");
      window.location.replace("/Inicio.html");
    } else if (error.code === "auth/invalid-email") {
      showToast("Usa un correo valido", "error");
    } else if (error.code === "auth/weak-password") {
      showToast("La contraseña es muy debil", "error");
    } else {
      showToast("Ocurrió un error", "error");
    }
  }
});
