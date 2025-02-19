function solution(price, money, count) {
    let fin_price =0;
    for(let i=1; i<=count; i++) {
        fin_price += price * i;
    }
    return fin_price - money < 0 ? 0 : fin_price - money ;
}