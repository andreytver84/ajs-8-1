// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

class Team {
    constructor() {
        this.members = new Set();
    }
    static add(char) {
        if (this.members.has(char)) {
            throw new Error('Персонаж уже в команде');
        } else {
            this.members.add(char);
        }                  
    }
    static addAll(...char) {
        this.members.add(...char);
    };
    static toArray() {
        return Array.from(this.members);
    };
}