export function showToast(message, type) {
  Toastify({
    text: message,
    duration: 3000,
    newWindow: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background:
        type === "success"
          ? "linear-gradient(to top, #141414, #225600)"
          : "linear-gradient(to top, #141414, #54000b)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
