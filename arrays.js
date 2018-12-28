var chocolateBars =["snicker", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
  
}

function destructivelyAddElementToBeginningOfArray(array, element){
const newArr = array.unshift(element)
  return newArr;
}

function addElementToEndOfArray(array, element){
  const diffArr = [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element)
}