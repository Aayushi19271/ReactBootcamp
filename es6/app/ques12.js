class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor(){
         this.head = null;
    }
}

LinkedList.prototype.addFirst = function(data){
    let newNode = new Node(data);
    newNode.next=this.head;
    this.head = newNode;
    return this.head;
}

LinkedList.prototype.addLast = function(data)
{
    let newNode = new Node(data);
    if(this.head==null)
    {
        this.head=newNode;
        return this.head;
    }
    else
    {
        let temp = this.head;
        while(temp.next!=null)
        {
            temp=temp.next;

        }
        temp.next=newNode;
        return this.head;
    }
}

LinkedList.prototype.printList = function()
{
    let temp = this.head;
    while(temp.next!=null)
    {
        console.log(temp.data);
        temp=temp.next;
    }
    console.log(temp.data);
}

LinkedList.prototype.getFirst = function()
{
    let temp = this.head;
    return temp.data;
}

LinkedList.prototype.getLast = function()
{
    let temp = this.head;
    while(temp.next!=null)
    {
        temp=temp.next;
    }
    return temp.data;
}
LinkedList.prototype.getlength = function()
{
    let length =  0;
    let temp = this.head;
    while(temp.next!=null)
    {
        length = length +1;
        temp=temp.next;
    }
    console.log('The Length is :',length+1);
}

export default LinkedList;