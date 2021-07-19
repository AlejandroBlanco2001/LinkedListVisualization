export default class Node{

    constructor(value, link){
        this.value = value;
        this.link = link;
    }

    getValue(){
        return this.value;
    }

    getLink(){
        return this.link;
    }

    setLink(link){
        this.link = link;
    }

    setValue(value){
        this.value = value;
    }
}