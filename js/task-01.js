const categoriesEl = document.querySelector('ul');


const getNumCategories = (categories) => console.log(`Number of categories: ${categories.children.length}`);

getNumCategories(categoriesEl);


const itemsEl = categoriesEl.querySelectorAll('.item');

const getTitleAndNumItem = (items) => {
    return items.forEach(el => console.log(
        `Category: ${el.children[0].textContent}
Elements: ${el.lastElementChild.children.length}`))
}

getTitleAndNumItem(itemsEl)
