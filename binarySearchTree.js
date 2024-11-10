class node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class binarySearchTree{
      constructor(){
        this.root=null
      }
      insertNode(root,newNode){
        if(newNode.data<root.data){
            if(root.left===null)
                root.left=newNode
            else
                return this.insertNode(root.left,newNode)
        }
        else{
            if(root.right===null)
                root.right=newNode;
            else
                return this.insertNode(root.right,newNode)
        }
      }
      insert(val){
        const newNode=new node(val);
        if(this.root===null)
            this.root=newNode;
        else
            this.insertNode(this.root,newNode);
      }
      search(root,val){
        if(root===null)
           return `${val} not found in the tree`;
        if(val===root.data)
            return `${val} found in the tree`;
        else if(val<root.data)
            return this.search(root.left,val);
        else
           return this.search(root.right,val);
      }
      inorder(root){
        if(root===null)
            return root
        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
      }
      levelSearch(){
        if(this.root===null)
            console.log("Tree is empty");
        else{
            let queue=[]
            queue.push(this.root)
            while(queue.length){
                let current=queue.shift();
                console.log(current.data);
                if(current.left)
                    queue.push(current.left);
                if(current.right)
                    queue.push(current.right);
            }
        }
      }
      min(root){
        if(root===null)
            return null
        else{
            while(root.left!=null){
                root=root.left;
            }
            return root;
        }
      }
      max(root){
        if(root===null)
            return null;
        while(root.right!=null)
            root=root.right;
        return root; 
      }
      deleteNode(root,val){
        if(root===null)
            return root;
        else if(val<root.data)
             root.left=this.deleteNode(root.left,val);
        else if(val>root.data)
             root.right=this.deleteNode(root.right,val);
        else{
            if(!root.left&&!root.right)
                return null;
            if(!root.right)
                return root.left;
            if(!root.left)
                return root.right;
            root.data=this.min(root.right).data;
            root.right=this.deleteNode(root.right,root.data);
        }
        return root        
      }
      deleteT(val){
        this.root=this.deleteNode(this.root,val);
      }
}
const bst=new binarySearchTree();
bst.insert(2);
bst.insert(1);
bst.insert(3);
//bst.inorder(bst.root);
//console.log(bst.search(bst.root,8));
//bst.levelSearch();
//console.log(bst.max(bst.root))
bst.levelSearch();
bst.deleteT(2);
console.log("")
bst.levelSearch();