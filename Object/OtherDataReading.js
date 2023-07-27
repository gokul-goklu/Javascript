const product = {
  id: 1,
  names: "gokul",
  phone: "oneplus",
  pet: "Cat",
};

// First way
const first = `Iam ${product.names} and i bought ${product.phone} and a ${product.pet}`;

console.log(first);

//second way
const idNames = product.names;
console.log(`iam ${idNames}`);

//Recommended way
const { names, phone, pet } = product;
console.log(`iam ${names} and bought new ${phone} along with ${pet}`);
