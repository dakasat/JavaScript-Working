function consoleRec(arr, count) {
    console.log(arr[count++]);
    if(arr.length > count) consoleRec(arr, count);
}

module.exports = consoleRec;