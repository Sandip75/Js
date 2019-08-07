const productoperation = {
    products: [],

    search() {
        
    },

    read() {
        for (let i = 1; i <= 10; i++) {
            let url = i % 2 == 0 ? "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/A/68608_1544866199.jpg" : "http://aux4.iconspalace.com/uploads/846839393214911502.png";
            let product = new Product(i, "Mi" + i, 1000 * i, url, "This has ram " + i);
            this.products.push(product);
        }
    },

    add() {

    },

    remove() {

    },

    update() {

    },

    sort() {

    }
}