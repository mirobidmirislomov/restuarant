const model = require('./model')
const moment = require('moment')

module.exports = {
    Query: {
        orders: () => model.getOrders()
    },
    Mutation: {
        addOrder: async(_, { product, username, address, phone }) => {
            await model.delBasket()
            return await model.addOrder(product, username, address, phone)
        }
    },
    Order: {
        id: g => g.order_id,
        product: g => g.product_name,
        username: g => g.user_name,
        address: g => g.user_address,
        phone: g => g.user_number,
        created_at: g => moment(g.order_created_at).format('MMMM Do YYYY, h:mm:ss a')
    }
}