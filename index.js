const testVar = {}



// superbowlWin
// 1) returns a year the KC Chiefs won the superbowl
// 2) returns undefined if the record has no win objects

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const winYear = array.find(year => year.result === "W")
  return winYear ? winYear.year : undefined
}

