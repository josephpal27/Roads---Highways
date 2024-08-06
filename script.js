// Functionality For Toggle text on clicking Buttons
let btns = document.querySelectorAll('.btn-row button');
let text = document.querySelectorAll('.service-content p');

function hideAllText() {
    text.forEach((p) => {
        p.style.display = 'none';
    });
}

// Initially hide all texts except the first one
hideAllText();
if (text[0]) text[0].style.display = 'block';

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        hideAllText();
        text[index].style.display = 'block';
        btns.forEach(b => b.classList.remove('btn-active'));
        btn.classList.add('btn-active');
    });
});


// --------------------------------------------------------------------------------------------------------------------------------


// Functionality For Slider
document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.querySelector(".marquee-inner");
    const speed = 1; // Scrolling Speed
    let scrollAmount = 0;
    let isHovered = false;
  
    // Duplicates the content
    const marqueeContent = marquee.innerHTML;
    marquee.innerHTML += marqueeContent;
  
    const startScrolling = () => {
      if (!isHovered) {
        scrollAmount -= speed;
        if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
          scrollAmount = 0;
        }
        marquee.style.transform = `translateX(${scrollAmount}px)`;
      }
      requestAnimationFrame(startScrolling);
    };
  
    marquee.addEventListener("mouseover", () => {
      isHovered = true;
    });
  
    marquee.addEventListener("mouseout", () => {
      isHovered = false;
    });
  
    startScrolling();
  });


//   ------------------------------------------------------------------------------------------------------------------------------------

// Functionality For Back To Top Button
let backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', () => {
    window.scrollTo(0,0);
})