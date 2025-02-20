function solution(s) {
    const len = s.length;
    return (len === 4 || len === 6) ? 
        (s.replaceAll(/[0-9]/g, "") === "" ? true : false) : false;
}
