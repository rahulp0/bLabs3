class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head   = null;
    this.length = 0;
  }
  
  add(data) {
    const n_Add = new Node(data);
    let n_Check = this.head;
    if(!n_Check) {
      this.head = n_Add;
      this.length++;
    return n_Add;
    }
    while(n_Check.next) {
      n_Check = n_Check.next;
    }
    n_Check.next = n_Add;
    this.length++;
    return n_Add;
  }
  get(num) {
    let n_Check = this.head;
    let count = 0;
    
    if(num > this.length) 
      return "Doesn't Exist!"
    
    while(count < num) {
      n_Check = n_Check.next;
      count++;
    }
    
    return n_Check;
  }
  remove(num) {
    let n_Check = this.head,
        count       = 0,
        prevNode    = null;
    
    if(num > this.length) 
      return "Doesn't Exist!"
    
    if(num === 0) {
      this.head = n_Check.next;
      this.length--;
      
      return this.head;
    }
    
    while(count < num) {
      prevNode = n_Check;
      n_Check = n_Check.next;
      count++;
    }
    
    prevNode.next = n_Check.next;
    n_Check = null;
    this.length--;
    
    return this.head;
  }  
}
var ll = new LinkedList();
var trav = new LinkedList();
trav =ll;
ll.add(9);
ll.add(43);
ll.add(56);
ll.add(65);
ll.add(534);
ll.add(89);
ll.add(5236);
ll.add(22);
ll.add(11);
var n = new Node();
n=trav.head;

cnt=0;
while(n){
  console.log(cnt++,':' ,n.data);
  n = n.next;
  
}

trav =ll;
ll.remove(4);
n=trav.head;
console.log("Removing 4th elem");
var cnt=0;
while(n){
  console.log(cnt++,':',n.data);
  n = n.next;
  
}

console.log("Removing 6th elem");

ll.remove(6);

n=trav.head;

cnt=0;
while(n){
  console.log(cnt++,':',n.data);
  n = n.next;
  
}



