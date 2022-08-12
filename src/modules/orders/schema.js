const { gql } = require('apollo-server-express')

module.exports = gql`
    scalar Date
    type Order {
        id: ID!
        product: String!
        username: String!
        address: String!
        phone: String!
        created_at: Date!
    }

    extend type Query {
        orders: [ Order !]!
    }

    extend type Mutation {
        addOrder(product: String!, username: String!, address: String!, phone: String!): Order!
    }
`