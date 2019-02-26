const fs = require('fs')
const path = require('path')
const solc = require('solc')
const Web3 = require('web3')

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

const contractsPath = path.resolve(__dirname, 'contracts')

const gas = 8000000
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
  const addresses = []
  const interfaces = []
  const contractsNames = []

  for (const key in contracts) {
    const arguments = contructors[key]
    const contractName = key.substr(1, key.length)

    const abi = JSON.parse(contracts[key].interface)
    const data = `0x${contracts[key].bytecode}`

    const Contract = new web3.eth.Contract(abi, undefined, { from, data })
    
    try {
      const deployed = await Contract
        .deploy({ data, arguments })
        .send({ from })
        
      interfaces.push(abi)
      addresses.push(deployed.options.address)
      contractsNames.push(contractName)
    } catch(err) {
      throw err
    }
  }

  return { contractsNames, addresses, interfaces }
}

;(async function() {
  const { contractsNames, addresses, interfaces } = await deploy(compile())

  const parsed = contractsNames.reduce((acc, name, index) => {
    acc[name] = { address: addresses[index], abi: interfaces[index] }
    return acc
  }, {})

  
  fs.writeFileSync(`../../address.json`, JSON.stringify(parsed, null, 2))
})()

