import Node from "./Node.js";

export default class LinkedList {

    constructor() {
        this.PTR = null;
        this.size = 0;
    }

    // Insert at the last position
    append(data) {
        if (this.PTR == null) {
            this.PTR = new Node(data, null);
        } else {
            let temp = new Node(data, null);
            let p = this.PTR;
            while (p.getLink() != null) {
                p = p.getLink();
            }
            p.setLink(temp);
        }
        this.size += 1;
    }

    // Insert as PTR
    pullUp(data) {
        if (this.PTR == null) {
            this.PTR = new Node(data, null);
        } else {
            let p = new Node(data, this.PTR);
            this.PTR = p;
        }
        this.size += 1;
    }

    // Insert after certain position
    appendAfter(position, data) {
        if (this.position == this.size - 1) {
            this.append(data);
        } else {
            let temp = new Node(data, null);
            let P = this.PTR;
            let i = 0;
            while (i != position) {
                i += 1;
                P = P.getLink();
            }
            temp.setLink(P.getLink());
            P.setLink(temp);
        }
        this.size += 1;
    }

    remove(position, options){
        let p = this.PTR;
        if(p == null){
            throw "There is no element in the Linked List";
        }
        if(position != null){
            if(position == 0){
                let g = this.PTR.getLink();
                this.PTR.setLink(null);
                this.PTR = g;
            }else{
                let i = 0;
                let prev = p;
                while(i != position){
                    prev = p;
                    p = p.getLink();
                }
                if(i == this.size-1){
                    prev.setLink(null);
                }else{
                    prev.setLink(p.getLink());
                }
                p = null;
            }
        }else{
            let value = options.value;
            while(p.getValue() != value){
                p = p.getLink();
            }
        }
        this.size -= 1;
    }

    search(position, options) {
        let p = this.PTR;
        if(p == null){
            throw "There is no element in the Linked List";
        }
        if(position != null){
            let i = 0;
            while(i != position){
                p = p.getLink();
                i += 1;
            }
        }else{
            let value = options.value;
            while(p.getValue() != value){
                p = p.getLink();
            }
        }
        return p;
    }

    getSize() {
        return this.size;
    }
}
