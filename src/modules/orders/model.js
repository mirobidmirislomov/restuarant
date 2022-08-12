const { fetch, fetchAll } = require('../../utils/postgres')

const GET_ORDERS = `
    select * from orders
`

const ADD_ORDER = `
    insert into orders(product_name, user_name, user_address, user_number) values($1, $2, $3, $4) returning *
`

const DEL_BASKET = `
    delete from basket    
`

const getOrders = () => fetchAll(GET_ORDERS)
const addOrder = (product, username, address, phone) => fetch(ADD_ORDER, product, username, address, phone)  
const delBasket = () => fetch(DEL_BASKET)

module.exports = {
    getOrders,
    addOrder,
    delBasket
}