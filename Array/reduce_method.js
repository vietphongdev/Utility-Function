const people = [
    {id: "1", name: "phong", age: 10, country: "VN"},
    {id: "2", name: "viet", age: 2, country: "US"},
    {id: "3", name: "khuong", age: 30, country: "UK"},
    {id: "4", name: "nguyen", age: 40, country: "VN"},
  ];
  
  // 1. Count
  const count = people.reduce((acc, person) => acc + 1, 0);
  console.log('1. count >>>', count);
  
  // 2. Get Names
  const names = people.reduce((acc, person) => [...acc, person.name], []);
  console.log('2. names >>>', names);
  
  // 3. Sum Age
  const sumAge = people.reduce((acc, person) => acc + person.age, 0);
  console.log('3. sumAge >>>', sumAge);
  
  // 4. Get Max Age
  const maxAge = people.reduce((acc, person) => Math.max(acc, person.age), 0);
  const maxAge2 = Math.max(...people.map(person => person.age));
  console.log('4. maxAge >>>', maxAge);
  console.log('4.2 maxAge >>>', maxAge2);
  
  // 5. Get Min Age
  const minAge = people.reduce((acc, person) =>  Math.min(acc, person.age), people[0].age);
  const maiAge2 = Math.min(...people.map(person => person.age));
  console.log('5. minAge >>>', minAge);
  console.log('5.2 minAge >>>', maiAge2);
  
  // 6. Get Person With Age > 15
  const ageLargeMore = people.reduce((acc, person) => person.age > 15 ? [...acc, person.name] : acc, []);
  const ageLargeMore2 = people.filter(person => person.age > 15).map(person => person.name);
  console.log('6. ageLargeMore >>>', ageLargeMore);
  console.log('6.2 ageLargeMore >>>', ageLargeMore2);
  
  // 7. Statistic Country
  const statisticCountry = people.reduce((acc, person) => {
    return {...acc, [person.country] : (acc[person.country] || 0) + 1 }
  }, {});
  console.log('7. statisticCountry >>>', statisticCountry);
  
  
  
  
  
  
  
  