const prompt = require('prompt-sync')({sigint: true});
class Node {
    constructor(data, nextNode = null) {
      this.data = data;
      this.nextNode = nextNode; // our link
    }
  }
  
  class LinkedList {
    constructor(data, nextNode) {
      this.headNode = new Node(data, nextNode);
      this.length=0;
    }
  
    addBeginning = (newData) => {
      const newNode = new Node(newData);
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
      this.length++;
    };
  
    removeNode = (data) => {
      let currentNode = this.headNode;
      if (currentNode.data === data) {
        this.headNode = currentNode.nextNode; // if we want to remove the head
      } else {
        while (currentNode) {
          // if we want to remove anything else
          let next = currentNode.nextNode;
          if (next.data === data) {
            currentNode.nextNode = next.nextNode;
            currentNode = null;
          } else {
            currentNode = next; // if the data is not the one we want to delete, we jump into the next node
          }
        }
      }

    };
  
    get dataAsString() {
      let dataString = "";
      let currentNode = this.headNode;
      while (currentNode) {
        //   console.log(currentNode.data);
        dataString = dataString + `${currentNode.data} \n`;
        currentNode = currentNode.nextNode;
      }
      // console.log("heeelo", dataString);
      return dataString;
    }
  }
  
class Hash{
    constructor(classSize) {
        this.classSize=classSize;
        this.classes = new Array(4);

    }
    hash = (key) => {
        if(key >=90){return 0;}
        else if(key >=80) return 1;
        else if(key >=70) return 2; 
        else if(key >=60) return 3; 
        else return -1;
    };
    insert = (key, value) => {
        let index = this.hash(value);
        if(index !== -1 && (!this.classes[index] || this.classes[index].length < this.classSize) ){
            if (this.classes[index])
                this.classes[index].addBeginning([key,value])
            else this.classes[index] = new LinkedList([key,value])
        }
    }
    print =()=>{
        console.log("Class A",this.classes[0].dataAsString);
        console.log("Class B",this.classes[1].dataAsString);
        console.log("Class C",this.classes[2].dataAsString);
        console.log("Class D",this.classes[3].dataAsString);
    }
}
const students = [
    { name: "Jean-Luc Garza", score: 24 },
    { name: "Teddy Munoz", score: 79 },
    { name: "Georgia Ali", score: 17 },
    { name: "Vicky Calhoun", score: 8 },
    { name: "Awais Weaver", score: 65 },
    { name: "Athena Kline", score: 52 },
    { name: "Zacharia Whitaker", score: 38 },
    { name: "Clarice Davenport", score: 99 },
    { name: "Viktoria Flynn", score: 84 },
    { name: "Ianis Crossley", score: 20 },
    { name: "Johnnie Owens", score: 74 },
    { name: "Emily-Rose Erickson", score: 33 },
    { name: "Adeel Nieves", score: 100 },
    { name: "Dustin Villegas", score: 98 },
    { name: "Maxine Hughes", score: 65 },
    { name: "Bilaal Harding", score: 79 },
    { name: "Maddie Ventura", score: 71 },
    { name: "Leroy Rees", score: 44 },
    { name: "Wanda Frank", score: 73 },
    { name: "Margaux Herbert", score: 80 },
    { name: "Ali Rios", score: 70 },
    { name: "Nigel Santiago", score: 25 },
    { name: "Markus Greene", score: 78 },
    { name: "Harlan Parrish", score: 97 },
    { name: "Baran Davidson", score: 43 },
    { name: "Seth Rodriguezh", score: 67 },
    { name: "Diego Mayer", score: 100 },
]

const size = prompt("Number of styudents per class? ");
let myHash = new Hash(size);

students.forEach(Element=>myHash.insert(Element.name,Element.score));
myHash.print();