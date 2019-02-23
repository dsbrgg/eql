const fs = require('fs')
const path = require('path')
const solc = require('solc')

const contractsPath = path.resolve(__dirname, 'contracts')
const contractsDir = fs.readdirSync(contractsPath)

contractsDir.forEach(contract => {
  const source = fs.readFileSync(`${contractsPath}/${contract}`, 'utf8')
  const compiledContract = solc.compile(source, 1)

  const abi = compiledContract.contracts[':Greeter'].interface
  const bytecode = compiledContract.contracts[':Greeter'].bytecode

  console.log(abi)
  console.log(bytecode)
})

// TODO: SEND ABI AND BYTECODE TO SPECIFIC FOLDER