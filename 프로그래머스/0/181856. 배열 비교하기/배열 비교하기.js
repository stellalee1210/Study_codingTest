function solution(arr1, arr2) {    
    if(arr1.length == arr2.length){
        const sumOne = arr1.reduce((acc,num) => acc+num, 0);
        const sumTwo = arr2.reduce((acc,num) => acc+num, 0);
        if(sumOne - sumTwo == 0){
            return 0;
        }else{
            return sumOne - sumTwo >0 ? 1 : -1;
        }
    }
    
    return arr1.length - arr2.length >0 ? 1 : -1;    
}