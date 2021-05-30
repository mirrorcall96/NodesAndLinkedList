class Node{
    constructor(color, number, next=null){
      this.color = color;
      this.number = number;
      this.next = next;
    }
    getData(){
      return `${this.color}-${this.number}`;
    }
  }
  class Stack {
    constructor(limit) {
      this.limit = limit;
      this.size = 0;
      this.topNode = null;
    }
  
    push = (color, number) => {
      if (this.isFull) {
        console.log(`Your stack is full, you can't add ${data}`);
      } else {
        const newNode = new Node(color, number);
        newNode.nextNode = this.topNode;
        this.topNode = newNode;
        this.size++;
      }
    };
  
    pop = () => {
      if (this.isEmpty) {
        return "Your stack is empty";
      } else {
        const popped = this.topNode;
        this.topNode = popped.nextNode;
        this.size--;
        return popped.getData();
      }
    };
  
    get isFull() {
      return this.size === this.limit;
    }
  
    get isEmpty() {
      return this.size === 0;
    }
  
    get peek() {
      if (this.isEmpty) console.log("Empty");
      else return this.topNode.getData();
    }
  }
  var a = ['Yellow', 'Red', 'Blue'];
  let myStack = new Stack(20);
  for (let i = 0; i < 20; i++) {
    myStack.push(a[Math.floor(a.length * Math.random())],Math.floor(Math.random() * (10 - 1) + 1));
  }
  let player1=[];
  let player2=[]
  console.log("-------------------------\nplayer 1:\n-------------------------");
  for (let i = 1; i <= 5; i++) {
    let newdata = myStack.pop();
    player1.push(newdata);
    console.log(`${i}- ${newdata}`)
  }
  console.log("-------------------------\nplayer 2:\n-------------------------");
  for (let i = 1; i <= 5; i++) {
    let newdata = myStack.pop();
    player2.push(newdata);
    console.log(`${i}- ${newdata}`)
  }
  console.log("-------------------------\nFirst card in deck: "+myStack.peek+"\n-------------------------");
