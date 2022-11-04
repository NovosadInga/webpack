import './index.html';
import "./index.sass";
import loading from './img/loading.svg'
import { mult, sum } from './modules/calc';


const img = new Image()
img.src = loading
console.log(img.src)

console.log(mult(2, 4))
console.log(sum(3, 4))