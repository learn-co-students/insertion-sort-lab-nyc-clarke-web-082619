function findMinAndRemove(array) {
    let min = array[0];
    let minIdx = 0;
    for (let i = 1; i < array.length; ++i) {
        if (min > array[i]) {
            min = array[i];
            minIdx = i;
        }
    }
    array.splice(minIdx,1);
    return min;
}

function insertionSort(array) {
    let sorted = [];
    while(array.length > 0) {
        sorted.push(findMinAndRemove(array));
    }
    return sorted;
}
