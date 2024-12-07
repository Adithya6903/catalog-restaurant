import 'regenerator-runtime'; 
import '../styles/main.scss';  

console.log('Hello Coders! :)');

const hamburgerButton = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburgerButton.addEventListener('click', () => {
  navLinks.classList.toggle('active'); 
});

window.addEventListener('click', (event) => {
  if (event.target !== hamburgerButton && !navLinks.contains(event.target)) {
    navLinks.classList.remove('active');
  }
});

async function loadRestaurants() {
  const dataModule = await import('../public/data/DATA.json'); 
  const data = dataModule.default; 
  const restaurantContainer = document.getElementById('restaurants');

  if (restaurantContainer) {
    data.restaurants.forEach(restaurant => {
      const restaurantCard = `
        <div class="restaurant-card">
          <img src="${restaurant.pictureId}" alt="Image of ${restaurant.name}" class="restaurant-image">
          <div class="restaurant-info">
            <h3>${restaurant.name}</h3>
            <p><strong>City:</strong> ${restaurant.city}</p>
            <p><strong>Rating:</strong> ${restaurant.rating}</p>
            <p><strong>Description:</strong> ${restaurant.description}</p>
            <p><strong>Testimonial:</strong> "${restaurant.testimonial}"</p>
            <p class="special-offer"><strong>Special Offer:</strong> ${restaurant.specialOffer}</p>
          </div>
        </div>
      `;
      restaurantContainer.innerHTML += restaurantCard;
    });
  } else {
    console.error('Kontainer restoran tidak ditemukan di DOM.');
  }
}

loadRestaurants();
