export default class sort{
    constructor(arr){
        this.arr = arr;
        this.min = 1;
        this.max = 100;
        this.q = Math.floor(Math.random() * (this.max - this.min) + this.min)
    }
    sortByName(){        
        let res = this.arr.sort((a, b) => a.name.localeCompare(b.name))
        return res
    }
    randomPosition(){   
        let random = this.arr.map(el => {
            this.q = Math.floor(Math.random() * (this.max - this.min) + this.min)
            return { ...el, id: this.q }; 
        });    
        console.log(random);
        
        let sorted = random.sort((a, b) => a.id - b.id)
        console.log(sorted);
        return sorted
    }
}