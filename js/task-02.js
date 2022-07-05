const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('ul#ingredients');


const ingredientsElements = ingredients.map((el) => {
  let res = document.createElement('li');
  res.textContent = el;
  res.classList.add('item');
  return res;
});

ingredientsListEl.append(...ingredientsElements);


