/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

const pets = [
    {
        name: 'billy',
        type: 'dog',
        breed: 'aussie',
        age: 5,
        photo: "img/aussie.jpg"
    },   
    {
        name: 'Joey',
        type: 'dog',
        breed: 'dachsund',
        age: 2,
        photo: 'img/dachshund.jpg'
        
    },
    {
    
        name: 'Lily',
        type: 'dog',
        breed: 'golden retriever',
        age: 3,
        photo: 'img/golden.jpg'
    },
    {
        name: 'Ramy',
        type: 'cat',
        breed: 'persian',
        age: 5,
        photo: 'img/persian.jpg'
    },
    {
        name: 'Princess',
        type: 'dog',
        breed: 'pug',
        age: 8,
        photo: 'img/pug.jpg'
    }
];

let html = '';

for (let i = 0; i < pets.length; i++) {
      let pet = pets[i];
      html+=
      `<h2>${pet.name}</h2>
      <h3>${pet.type} | ${pet.breed}</h3>
      <p>Age: ${pet.age}</p>
      <img src=${pet.photo} alt="${pet.breed}">`
    
      }

document.querySelector('main').insertAdjacentHTML('beforeend', html);