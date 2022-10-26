import { foodApiObj } from './APIs';

const main = document.querySelector('main');

export const display = async () => {
  // let markup = '';

  foodApiObj.forEach(async (item) => {
    try {
      const response = await fetch(item);
      const data = await response.json();
      if (!response.ok) {
        main.innerHTML = 'Server Down';
      }

      data.meals.forEach((item) => {
        main.innerHTML += `
            <section class="food_items flex">
              <div class="">
                <span class="" id=${item.idMeal}>
                </span>
              </div>
              <div class="meal_image">
                <img class="meal_image" src="${item.strMealThumb}" alt="asdf">
              </div>
              <div class="flex actions_name">
                <p class="meal">${item.strMeal}</p>
                <div>
                  <i class="fa-solid fa-heart"></i>
                  <span>
                    <p>2 likes</p>
                  </span>
                </div>
              </div>
              <div class="column flex">
                <button class="button">Comments</button>
                <button class="button">Reservations</button>
            </section>`;
        console.log('fff');

        // renderLikes(item.idMeal);
        // return 'done';
      });
    } catch (err) {
      main.innerHTML = 'err';
    }
  });
};
