class Nodes{
  public data:number;
  public leftChild:Nodes;
  public rightChild:Nodes;
  constructor(data:number = null , leftChild:Nodes = null , rightChild = null)
  {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class BinaryTree{
  private root:Nodes;
  constructor()
  {
    this.root = new Nodes();
  }
  public push(data:number):void
  {
      if(!this.root.data)
          this.root.data = data;
      else
      {
        var parent:Nodes = this.root;
        var current:Nodes = parent;
        while(1)
        {
          if(!parent.leftChild || !parent.rightChild)
          {
            parent.leftChild = new  Nodes();
            parent.rightChild = new  Nodes();
          }

          if(data < parent.data)
              current = parent.leftChild;
          else
              current  = parent.rightChild;
          if(!current.data)
          {
            current.data = data;
            break;
          }
          else
            parent = current;
        }

      }
  }
  public search(data:number):void
  {
    var current:Nodes = this.root;
    while(1)
    {
      if(current.data == data)
      {
        console.log(data + " found");
        break;
      }

      else
          if(data < current.data)
              current = current.leftChild
          else
              current = current.rightChild
      if(!current)
      {
        console.log("Data Not Found");
        break;
      }

    }

  }

}

var tree = new BinaryTree();
tree.push(27);
tree.push(14);
tree.push(35);
tree.push(10);
tree.push(19);
tree.push(31);
tree.push(42);
tree.search(43);
