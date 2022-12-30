import { auth } from './firebase-config.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

onAuthStateChanged(auth, async (user) => {
  console.log(user);
});
