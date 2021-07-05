// 获取 [0, max) 之间的整数
function random(max = 1) {
  return Math.floor(Math.random() * max);
}

function multip(X, A, n) {
  const r = [];
  for (let i = 0; i < n; i++) {
    let t = 0;
    for (let j = 0; j < n; j++) {
      t += X[j] * A[j][i];
    }
    r.push(t);
  }

  return r;
}

function goodProduct(A, B, C, n) {
  const X = [];
  for (let i = 0; i < n; i++) {
    X[i] = random(2);
  }

  const leftR = multip(multip(X, A, 3), B, 3);
  const rightR = multip(X, C, 3);

  for (let i = 0; i < n; i++) {
    if (leftR[i] !== rightR[i]) {
      return false;
    }
  }

  return true;
}

function repeatGoodProduct(A, B, C, n, k) {
  for (let i = 0; i < k; i++) {
    if (!goodProduct(A, B, C, n)) {
      return false;
    }
  }

  return true;
}

const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const B = [
  [3, 1, 4],
  [1, 5, 9],
  [2, 6, 5],
];
const C = [
  [11, 29, 37],
  [29, 65, 91],
  [47, 99, 45],
];

console.log(repeatGoodProduct(A, B, C, 3, 100));
