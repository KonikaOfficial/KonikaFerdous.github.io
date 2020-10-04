//select the button
const scrollToTheTopBtn = document.getElementById("back-to-the-top-btn");

// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function buttonAppear() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollToTheTopBtn.style.display = "block";
  } else {
    scrollToTheTopBtn.style.display = "none";
  }
};

// On click smooth scroll to the top button
scrollToTheTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    bottom: 0,
    behavior: "smooth"
  });
});
