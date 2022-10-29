import { foodApiObj, commentUrl, likeUrl } from './APIs';
import Likes from './likes';

import Comment from './comments';
// import { modalDisplay } from './modules/commentpop.js';
const main = document.querySelector('.main');

const popup = document.querySelector('#modalDisplay');

/* eslint-disable */
export const display = async () => {
/* eslint-enable */

  foodApiObj.forEach(async (item) => {
    try {
      const response = await fetch(item);
      const data = await response.json();
      if (!response.ok) {
        main.innerHTML = 'Server Down';
      }

      data.meals.forEach((item) => {
        const section = document.createElement('section');
        const div = document.createElement('div');
        const btn = document.createElement('button');
        const btn2 = document.createElement('button');
        const twoDiv = document.createElement('div');
        const threeDiv = document.createElement('div');
        const likeIcon = document.createElement('i');
        const likeCounts = document.createElement('p');

        section.innerHTML = `
              <div class="">
                <span class="" id=${item.idMeal}>
                </span>
              </div>
              <div class="meal_image">
                <img class="meal_image" src="${item.strMealThumb}" alt="asdf">
              </div>
            `;
        twoDiv.innerHTML = `
        <p class="meal">${item.strMeal}</p>
        `;
        btn.innerText = 'Comments';
        btn2.innerText = 'Reservations';
        section.classList = 'food_items flex';
        div.classList = 'column flex';
        btn.classList = 'button';
        btn2.classList = 'button';
        twoDiv.classList = 'flex actions_name';
        likeIcon.classList = 'fa-solid fa-heart like';
        likeCounts.classList = 'like_count';
        likeCounts.innerText = '0';
        threeDiv.append(likeIcon, likeCounts);
        twoDiv.append(threeDiv);
        div.append(btn, btn2);
        section.append(twoDiv, div);
        main.append(section);

        threeDiv.addEventListener('click', () => {
          const bisplay = async (gameData) => {
            likeCounts.innerHTML = '';
            const displayScores = gameData.map((list) => `<div class="new_list">
                                                              <p> ${list.likes} </p>
                                                              
                                                            </div>`).join('');
            likeCounts.innerHTML = displayScores;
          };

          const liked = async () => {
            const like = new Likes(item.idMeal);
            const response = await fetch(likeUrl, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(like) });
            const data = response;
            console.log(data);
            return data;
          };

          const get = async (id) => {
            const response = await fetch(`${likeUrl}?item_id=${id}`);
            const data = await response.json(id);
            const idss = data.filter((ids) => ids.item_id === id);
            if (response.ok) {
              bisplay(idss);
            }
          };
          liked();
          get(item.idMeal);
        });
        btn.addEventListener('click', () => {
          const pop = () => {
            popup.innerHTML = `
            <div class="popIt">
              <div class ="flex pop column">
               <span class="close-button">&times;</span>
               <div class="popup_image">
                  <img class="pop_image" src="${item.strMealThumb}" alt="asdf">
                </div>
                <p class="pop_meal">Name: ${item.strMeal}</p> 
                <p> Location: ${item.strArea}</p>
                <p class="instructions">${item.strInstructions}<p>
                <p> Category: ${item.strCategory}</p>
                <div class="comment_count">
                </div>
                <button class="view_more">View Comments</button>
                <div class="pop_comment">
                
                </div>
                <div id ="commentList"></div>
                  <h3 class="add-comm">Add a comment</h3>
                <div class="inputDiv">
                  <form class="form">
                    <input id="name"  type="text" name="user" required placeholder="Your Name"><br>
                    <textarea id="text" type="text" rows=6 name="text" required placeholder="Your insight"></textarea><br>
                    <div>
                    <button class="submit-btn" type="submit">Comment</button>
                  </div>
                  </form>
                  
                </div>
              </div>
              </div>`;
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
          };
          pop();
          const commentCount = document.querySelector('.comment_count');
          const commentPop = document.querySelector('.pop_comment');

          const comment = async (username, comment) => {
            const comments = new Comment(username, comment, item.idMeal);
            const response = await fetch(commentUrl, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(comments) });
            const data = response;
            return data;
          };
          const bisplay = async (gameData) => {
            commentPop.innerHTML = '';
            const displayScores = gameData.map((list) => `<div class="new_list">
                                                              <p> ${list.creation_date} </p>
                                                              <p> ${list.username} </p>
                                                              <p> ${list.comment} </p>
                                                            </div>`).join('');
            commentPop.innerHTML = displayScores;
          };

          const get = async (id) => {
            const response = await fetch(`${commentUrl}?item_id=${id}`);
            const data = await response.json();
            if (response.ok) {
              bisplay(data);
              commentCount.innerHTML = `Comments: ${data.length}`;
            }
          };

          const name = document.querySelector('#name');
          const text = document.querySelector('#text');
          const clearInput = () => {
            name.value = '';
            text.value = '';
          };

          const form = document.querySelector('.form');
          form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.querySelector('#name').value;
            const text = document.querySelector('#text').value;
            comment(name, text);
            clearInput();
          });
          const close = document.querySelector('.close-button');
          close.addEventListener('click', () => {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
          });
          const viewMore = document.querySelector('.view_more');
          viewMore.addEventListener('click', () => {
            get(item.idMeal);
          });
        });
      });
    } catch (err) {
      main.innerHTML = 'err';
    }
  });
};
