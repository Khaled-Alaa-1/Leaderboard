import './style.css';
import { refresh, addYourData } from './modules/sendAndRceive';

const refreshBtn = document.querySelector('.refreshBtn');
refreshBtn.addEventListener('click', () => {
  refresh();
});

const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', () => {
  addYourData();
});