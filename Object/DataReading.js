const product = {
  id: 1,
  names: "gokul",
  phone: "oneplus",
  pet: "Cat",
};
const { names, phone, pet, balance = "Insufficient" } = product; //Destructuring
console.log(names, phone, balance);
const sen = `Hi am ${names} and i got ${phone} with a ${pet}`;
console.log(sen);
