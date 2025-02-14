function solution(my_string, alp) {
    return Array.from(my_string).map(word=> {return word !== alp ? word : word.toUpperCase()}).join('');
}


//or

function solution(my_string, alp) {
    return my_string.replaceAll(alp, alp.toUpperCase());
}
