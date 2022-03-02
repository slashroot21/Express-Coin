// https://eth-ropsten.alchemyapi.io/v2/ESZN1ON6rvRhylXatm-pKloo4XerwHwD

require('@nomiclabs/hardhat-waffle');

module.exports = {
   solidity: '0.8.0',
   networks: {
      ropsten: {
         url: 'https://eth-ropsten.alchemyapi.io/v2/ESZN1ON6rvRhylXatm-pKloo4XerwHwD',
         accounts: ['40d821b1c4c7ba4d3c6f7ac9cfd2c0a30aee573b33281b9543bc9da3178fe5d1']
      }
   }
}