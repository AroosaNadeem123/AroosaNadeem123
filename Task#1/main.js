// Open Fullscreen Menu
function openMenu() {
  document.getElementById('menu').classList.add('open');
  document.querySelector('.hamburger').style.display = 'none';
}

// Close Fullscreen Menu
function closeMenu() {
  document.getElementById('menu').classList.remove('open');
  document.querySelector('.hamburger').style.display = 'flex';
}

// Scroll to Contact Section
function scrollToNextSection() {
  const nextSection = document.querySelector("#contact");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Appointment Form Submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointment-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const number = document.getElementById("number").value.trim();
      const date = document.getElementById("date").value;

      if (!name || !email || !number || !date) {
        alert("Please fill in all fields.");
        return;
      }

      alert(
        `✅ Appointment Booked!\n\nName: ${name}\nEmail: ${email}\nPhone: ${number}\nDate: ${new Date(
          date
        ).toLocaleString()}`
      );

      form.reset(); // optional: clear form after submission
    });
  }
});

// ABOUT Section Reveal on Scroll
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about-us");

  if (aboutSection) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("visible");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(aboutSection);
  }
});

// SERVICES Reveal on Scroll
document.addEventListener("DOMContentLoaded", function () {
  const serviceBoxes = document.querySelectorAll(".service-box");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    { threshold: 0.3 }
  );

  serviceBoxes.forEach(box => {
    observer.observe(box);
  });
});

// RESULTS Carousel Logic
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(document.querySelectorAll(".slide"));
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  if (!track || slides.length === 0 || !prevBtn || !nextBtn) return;

  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);
  window.addEventListener("load", updateCarousel);
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".subscribe-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = form.querySelector("input[type='email']");
    if (emailInput.value.trim()) {
      alert(`✅ Subscribed with: ${emailInput.value}`);
      form.reset();
    } else {
      alert("❌ Please enter a valid email.");
    }
  });
});




