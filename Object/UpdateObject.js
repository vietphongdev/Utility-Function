function updateObject(obj, keys, values) {
  if (keys.length !== values.length) {
    throw new Error("The number of keys and values must be the same");
  }

  const updatedObj = { ...obj };

  keys.forEach((key, index) => {
    const keyLevels = key.split(".");
    let currentObj = updatedObj;

    keyLevels.forEach((keyLevel, i) => {
      if (i === keyLevels.length - 1) {
        currentObj[keyLevel] = values[index];
      } else {
        if (!currentObj.hasOwnProperty(keyLevel)) {
          currentObj[keyLevel] = {};
        }
        currentObj = currentObj[keyLevel];
      }
    });
  });

  return updatedObj;
}

const updatedKeys = [
  "name",
  "age",
  "skill.fe.react",
  "phone",
  "skill.fe.vue",
  "address.city",
];
const updatedValues = [
  "feng",
  30,
  ["ReactQuery", "Formik"],
  99999,
  "Nuxtjs",
  "HND",
];
const newPerson = updateObject(person, updatedKeys, updatedValues);
console.log(newPerson);
console.log(person);
