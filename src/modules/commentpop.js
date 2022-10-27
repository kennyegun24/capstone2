export default modalDisplay;
import { commentUrl } from './APIs.js';
const fonts = () =>{
    const footers = document.getElementById('modalDisplay');
    
    footers.innerHTML += `
    <div class ="modal">
    <span class="close-button">&times;</span>
      <h1>Ralph 03<h1>
      <div> 
      <span>tomato:  10g</span>
      <span>mushroom:  4g</span>
      </div> 
      <div> 
      <span>onion:  1/2g</span>
      <span>processed cheese:  100g</span>
      </div> 
      <div id ="commentList"></div>
      <h3 class="add-comm">Add a comment</h3>
      <div class="inputDiv">
        <form class="form" method="post" action="submit">
          <input id="name"  type="text" name="user" required placeholder="Your Name"><br>
          <input id="text" type="text" name="text" required placeholder="Your insight"><br>
        </form>
        <div>
          <button class="submit-btn" type="submit">Comment</button>
        </div>
      </div>
    </div> `
   ;
    }
    fonts();

    const parentModal = document.querySelector('.modal');
function appear() {
  parentModal.style.display = 'block';
}
appear()

const commentList = document.getElementById('commentList');
const fetchApis = async () => {
  const response = await fetch(`${commentUrl}`);
  const data = await response.json();
  return data;
};

const displayComments = () => {
  commentList.innerHTML = '';
  const customer = [];
  fetchApis().then((entry) => {
    Object.entries(entry.result).forEach(([, value]) => {
      customer.push(JSON.stringify(value));
      const listItems = document.createElement('div');
      listItems.innerHTML = `
      <p>${value.item_id}</p>
      <p>${value.username}</p>
      <p>${value.comment}</p>`;
      commentList.appendChild(listItems);
    });
  });
};


const add = async (newComment) => {
  const response = await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newComment),
  });
  const data = await response.json();
  displayComments();
  return data;
};

const create = () => {
  const comment = { 
    // item_id: 
    username: document.getElementById('name').value,
    comment: document.getElementById('text').value,
  };
  document.getElementById('name').value = '';
  document.getElementById('text').value = '';
  add(comment);
};

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  create();
});