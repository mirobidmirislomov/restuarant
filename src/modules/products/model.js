const { fetch, fetchAll } = require('../../utils/postgres')

const GET_PRODUCTS = `
    select * from products where restuarant_id = $1
`

const GET_PRODUCT = `
    select * from products where product_id = $1
`

const GET_PRODUCT_BASKET = `
    select * from basket where product_img = $1
`

const GET_PRODUCTS_BASKET = `
    select * from basket
`

const ADD_PRODUCT_BASKET = `
    insert into basket(product_name, product_img, product_price, product_count) values($1, $2, $3, 1)
`

const SET_COUNT = `
    update basket set product_count = (product_count + 1) where product_id = $1
`

const DEL_BASKET_PRODUCT = `
    delete from basket where product_id = $1
`

const ALL_PRODUCTS = `
    select * from products
`

const NEW_PRODUCT = `
    insert into products(product_name, product_img, product_price, restuarant_id) values($1, $2, $3, $4)
`

const DEL_PRODUCT = `
    delete from products where product_id = $1
`

const getProducts = (id) => fetchAll(GET_PRODUCTS, id)
const getProduct = (id) => fetchAll(GET_PRODUCT, id)
const getProductBasket = (img) => fetchAll(GET_PRODUCT_BASKET, img)
const getProducstBasket = () => fetchAll(GET_PRODUCTS_BASKET)
const addProductBasket = (name, img, price) => fetch(ADD_PRODUCT_BASKET, name, img, price)
const setCount = (id) => fetch(SET_COUNT, id) 
const delProductBasket = (id) => fetch(DEL_BASKET_PRODUCT, id)
const allProducts = () => fetchAll(ALL_PRODUCTS)
const newProduct = (name, img, price, restuarant_id) => fetch(NEW_PRODUCT, name, img, price, restuarant_id)
const delProduct = (id) => fetch(DEL_PRODUCT, id)

module.exports = {
    getProducts,
    getProduct,
    getProductBasket,
    addProductBasket,
    setCount,
    getProducstBasket,
    delProductBasket,
    allProducts,
    newProduct,
    delProduct
}