
  
  const getRandomIntInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const getRandomRGB = () => {
    const r = getRandomIntInclusive(0, 255);
    const g = getRandomIntInclusive(0, 255);
    const b = getRandomIntInclusive(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
  };
  
  const handleOnClick = () => {
    containerElm.style.backgroundColor = getRandomRGB();
  }
  
  const containerElm = document.querySelector("#container");
  containerElm.addEventListener("click", handleOnClick);
