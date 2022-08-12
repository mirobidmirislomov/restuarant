const model = require('./model')

module.exports = {
    Query: {
        products: () => model.getProducstBasket(),
        allProducts: () => model.allProducts()
    },
    Mutation: {
        products: async(_, { id }) => {
            try{
                const foundProducts = await model.getProducts(id)

                if(!foundProducts) {
                    return 'Bu restaran mahsulatlari topilmadi'
                }

                return foundProducts
            }catch(err) {
                console.log(err);
            }
        },
        basketProducts: async(_, { id }) => {
            try {
                const foundProduct = await model.getProduct(id)
                if(!foundProduct.length) {
                    return "Bu id lik mahsulot topilmadi"
                }

                const foundProductBasket = await model.getProductBasket(foundProduct[0].product_img)
                if(foundProductBasket.length) {
                    await model.setCount(foundProductBasket[0].product_id)
                    return 'okk'
                }

                await model.addProductBasket(foundProduct[0].product_name, foundProduct[0].product_img, foundProduct[0].product_price)

                return "ok"
            }catch(err) {
                console.log(err);
            }
        },
        basketProductDel: async(_, { id }) => {
            await model.delProductBasket(id)

            return "Ok"
        },
        newProduct: async(_, { name, img, price, restuarant_id }) => {
            await model.newProduct(name, img, price, restuarant_id)

            return 'ok'
        },
        delProduct: async(_, { id }) => {
            await model.delProduct(id) 
            return "ok"
        }
    }, 
    Product: {
        id: g => g.product_id,
        name: g => g.product_name,
        img: g => g.product_img,
        price: g => g.product_price
    },
    ProductBasket: {
        id: g => g.product_id,
        name: g => g.product_name,
        img: g => g.product_img,
        price: g => g.product_price,
        count: g => g.product_count
    }
}