function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var arrayExample = ["apple", "banana", "cantaloupe"]
  arrayExample.forEach(callback)
  return arrayExample
}

function doToArray(array, callback) {
  array.forEach(callback)
}
