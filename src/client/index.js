const ws = require('ws')
const fetch = require('node-fetch')

const { ApolloClient } = require('apollo-client')
const { InMemoryCache } = require('apollo-cache-inmemory')
const { SubscriptionClient } = require('subscriptions-transport-ws')
const { createHttpLink } = require('apollo-link-state')

const GRAPHQL_ENDPOINT = 'ws://localhost:8080/subscriptions'

const link = createHttpLink({ uri: '/graphql', fetch })

const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true,
}, ws)

const apolloClient = new ApolloClient({
  link,
  networkInterface: client,
  cache: new InMemoryCache()
})

apolloClient.subscribe({
  query: gql`
    subscription {
      newGreeting {
        greet
      }
    }`,
  variables: {}
}).subscribe({
  next (data) {
    console.log(data)
  }
})