const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('li.item');

console.log('Кількість категорій:', categoryItems.length);

categoryItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;

  const categoryElements = item.querySelectorAll('ul > li');

  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryElements.length}`);
});
