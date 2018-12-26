//!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t){console.log("Inside bundle.js")}]);

console.log("This prints too!");

const Queue=()=> {
    const queue=[]
    return{
        enqueue(obj){
            queue.unshift(obj)
            return obj
        },
        dequeue(){
            return queue.pop();
        },
        peek(){
            return queue[(queue.length)-1]
        },
        get_len(){
            return (queue.length)
        },
        is_Empty(){
            return (queue.length==0)
               
        }

    }
}
/*
const Q = Queue()
console.log(Q.is_Empty())
Q.enqueue('Hello this is')
Q.enqueue('Currently in js')
Q.enqueue("But we need this to be in es6")
console.log(Q.peek())
console.log(Q.get_len())
console.log("Empty? ", Q.is_Empty())
Q.dequeue()
console.log(Q.peek())

console.log(Q.get_len())
console.log("Empty? ", Q.is_Empty())
Q.dequeue()
console.log(Q.peek())

console.log(Q.get_len())
console.log("Empty? ", Q.is_Empty())

*/

const qu = Queue()
console.log("Empty?",qu.is_Empty());

console.log("Empty?",qu.is_Empty())
console.log("En Q: ",qu.enqueue('First'))
console.log("En Q: ",qu.enqueue('Second'))

console.log("En Q: ",qu.enqueue('Third'))
console.log("En Q: ",qu.enqueue('Fourth'))
console.log("En Q: ",qu.enqueue('Fifth'))

console.log("peek: ",qu.peek())
console.log("de Q: ",qu.dequeue())
console.log("de Q: ",qu.dequeue())
console.log("peek: ",qu.peek())

console.log("len Q: ",qu.get_len())

console.log("Empty?",qu.is_Empty());




