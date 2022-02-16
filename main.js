function chooseBestSum(t, k, ls) {
  if (!ls) {
    return null;
  }

  if (ls.length < k) {
    return null;
  }
  const combinations = (elements) => {
    if (elements.length == 0) return [[]];

    const firstEl = elements[0];

    const rest = elements.slice(1);

    const combsWithoutFirst = combinations(rest);
    const combsWithFirst = [];

    combsWithoutFirst.forEach((combination) => {
      const combWithFists = [...combination, firstEl];

      combsWithFirst.push(combWithFists);
    });

    return [...combsWithoutFirst, ...combsWithFirst];
  };

  let possibilities = combinations(ls).filter((arr) => arr.length == k);

  if (!possibilities) {
    return null;
  }

  let sumArr = [];
  possibilities.forEach((el) => {
    let sum = 0;

    el.forEach((subel) => {
      sum += subel;
    });

    sumArr.push(sum);
  });

  let realPossibilities = sumArr.filter((element) => element < t + 1);

  if (!realPossibilities) {
    return null;
  }

  // console.log(realPossibilities);
  return Math.max(...realPossibilities);
}
