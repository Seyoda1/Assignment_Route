var createCnt=function(num){
    let cnt=num||0;
    const increment=()=>{
    cnt++;
    return cnt;
  };
  const decrement=()=>{
    cnt--;
    return cnt;
  };
  const reset=()=>{
    cnt=num||0;
    return cnt;
  };
  return {increment,decrement,reset };
};

let cnt=createCnt(5);
console.log(cnt.decrement());
console.log(cnt.increment()); 
console.log(cnt.reset()); 