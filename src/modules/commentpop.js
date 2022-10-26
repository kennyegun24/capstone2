export default modalDisplay;
const fonts = () =>{
    const footers = document.getElementById('modalDisplay');
    
    footers.innerHTML += `
    <div class ="modal">
      <h1>Ralph 03<h1>
      <div> 
      <span>tomato:  10g</span>
      <span>mushroom:  4g</span>
      </div> 
      <div> 
      <span>onion:  1/2g</span>
      <span>processed cheese:  100g</span>
      </div> 
      <h3>Add a comment</h3>
      <div>
        <input id="name"  type="text" name="user" required placeholder="Your Name"><br>
        <input id="text" type="text" name="text" required placeholder="Your insight"><br>
        </div>
        <button type="Submit" onclick="appear()>comment</button>
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