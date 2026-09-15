class Node{
    constructor(name){
        this.name=name;
        this.innerHTML='';
        this.children=[];
    }
    appendChild(node) {
        this.children.push(node);
    }
}
const getSpaces = (length) => {
    return new Array(length).fill(" ").join("");
};
class VDom extends Node{
    constructor(){
        super('html')
    }

    createElement(nodeName){
        return new Node(nodeName)
    }
    render(){
        function printName(currentNode,currentLevel){
          const spaces = getSpaces(currentLevel*2);

          let output='';
          output+=`${spaces}<${currentNode.name}>\n`;
          if(currentNode.innerHTML){
            output += `${spaces}${getSpaces(2)}${
                currentNode.innerHTML
            }\n`;
          }
         for(let i=0;i<currentNode.children.length;i++){
            output+=printName(currentNode.children[i],currentLevel+1);
         }
         output+=`${spaces}</${currentNode.name}>\n`
         return output;
        }
        console.log(printName(this,0))
    }
   
}

const vDocument = new VDom();
const body = vDocument.createElement("body");
const div = vDocument.createElement("div");

div.innerHTML = "Hello, I am a div!";
body.appendChild(div);

// Dynamic Insertion by the interviewer
/*
	const div1 = vDocument.createElement("div");
	const div2 = vDocument.createElement("div");
	div1.innerHTML = "Hello, I am a div 1!";
	div2.innerHTML = "Hello, I am a div 2!";
	div.appendChild(div1);
	body.appendChild(div2);
*/

vDocument.appendChild(body);

vDocument.render();
