

const run = new Run({ network: 'mock' })

// Define the token class
class USDCoin extends Token { }
USDCoin.decimals = 6
USDCoin.symbol = 'USDC'
USDCoin.metadata = { emoji: '💵' }
USDCoin.backingBank = 'HSBC'



window.app = async function () {


    console.log("starting app")

    
// Deploy
run.deploy(USDCoin)
await run.sync()

// Write this down
console.log(USDCoin.location)
}