import './style.css';
import { display } from './modules/displayfood';
import { font } from './modules/footer';
import { foodApiObj } from './modules/APIs';

const itemCounter = document.querySelector('.item_count');

itemCounter.innerHTML = `Total Items:${foodApiObj.length}`;
display();
font();