import Node from "./Node";

export default class LinkedList{
    
    constructor(size){
        this.PTR = null;
        this.size = size;
    }

    add(value,position){
        let newElement = new Node(value,null);
        let prev = this.PTR;
        if(position == 0){
            newElement.setLink(this.PTR);
        }else if(position == this.size-1){

        }else{

        }
    }

    remove(value,position){
        if(value != null){
            if(position == 0){

            }else if(position == this.size-1){

            }else{

            }
        }else{

        }
    }

    search(){
        if(value != null){
            if(position == 0){

            }else if(position == this.size-1){

            }else{

            }
        }else{

        }
    }

    getSize(){
        return this.size;
    }
}