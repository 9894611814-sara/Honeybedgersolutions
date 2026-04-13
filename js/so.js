
   document.addEventListener("DOMContentLoaded", () => {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // re-animate on scroll
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });

});
