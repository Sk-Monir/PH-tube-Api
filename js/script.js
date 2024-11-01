// Create loadCategories 
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((err) => console.log(err))
}
// create displayCategories
const displayCategories = (items) => {
    items.forEach((item) => {
        console.log(item)
        // select categories container
        const catagories = document.querySelector('.catagories');
        // create categories menu button dynamically
        const btn = document.createElement('btn');
        btn.classList = 'btn';
        btn.innerText = item.category;
        // add menu button in categories container
        catagories.append(btn);

    }
    )

};
loadCategories();

