var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]
 
function addElementToBeginningOfArray(array,element) {
    var new_array = [element,...array]
return new_array
}
 
function destructivelyAddElementToBeginningOfArray(array,element) {
    array.unshift(element)
returnarray 
} 
 
function addElementToEndOfArray(array,element) {
    var new_array2 = [...array,element] 
returnnew_array2
} 
 
function destructivelyAddElementToEndOfArray(array,element) {
    array.push(element)
return array
} 
 
function accessElementInArray(array,index) {
    return array[index]
} 
accessElementInArray([1, 2, 3], 2)
 
function destructivelyRemoveElementFromBeginningOfArray(array,element) {
 array.shift(element)
 return array
}

function removeElementFromBeginningOfArray(array) {
array.slice(0)
return array
}
removeElementFromBeginningOfArray([1, 2, 3])

function destructivelyRemoveElementFromEndOfArray(array) {
 array.pop()
return array
}
destructivelyRemoveElementFromEndOfArray([1, 2, 3])


function removeElementFromEndOfArray(array) {
 return array.slice(0,array.length-1)
}
