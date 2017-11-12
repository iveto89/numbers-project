function printNumbers() {
    let arr1 = Array.from(new Array(101),(val,index) => index)
        .filter(item =>  (item % 15 == 0 ))
        .map(item => { return {key: 'AB', value: item}});

    let arr2 = Array.from(new Array(101),(val,index) => index)
        .filter(item =>  {return (item % 3 == 0 && !(item % 15 == 0) )})
        .map(item => {return {key: 'A', value: item}});

    let arr3 = Array.from(new Array(101),(val,index) => index)
        .filter(item =>  {return (item % 5 == 0 &&  !(item % 15 == 0) )})
        .map(item => {return {key: 'B', value: item}});

    let arr4 = Array.from(new Array(101),(val,index) => index)
        .filter(item =>  {return (item % 5 != 0 &&  item % 3 != 0 && item % 15 != 0 )})
        .map(item => {return {key: item, value: item}});

    let merged_arr = arr1.concat(arr2, arr3, arr4);

    let sorted_arr =  merged_arr.sort(function(a, b){
        return parseFloat(a.value) - parseFloat(b.value);
    });

    Array.from(sorted_arr, (val) => val)
        .map(item => document.write(`${item.key}<br>`));


}

printNumbers();
