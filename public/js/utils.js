const utils = {};
utils.flaggedUsers = [1663882102141, 1663900040545, 1664485938220];
utils.formatPercent = (n) => {
  return (n * 100).toFixed(2) + "%";
};
utils.printProgress = (count, max) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  let percent = utils.formatPercent(count / max);
  process.stdout.write(count + "/" + max + " (" + percent + ")");
};

utils.groupBy = (objarr, key) => {
  let groups = {};
  for (let obj of objarr) {
    let val = obj[key];
    if (groups[val] == null) {
      groups[val] = [];
    }
    groups[val].push(obj);
  }
  return groups;
};
