const bugs = require('./data/bugs');
bugs.forEach((bug) => {
  bug.icon = bug.name.trim()
});
console.log(bugs);
