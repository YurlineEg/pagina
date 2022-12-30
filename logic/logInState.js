import { auth } from './firebase-config.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { logInCheck } from './logInCheck.js';

onAuthStateChanged(auth, async (user) => {
  if (user) {
    logInCheck(user);
  } else {
    logInCheck(user);
  }
});
