class Node {
    constructor(data, nextNode = null) {
      this.data = data;
      this.nextNode = nextNode;
    }
  }
  
  class Queue {
    
    constructor(limit = null) {
      this.frontNode = null;
      this.backNode = null;
      this.limit = limit;
      this.size = 0;
      this.total=0;
    }
  
    isEmpty = () => this.size === 0;
  
    isFull = () => this.size === this.limit;
  
    peek = () => {
      if (this.isEmpty()) console.log("Empty queue!");
      else return this.frontNode;
    };
  
    enqueue = (data) => {
      if (this.isFull()) console.log("There's no place for you here");
      else {
        this.total+=data;
        const newNode = new Node(data);
        if (this.isEmpty()) {
          this.frontNode = newNode;
          this.backNode = newNode;
        } else {
          this.backNode.nextNode = newNode;
          this.backNode = newNode;
        }
        this.size++;
      }
    };
    addGroup = (data) =>{
        while(data>12){
            this.enqueue(12)
            data-=12;
        }
        this.enqueue(data)
    }
    dequeue = () => {
      if (this.isEmpty()) {
        console.log("OOps! Nothing to remove.");
      } else {
        
        const removedNode = this.frontNode;
        this.total-=removedNode.data;
        if (this.size === 1) {
          this.frontNode = null;
          this.backNode = null;
        } else {
          this.frontNode = removedNode.nextNode;
        }
        this.size--;
        return removedNode.data;
      }
    };
    time = () =>{
        return 0.5*this.total;
    }
  }

  q = new Queue(10);
  console.log("waiting time : ",q.time());
  q.addGroup(7);
  q.addGroup(13);
  q.addGroup(2);
  q.addGroup(2);
  console.log("waiting time : ",q.time());
  console.log("We let go of ",q.dequeue());
  console.log("waiting time : ",q.time());