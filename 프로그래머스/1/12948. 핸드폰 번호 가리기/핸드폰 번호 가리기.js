function solution(phone_number) {
    return phone_number.slice(phone_number.length -4).padStart(phone_number.length, '*');
}


//정규식 풀이

function hide_numbers(s){
  return s.replace(/\d(?=\d{4})/g, "*");
}
