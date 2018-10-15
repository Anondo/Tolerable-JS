class Nodes{
  public data:number;
  public next:Nodes;
  constructor(data:number = null , next:Nodes = null)
  {
    this.data = data;
    this.next = next;
  }
};

class LinkedList{
  private head;
  constructor()
  {
    this.head = new Nodes();
  }
  public push(data):void
  {
    if(!this.head.data)
      this.head.data = data;
    else
    {
      var temp = new Nodes(data , this.head);
      this.head = temp;
    }
  }
  public list(): number[]
  {
    var data:number[] = [];
    var current:Nodes = this.head;
    while(current)
    {
      data.push(current.data);
      current = current.next;
    }
    return data;
  }
  public pop(): number
  {
    var current = this.head;
    try
    {
      if(!current.data || !current)
        throw new Error("Cannot perform 'pop()' on empty list");
      var data:number = current.data;
      this.head = current.next;
      return data;
    }
    catch(e)
    {
      console.log(e.message);
      return;
    }

  }

};

var linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
console.log(linkedList.list());
console.log(linkedList.pop());
console.log(linkedList.list());
