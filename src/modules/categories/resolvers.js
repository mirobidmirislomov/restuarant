const model = require('./model')

module.exports = {
    Query: {
        categories: () => model.getCategories()
    },
    Category: {
        id: g => g.category_id,
        name: g => g.category_name,
        img: g => g.category_img
    }
}