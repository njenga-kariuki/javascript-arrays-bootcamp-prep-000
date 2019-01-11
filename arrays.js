var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {
    var new_array = [element...array]
}

function destructivelyAddElementToBeginningOfArray(array,element) {
    array.unshift(element)
} 

function addElementToEndOfArray(array,element) {
    var new_array2 = [array...element] 
} 

function desctrutivelyaddElementToEndOfArray(array,element) {
    array.push(element)
} 

function accessElementInArray(array,index) {
    console.log(array[0])
} 

function desctrutivelyRemoveElementFromBeginningOfArray(array,element) {
    array.shift
    array
} 

function removeElementFromBeginningOfArray(array) {
   array.slice(0)
   array
} 

function desctrutivelyRemoveElementFromEndOfArray(array) {
    array.pop
} 

function removeElementFromEndOfArray(array) {
    array.slice(array.length-1)
} 