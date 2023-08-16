const p = [
  {
    id: 1,
    name: "John Doe",
    city: "New York",
    state: "New York",
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    city: "Los Angeles",
    state: "California",
    isActive: false,
  },
  {
    id: 3,
    name: "Michael Johnson",
    city: "Chicago",
    state: "Illinois",
    isActive: true,
  },
  {
    id: 4,
    name: "Emily Brown",
    city: "Houston",
    state: "Texas",
    isActive: true,
  },
];
const result = p.map((item) => {
  const result2 = { ...item };
  if (result2.isActive == false) {
    result2.isActive = "not Available";
  } else {
    result2.isActive = "Available";
  }
  return result2;
});
console.log(result);
console.log(p);
