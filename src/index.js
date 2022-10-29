import './style.css';
import { display } from './modules/displayfood';
import { font } from './modules/footer';
import { foodApiObj } from './modules/APIs'

const item_counter = document.querySelector('.item_count')

// item_counter.addEventListener('click', () => {
  
// })

item_counter.innerHTML = 'Total Items:' + foodApiObj.length
display();
font();