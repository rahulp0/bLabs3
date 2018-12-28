const Stack=()=> {
  const stack=[]
  return{
      Push(obj){
          stack.push(obj)
          return obj
      },
      Pop(){
          return stack.pop();
      },
      peek(){
          return stack[(stack.length)-1]
      },
      get_len(){
          return (stack.length)
      },
      is_Empty(){
          return (stack.length==0)
             
      }

  }
}

const qu = Stack()
console.log("Empty?",qu.is_Empty());

console.log("Empty?",qu.is_Empty())
console.log("En Q: ",qu.Push('First'))
console.log("En Q: ",qu.Push('Second'))

console.log("En Q: ",qu.Push('Third'))
console.log("En Q: ",qu.Push('Fourth'))
console.log("En Q: ",qu.Push('Fifth'))

console.log("peek: ",qu.peek())
console.log("de Q: ",qu.Pop())
console.log("de Q: ",qu.Pop())
console.log("peek: ",qu.peek())

console.log("len Q: ",qu.get_len())

console.log("Empty?",qu.is_Empty());




