document.addEventListener("DOMContentLoaded", function() {
  var scrollButton = document.getElementById("scroll-button");
  var purchaseForm = document.getElementById("purchase-form");

  scrollButton.addEventListener("click", function() {
      purchaseForm.scrollIntoView({ behavior: 'smooth' });
  });
});
