import foodListTpl from '../templates/food-serv.hbs';
import dishes from '../js/menu.json';
import '../styles.css';

const foodListOnPage = document.querySelector('.js-menu');

const pageGalleryFood = galleryFood(dishes);

foodListOnPage.insertAdjacentHTML('beforeend', pageGalleryFood);

// function galleryFood(dishes) {
//   return dishes.map(foodListTpl).join('');
// }
function galleryFood(dishes) {
  return foodListTpl(dishes);
}
