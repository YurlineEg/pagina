const loggedBtns = document.querySelectorAll('.logged');
const notLoggedBtns = document.querySelectorAll('.not_logged');

console.log(loggedBtns);
console.log(notLoggedBtns);

export const logInCheck = (userLogged) => {
  if (userLogged) {
    loggedBtns.forEach((element) => (element.style.display = 'block'));
    notLoggedBtns.forEach((element) => (element.style.display = 'none'));
  } else {
    loggedBtns.forEach((element) => (element.style.display = 'none'));
    notLoggedBtns.forEach((element) => (element.style.display = 'block'));
  }
};
