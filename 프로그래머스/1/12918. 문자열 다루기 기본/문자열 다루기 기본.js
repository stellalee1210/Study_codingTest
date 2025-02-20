function solution(s) {
    const len = s.length;
    return (len === 4 || len === 6) ? 
        (s.replaceAll(/[0-9]/g, "") === "" ? true : false) : false;
}


//or 

function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
