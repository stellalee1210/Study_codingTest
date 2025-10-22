function solution(phone_book) {
    const sortedPhoneBookList = phone_book.sort((a,b) => a.length - b.length);
    const set = new Set();
    
    for(let phoneNumber of sortedPhoneBookList){
        for(let index =1; index <= phoneNumber.length; index++){
            const str = phoneNumber.slice(0, index);
            if(set.has(str)) {
                return false;
            }
        }
        set.add(phoneNumber)
    }
    
    return true;
}