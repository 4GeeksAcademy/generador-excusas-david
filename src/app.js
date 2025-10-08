import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const newExcuse = document.querySelector('#the-excuse').innerHTML = generateNewExcuse();
  console.log("Hello Rigo from the console!");
  
};

const getRandomItemFromArray = (target) => {
	const randomItem = Math.floor(Math.random() * target.length)
	return target[randomItem]
}

const excuses = {
  who: ['The dog', 'My grandma', 'The mailman', 'My bird'],
  action: ['ate', 'peed', 'crushed', 'broke'],
  what: ['my homework', 'my phone', 'the car'],
  when: ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying']
};

  const generateNewExcuse = () => {
	const who = getRandomItemFromArray(excuses?.who)
	const action = getRandomItemFromArray(excuses?.action)
	const what = getRandomItemFromArray(excuses?.what)
  const when = getRandomItemFromArray(excuses?.when)
	
	return `${who} ${action} ${what} ${when}`
}
