const fs = require('fs')
const path = require('path')
const solc = require('solc')
const Web3 = require('web3')

const web3 = new Web3('ws://localhost:8546')
web3.setProvider('ws://localhost:8546')

const contractsPath = path.resolve(__dirname, 'contracts')

const gas = 50000000
const from = '0x6d36bea3b2a5f6c6d6f046e89c34d040bb29cc6d'

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
    const abi = JSON.parse(contracts[key].interface)
    const data = `0x${contracts[key].bytecode}`

    const Contract = new web3.eth.Contract(abi, { from, data })
    
    toDeploy.push(
      Contract.deploy({ data, arguments: [] }).send({ from, gas })
    )
  })

  return Promise.all(toDeploy)
}

;(async function() {
  await deploy(compile())
})()