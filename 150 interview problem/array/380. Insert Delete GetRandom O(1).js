
var RandomizedSet = function() {
    this.set = new Set(); 
};

/** 
 * @param {number} val
 * @return {boolean}
 https://leetcode.com/problems/insert-delete-getrandom-o1/description/?envType=study-plan-v2&envId=top-interview-150
 */
RandomizedSet.prototype.insert = function(val) {
    if(!this.set.has(val)){
        this.set.add(val);
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.set.has(val)){
        this.set.delete(val);
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let num = Math.floor(Math.random() * this.set.size);
    let arr = [...this.set];
    return arr[num];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
