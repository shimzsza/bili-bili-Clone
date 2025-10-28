  const wrapper = document.getElementById("thumbnails-wrapper");
  const scrollAmount = 1000; // Adjust this based on box width

  document.getElementById("right-arrow").addEventListener("click", () => {
    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  document.getElementById("left-arrow").addEventListener("click", () => {
    wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });


  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  wrapper.addEventListener("scroll", () => {
    const scrollLeft = wrapper.scrollLeft;
    const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
  
    // Show/hide arrows based on scroll position
    leftArrow.style.display = scrollLeft > 0 ? "block" : "none";
    rightArrow.style.display = scrollLeft < maxScrollLeft ? "block" : "none";
  });

 
  