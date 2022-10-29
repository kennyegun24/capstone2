import { foods } from './food';

const commentkey = 'HJ3nJrQxKFWMKnh6RtwV';
const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${commentkey}/comments`;
// const  = `${commentApi}/apps/${commentkey}/comments/`;

const likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HJ3nJrQxKFWMKnh6RtwV/likes';

const foodApi = 'https://themealdb.com/api/json/v1/1/search.php?s';

const foodApiObj = [];

foods.forEach((food) => {
  foodApiObj.push(`${foodApi}=${food}`);
});

export { commentUrl, likeUrl, foodApiObj };