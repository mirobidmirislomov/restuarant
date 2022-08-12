const { gql } = require('apollo-server-express')

module.exports = gql`
    type Restuarant {
        id: ID!
        name: String!
        img: String!
        category_id: ID!
    }

    extend type Query {
        restuarants: [ Restuarant !]!
    }

    extend type Mutation {
        restuarants(id: ID!): [ Restuarant !]!
    }

    extend type Mutation {
        newRestuarant(name: String! img: String! category_id: ID!): String!
    }

    extend type Mutation {
        delRes(id: ID!): String!
    }
`