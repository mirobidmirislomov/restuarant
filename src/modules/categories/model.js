const { fetch, fetchAll } = require('../../utils/postgres')

const CATEGORIES = `
    select * from categories
`

const getCategories = () => fetchAll(CATEGORIES)

module.exports = {
    getCategories
}