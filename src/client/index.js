const ws = require('ws')
const fetch = require('node-fetch')

const gql = require('graphql-tag')
const { SubscriptionClient } = require('subscriptions-transport-ws')

const GRAPHQL_ENDPOINT = 'ws://localhost:8080/subscriptions'

const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true,
}, ws)

client.request({
  query: gql`
    subscription {
      newGreeting {
        greet
      }
    }`,
  variables: {}
}).subscribe({
  next (data) {
    console.log(JSON.stringify(data, null, 2))
  }
})