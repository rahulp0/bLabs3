class PriorityQueue {
  constructor() {
    this.data = [];
  }

  push(value, priority = 0) {
    return this.data.push({
      value: value,
      priority: priority
    });
  }

  pop() {
    let index = 0;
    let min = Infinity;
    for (let i = 0; i < this.data.length; i++) {
      let priority = this.data[i].priority;
      if (Math.min(min, priority) === priority) {
        min = priority;
        index = i;
      }
    }
    return this.data.splice(index, 1)[0].value;
  }

  size() {
    return this.data.length;
  }
}

p = new PriorityQueue();
p.push('fourth priority',4);
p.push('thrd p',3);
p.push('one p',1);
p.push('two p',2);
p.push('zero p',0);
console.log("Contents of queue: ");
for (let i = 0; i < p.data.length; i++) 
    console.log( p.data[i].value)
console.log("DE q: ",p.pop());
console.log("DE q: ",p.pop());

for (let i = 0; i < p.data.length; i++) 
    console.log("q :  ", p.data[i].value)

