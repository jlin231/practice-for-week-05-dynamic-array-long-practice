class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
    // Your code here

  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.data[this.length] = val;
    return this.length++;
  }

  pop() {
    if (this.length === 0) {
      return this.length;
    }
    let lastvalue = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length--;
    return lastvalue;
  }

  shift() {
    let firstValue = this.data[0];
    for (let i = 0; i < this.data.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data[this.data.length - 1] = undefined;
    this.length--;
    return firstValue;
  }

  unshift(val) {
    //move elements down one index
    if (this.capacity === this.length) {
      this.resize();
    }
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = val;
    this.length++;
    return this.length;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    //makes array twice as large
    let newArr = new Array(this.capacity * 2);
    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.data[i];
    }
    this.capacity *= 2;
    this.data = newArr;
  }
}


module.exports = DynamicArray;
