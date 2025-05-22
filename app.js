document.addEventListener("DOMContentLoaded", function () {
  const modalToggle = document.getElementById("modal-toggle");
  const originalTitle = document.title;

  if (modalToggle) {
    modalToggle.addEventListener("change", function () {
      if (modalToggle.checked) {
        document.title = "Você achou um easter egg!";
      } else {
        document.title = originalTitle;
      }
    });
  }
});
