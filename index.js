class SortedList {

  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a-b});
    this.length = this.items.length;
  }

  get(pos) {
    if (pos>this.items.length-1) {
      throw new Error('OutOfBounds');
    } else {
    return(this.items[pos])
    }

  }

  max() {
    if (this.items.length === 0) {
    throw new Error('EmptySortedList');
    } else {
      this.items.sort(function(a, b){return a-b});
      return(this.items[this.items.length-1])
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
      } else {
        this.items.sort(function(a, b){return a-b});
        return(this.items[0])
      }
  }

  sum() {
    if (this.items.length === 0) {
      return(0);
      } else {
        return(this.items.reduce((a, b) => a + b, 0));
      }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
      } else {
        return(this.items.reduce((a, b) => a + b, 0) / this.items.length);
      }
  }
}

module.exports = SortedList;
