//cached dom nodes
const counterButtonAdd = document.querySelector('body > button#add');
const counterButtonSubtract = document.querySelector('body > button#subtract');
const counterValueEl = document.querySelector('body > h1#count');
let counterValue = 0;

//controller functions
const addToCounter = () => {
  counterValue++
}

const updateCounterView = () => {
  counterValueEl.textContent = counterValue
}
//another way

const subtractCounter =()=> {
  counterValue--
}



counterButtonSubtract.addEventListener('click', (e) => {
  subtractCounter()
  updateCounterView()
})

counterButtonAdd.addEventListener('click', (e) => {
  addToCounter()
  updateCounterView()
})

// https://sfs-flex-1.herokuapp.com/frontend-fundamentals/week-4/day-2/lecture-materials/guide-to-building-a-browser-game/


