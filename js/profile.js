document.addEventListener("DOMContentLoaded", function () {
  const deleteBtn = document.querySelector(".btn-delete");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Are you sure you want to delete this profile?");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const saveBtn = document.querySelector(".btn-save");
  if (saveBtn) {
    saveBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Are you sure you want to save the changes?");
    });
  }
});
