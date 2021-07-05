function calcPI(n) {
  let k = 0;

  for (let i = 0; i < n; ++i) {
    const x = Math.random();
    const y = Math.random();

    if (x * x + y * y <= 1) {
      k++;
    }
  }

  return (4 * k) / n;
}

console.log(calcPI(100));
console.log(calcPI(1000));
console.log(calcPI(10000));
