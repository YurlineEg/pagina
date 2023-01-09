import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from './firebase-config.js';
import { showToast } from './showToast.js';

const logInForm = document.querySelector('#log_in_form');

logInForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = logInForm['input_email'].value;
  const password = logInForm['input_pass'].value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.replace('/Inicio.html');
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      console.log('contra');
      showToast('contra', 'error');
    } else if (error.code === 'auth/user-not-found') {
      console.log('usuario');
    } else {
      console.log('otro');
    }
  }
});
