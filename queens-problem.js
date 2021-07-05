// 获取 [0, max) 之间的整数
function random(max = 1) {
  return Math.floor(Math.random() * max);
}

class Queen {
  constructor(num, stepVegas = 0) {
    this.num = num;
    this.arr = [];
    this.result = [];
    this.initList();
    this.comb(stepVegas);
  }

  initList() {
    let num = this.num;
    for (let i = 0; i < num; i++) {
      this.arr[i] = 0;
    }
  }

  backtrack(row) {
    if (row === this.num) {
      this.result.push(JSON.parse(JSON.stringify(this.arr)));
      return;
    }

    for (let col = 0; col < this.num; col++) {
      this.arr[row] = col;
      if (this.isSafe(row)) {
        this.backtrack(row + 1);
      }
    }
  }

  lv(row) {
    if (row === this.num) {
      this.result.push(JSON.parse(JSON.stringify(this.arr)));
      return;
    }

    let nb = 0;
    let j = -1;
    for (let col = 0; col < this.num; col++) {
      this.arr[row] = col;
      if (this.isSafe(row)) {
        nb++;
        const r = 1 + random(nb);
        if (r === 1) {
          j = col;
        }
      }
    }

    if (nb > 0) {
      this.arr[row] = j;
    } else {
      return false;
    }
  }

  comb(stepVegas) {
    let i = 0;
    while (i < stepVegas) {
      this.lv(i);
      i++;
    }

    this.backtrack(i);
  }

  isSafe(row) {
    for (let i = 0; i < row; i++) {
      // 判断列
      if (this.arr[i] === this.arr[row]) return false;
      // 判断对角线
      if (Math.abs(this.arr[row] - this.arr[i]) === row - i) return false;
    }
    return true;
  }
}

const beginTimestamp = Date.now();

const queen = new Queen(4, 0);
console.log(queen.result);
console.log(Date.now() - beginTimestamp);
