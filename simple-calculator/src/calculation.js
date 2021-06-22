const add = (a,b) => {
    return (a+b);
}

const sub = (a,b) => {
    return (a-b);
}

const mul = (a,b) => {
    return (a*b);
}

const div = (a,b) => {  
    let flag = a/b;
    flag = flag.toFixed(2);
    return (flag);
}

export {add,sub,mul,div};