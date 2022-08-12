const model = require('./model')

module.exports = { 
    Query: {
        restuarants: () => model.allRestuarants()
    },
    Mutation: {
        restuarants: async(_, { id }) => {
            try{
                const foundRestuatants = await model.getRestuarants(id)

                if(!foundRestuatants) {
                    return 'Bu kategoriyada restaranlar topilmadi'
                }

                return foundRestuatants
            } catch(err) {
                console.log(err);
            }
        },
        newRestuarant: async(_, { name, img, category_id }) => {
            await model.newRestuarant(name, img, category_id)

            return "ok"
        },
        delRes: async(_, { id }) => {
            await model.delRes(id)
            return 'ok'
        }
    },
    Restuarant: {
        id: g => g.restuarant_id,
        name: g => g.restuarant_name,
        img: g => g.restuarant_img
    }
}