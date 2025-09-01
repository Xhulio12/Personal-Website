document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".el-hidden");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a class to trigger animation
          entry.target.classList.add("el-visible");
          observer.unobserve(entry.target); // stop observing once visible
        }
      });
    },
    {
      threshold: 0.1 // trigger when 10% of item is visible
    }
  );

  items.forEach(item => {
    observer.observe(item);
  });
});
