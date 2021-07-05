// 获取 [0, max) 之间的整数
function random(max = 1) {
  return Math.floor(Math.random() * max);
}

function hasMajorElementCertainly(arr) {
  const m = new Map();
  let count = 0;

  for (const e of arr) {
    if (m.has(e)) {
      m.set(e, m.get(e) + 1);
    } else {
      m.set(e, 1);
    }

    if (m.get(e) > count) {
      count = m.get(e);
    }
  }

  if (count > arr.length / 2) {
    return true;
  } else {
    return false;
  }
}

function hasMajorElementUncertainly(arr) {
  const majority = (arr) => {
    const t = random(arr.length);
    const x = arr[t];
    let count = 0;

    for (const e of arr) {
      if (e === x) {
        count++;
      }
    }

    return count > arr.length / 2;
  };

  for (let i = 0; i < arr.length; i++) {
    if (majority(arr)) {
      return true;
    }
  }

  return false;
}

console.log(hasMajorElementCertainly([1, 1, 1, 1, 1, 1, 6, 7, 8, 9]));
console.log(hasMajorElementUncertainly([1, 1, 1, 1, 1, 1, 6, 7, 8, 9]));

console.log(hasMajorElementCertainly([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(hasMajorElementUncertainly([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
