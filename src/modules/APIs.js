import { foods } from './food';

const comment_Api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const comment_key = 'jUTHHFhjhjmbJGYTMBJgyj';
const comment_Url = `${comment_Api}/apps/:${comment_key}/comments/`;

const like_api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const like_key = 'ahggGFtfjsuJHUTHhfyFHJ';
const like_url = `${like_api}/apps/:${like_key}/likes/`;

const foodApi = 'https://themealdb.com/api/json/v1/1/search.php?s';

const foodApiObj = [];

foods.forEach((food) => {
  foodApiObj.push(`${foodApi}=${food}`);
});

export { comment_Url, like_url, foodApiObj };