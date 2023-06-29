let timer = 60;

const intervalId = setInterval(() => {
  console.log(timer);
  if(timer > 1){
      timer --;
  }
  else {
    console.log("Happy New Year !!!");
    clearInterval(intervalId)
  }
}, 1000)


