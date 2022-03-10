function size_of (array) {
    let count = 0 ; 
    for (index in array) {
        count++ ; 
    }
    return count ; 
}

function chunk(array, size) {
    let result = [] ; 
    if (size === 0) {
        return result ; 
    }
    const size_array = size_of(array) ; 
    for (let i=0; i<size_array;i = i + size) {
        let temp = [] ; 
        let end_index = Math.min(size_array,i+size) ; 
        temp = array.slice(i,end_index) ; 
        result.push(temp) ; 
    }

    return result ; 
}

function compact(array) {
    let result = []; 
    for (let index in array){
        let element = array[index];
        if (element !== false && element !== null && element !== 0 && element !== "") {
            result.push(element);
        }
    }
    return result;
}

function sameValueZero(x,y) {
    return x === y ; 
}

function diffrence (array,values) {
    //another solution can be using set
    let result = [] ; 
    for (let ele of array) {
        let toggle = false ; 
        for (let value of values) {
             if (sameValueZero(ele,value)) {
                 toggle = true ; 
                 break ; 
             }
        }
        if (!toggle) {
        result.push(ele) ; 
        }
    }
    return result; 
}

function drop(array,value = 1) {
        let array_length = size_of(array) ; 
        if (array_length <= value) {
            return [] ; 
        }

        return array.slice(value) ; 
}


function fill(array,value,start=0,end = size_of(array) ) {
    end = Math.min(size_of(array),end) ; 
    for (let i=start; i<end; i++) {
        array[i] = value ; 
    }

    return array ; 
}

// function makeArray(value) {

// }

function flattendepth(array,depth=1) {
    if (depth === 0) {
        return array ; 
    }
    let result = [] ; 
    for (let value of array) {
        if (Array.isArray(value)) {
        result = [...result,...value] ; 
        }
        else {
            result = [...result,value] ; 
        }
    }
    depth-- ; 
    return flattendepth(result,depth) ; 
}






const array = [1, [2, [3, [4]], 5]]; ; 

console.log(flattendepth(array,1)); 