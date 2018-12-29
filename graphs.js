class Graph { 
	 
	constructor(v) 
	{ 
		this.num_v = v; 
		this.AdjList = new Map(); 
	} 
  
  addVertex(v) 
  { 
    this.AdjList.set(v, []); 
  } 

  addEdge(v, w) 
  { 
    this.AdjList.get(v).push(w); 
    this.AdjList.get(w).push(v); 
  } 

  printGraph() 
  { 
    var get_keys = this.AdjList.keys(); 
    for (var i of get_keys) 
    { 
      
      var get_values = this.AdjList.get(i); 
      var conc = ""; 
      for (var j of get_values) 
        conc += j + " "; 

      console.log(i + " -> " + conc); 
    } 
  } 
}

var g = new Graph(6); 
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 

for (var i = 0; i < vertices.length; i++) { 
	g.addVertex(vertices[i]); 
} 

// adding edges 
g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F'); 

// prints all vertex and 
// its adjacency list 
// A -> B D E 
// B -> A C 
// C -> B E F 
// D -> A E 
// E -> A D F C 
// F -> E C 
g.printGraph(); 

