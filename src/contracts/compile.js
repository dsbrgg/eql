const fs = require('fs')
const path = require('path')
const solc = require('solc')
const Web3 = require('web3')

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

const contractsPath = path.resolve(__dirname, 'contracts')

const gas = 50000000
const from = '0x40aF1756e5320444494676AB9d9C11f4942D79C1'

const contructors = {
  ':Greeter': [ 'Hello World' ]
}

const compile = () => 
  fs.readdirSync(contractsPath)
    .reduce((obj, contract) => {
      const contractFilePath = `${contractsPath}/${contract}`

      const source = fs.readFileSync(contractFilePath, 'utf8')
      const { contracts } = solc.compile(source, 1)

      return { ...obj, ...contracts }
    }, {})

const deploy = async (contracts) => {
  const toDeploy = []

  Object.keys(contracts).forEach(key => {
    const arguments = contructors[key]
    const abi = JSON.parse(contracts[key].interface)
    const data = `0x${contracts[key].bytecode}`

    const Contract = new web3.eth.Contract(abi, { from, data })
    
    // not deploying, gotta check the error
    toDeploy.push(
      Contract.deploy({ data, arguments }).send({ from, gas })
    )
  })

  return Promise.all(toDeploy)
}

;(async function() {
  await deploy(compile())
})()