class Node{
  constructor(color, number, nextNode=null){
    this.color = color;
    this.number = number;
    this.nextNode = nextNode;
  }
  getData(){
    return `${this.color} - ${this.number}`;
  }
}
class Stack {
  constructor(limit = 20) {
    this.limit = limit;
    this.size = 0;
    this.topNode = null;
  }

  push = (color, number) => {
    if (this.isFull()) {
      console.log(`Your stack is full`);
    } else {
      const newNode = new Node(color, number);
      newNode.nextNode = this.topNode;
      this.topNode = newNode;
      this.size++;
    }
  };

  pop = () => {
    if (this.isEmpty()) {
      return "Your stack is empty";
    } else {
      const poppedNode = this.topNode;
      this.topNode = poppedNode.nextNode;
      this.size--;
      // console.log(poppedNode,'poped')
      return poppedNode.getData();
    }
  };

   isFull() {
    return this.size === this.limit;
  }

   isEmpty() {
    return this.size === 0;
  }

   peek = () => this.topNode.getData()
    
  }


const colors = ["red", "blue", "green", "yellow"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const randomCards = (array) => {
const index = Math.floor(Math.random() *array.length)
return array[index]
}

const cards = new Stack();
const cardsArray = []

while(!cards.isFull()){
const color = randomCards(colors);
const number = randomCards(numbers);
if(!cardsArray.includes(`${color}, ${number}`)){
  cards.push(color,number);
  cardsArray.push(`${color}, ${number}`)
}

}

console.log(cardsArray)

let player1 = [];
let player2 = [];

let i = 0;
while(i < 5){
  player1.push(cards.pop());
  player2.push(cards.pop());
  i++
}

console.log("player1 cards: ",player1);
console.log("player2 cards: ",player2);
console.log(cards.peek());

