const { gql } = require('apollo-server-express')

module.exports = gql`
    type Product {
        id: ID!
        name: String!
        img: String!
        price: Int!
        restuarant_id: Int!
    }

    type ProductBasket {
        id: ID!
        name: String!
        img: String!
        price: Int!
        count: Int
    }

    extend type Query {
        products: [ ProductBasket !]!
    }

    extend type Query {
        allProducts: [ Product !]!
    }

    extend type Mutation {
        products(id: ID!): [ Product !]!
    }

    extend type Mutation {
        basketProducts(id: ID!): String!
    }

    extend type Mutation {
        basketProductDel(id: ID!): String!
    }

    
    extend type Mutation {
        newProduct(name: String! img: String! price: String! restuarant_id: ID!): String!
    }

    extend type Mutation {
        delProduct(id: ID!): String!
    }
`
