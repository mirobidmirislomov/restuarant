const { fetch, fetchAll } = require('../../utils/postgres')

const ALL_RESTUARANTS = `
    select * from restuarants
`

const RESTUARANTS_FROM_ID = `
    select * from restuarants where category_id = $1
`

const NEW_RESTUARANT = `
    insert into restuarants(restuarant_name, restuarant_img, category_id) values($1, $2, $3)
`

const DEL_RES = `
    delete from restuarants where restuarant_id = $1
`

const allRestuarants = () => fetchAll(ALL_RESTUARANTS)
const getRestuarants = (id) => fetchAll(RESTUARANTS_FROM_ID, id)
const newRestuarant = (name, img, category_id) => fetch(NEW_RESTUARANT, name, img, category_id)
const delRes = (id) => fetch(DEL_RES, id)

module.exports = {
    allRestuarants,
    getRestuarants,
    newRestuarant,
    delRes
}