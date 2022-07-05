const categoriesEl = document.querySelectorAll('ul');


const getNumCategories = (categories) => console.log(`Number of categories: ${categories.length -1}`);

getNumCategories(categoriesEl);


const itemsEl = document.querySelectorAll('.item');

const getTitleAndNumItem = (items) => {
    return items.forEach(el => console.log(
        `Category: ${el.children[0].textContent}
Elements: ${el.lastElementChild.children.length}`))
}

getTitleAndNumItem(itemsEl)
