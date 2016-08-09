const usersList = [
  {id: 1, name: 'John', email: 'john@gmail.com'},
  {id: 2, name: 'George', email: 'george@gmail.com'},
  {id: 3, name: 'Ringo', email: 'ringo@gmail.com'},
  {id: 4, name: 'Paul', email: 'paul@gmail.com'}
];

export default function load(req) {
  return new Promise((resolve, reject) => {
    // make async call to database
    setTimeout(() => {
      resolve(usersList);
    }, 1000); // simulate async load
  });
}