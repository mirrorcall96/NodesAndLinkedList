const prompt = require('prompt-sync')({sigint: true});
class Node{
    constructor(data){
        this.data = data;
        this.children = [];
    }
    addChild(node){
        if(this.children.length < 2){
            this.children.push(node)
            console.log("added a child to",this.data);
        }
        else console.log("child is an orphan");
    }
    haveChild = (node) => {
        for (let i = 0; i < this.children.length; i++) {
            const element = this.children[i];
            if(element.data===node) return i;
        }
        return -1
    };
}
let root = new Node("family");
let prmpt = prompt("enter child full name (done if finished): ");
let all;
while(prmpt !=="done"){
    all = prmpt.split(" ");
    all = all.reverse();
    all.shift();
    let addto = root;
    while(all.length >0){
        if (all.length ===1){
            let newnode = new Node(all[0]);
            addto.addChild(newnode);
            all.shift()
        }
        else{
            if(addto.haveChild(all[0]) !== -1){
                addto=addto.children[addto.haveChild(all[0])]
                all.shift()
            }
            else{
               console.log("parent does not exist");
               break; 
            }
        }
        
    }
    prmpt = prompt("enter child full name (done if finished): ");
    
}
