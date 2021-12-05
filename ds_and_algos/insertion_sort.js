const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

function insertionSort(array){
  //we have a sorted and unsorted partition;
    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current){
            array[j + 1] = array[j];
            j--;
        }
        //when we drop out of this loop we have hit the end of the array
        array[j + 1] = current
    }
    return array;
}

console.log(insertionSort(nums))