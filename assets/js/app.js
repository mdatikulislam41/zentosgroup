// Shipping Section Start
       const shippingOptions = document.querySelectorAll('.shipping-option');
        shippingOptions.forEach(option => {
            option.addEventListener('click', () => {
                shippingOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
            });
        });
// Shipping Section End
// Review Slider Start
const reviews = document.getElementById('reviews');
    const total = reviews.children.length;
    let index = 0;

    // Function to update the slide position
    function updateSlide() {
      reviews.style.transform = `translateX(-${index * 100}%)`;
    }

    // Auto-slide functionality
    function startAutoSlide() {
      setInterval(() => {
        index = (index + 1) % total;
        updateSlide();
      }, 5000); // Change slide every 5 seconds
    }

    // Initialize
    updateSlide();
    startAutoSlide();
    window.addEventListener('resize', updateSlide);
// Review Slider End
// For Notification start
 const notifications = [
      { name: "Ko**st", img: "./assets/images/purchase.png",  minutesAgo: 2 },
      { name: "Ko**st", img: "./assets/images/purchase.png",  minutesAgo: 20 },
      { name: "Ko**st", img: "./assets/images/purchase.png", minutesAgo: 30 },
    ];

    let indexNotice = 0;
    function showNotification() {
      const container = document.getElementById("sales-notification-container");
      const data = notifications[indexNotice];
      
      const notif = document.createElement("div");
      notif.className = "sales-notification";
      notif.innerHTML = `
        <img src="${data.img}" alt="">
        <div class="content">
          <b>${data.name}</b> 
          <small>got this!</small> <br/>
          <span class="time">${data.minutesAgo} minutes ago</span>
        </div>
        <span class="close-btn">&times;</span>
      `;
      
      // close button
      notif.querySelector(".close-btn").addEventListener("click", () => {
        notif.remove();
      });

      container.appendChild(notif);

      // auto remove after 5s if not closed
      setTimeout(() => {
        if (document.body.contains(notif)) {
          notif.remove();
        }
      }, 5000);

      indexNotice = (indexNotice + 1) % notifications.length;
    }

    // show every 6s
    setInterval(showNotification, 6000);
    // first one
    showNotification();

// For Notification End