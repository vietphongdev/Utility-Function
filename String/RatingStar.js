const stars = "★★★★★✰☆☆☆☆☆";

const rating = star => {
  const rate = 
        stars.slice(5 - parseInt(star), 5) + 
        stars.slice(5 + Number.isInteger(star), 10 + Number.isInteger(star) - parseInt(star));
  console.log(rate);
};

rating(0); // ☆☆☆☆☆
rating(0.5); // ✰☆☆☆☆
rating(2.5); // ★★✰☆☆
rating(3); // ★★★☆☆
rating(4.5); // ★★★★✰
rating(5); // ★★★★★