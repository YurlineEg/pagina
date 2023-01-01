import { signOut } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from './firebase-config.js';

const logOutBtn = document.querySelector('#log_out_button');

logOutBtn.addEventListener('click', async () => {
  await signOut(auth);
  console.log('usuario fuerita');
});
