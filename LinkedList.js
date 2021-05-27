const prompt = require('prompt-sync')({sigint: true});
  
class Node {
    constructor(year,highlight, nextNode = null) {
      this.year = year;
      this.highlight = highlight;
      this.nextNode = nextNode;
    }
}
  
class LinkedList {
    constructor(year,highlight, nextNode=null) {
        this.headNode = new Node(year,highlight, nextNode);
    }
    addBeginning = (year,highlight) => {
      const newNode = new Node(year,highlight);
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    };
    addAfter = (year,highlight,yearAfter) => {
        let currentNode = this.headNode;
        let newnode=new Node(year,highlight);
        if (currentNode.year === yearAfter) {
            newnode.nextNode=currentNode.nextNode;
            currentNode.nextNode=newnode;
        } 
        else {
            while (currentNode) {
                if(currentNode.year === yearAfter){
                    newnode.nextNode=currentNode.nextNode;
                    currentNode.nextNode=newnode;
                    break;
                }
                currentNode = currentNode.nextNode; 
            }
        }
      }    
    yearExist = (year) =>{
        let currentNode = this.headNode;
        if (currentNode.year === year) {
            return true;
        } 
        else {
            while (currentNode) {
                if(currentNode.year === year){
                    return true;
                }
                currentNode = currentNode.nextNode; 
            }
          }
        return false;

    }
    dataAsString(year) {
        let dataString = "";
        let currentNode = this.headNode;
        while (currentNode &&  currentNode.year<year) {
          dataString = dataString + `Year ${currentNode.year} : ${currentNode.highlight} \n`;
          currentNode = currentNode.nextNode;
        }
        //dataString+="Year year : THIS YEAR";
        return dataString;
      }
    }
 
myList= new LinkedList(1,"I was born");
myList.addAfter(3,"I started walking",1);
myList.addAfter(7,"I turned seven",3);
const age = prompt("what is your age?");
for (let i = 1; i < age; i++) {
    if(!myList.yearExist(i)){
        let highlight = prompt("enter the highlight of year "+i + ": ");
        myList.addAfter(i,highlight,i-1);
    }
}
console.log(myList.dataAsString(age))