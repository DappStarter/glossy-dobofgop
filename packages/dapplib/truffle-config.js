require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name rate rural evil grid derive swing giant'; 
let testAccounts = [
"0xf230e69d9db14fa58ce4a606abed4b7788be76e40d4cac6ad244ade0263f2f4d",
"0x81827f80ccc2abb9b40c296f8dae06f6888a384d1bdc23379181f1a9675aa69b",
"0x66b4496281f837cb2f9bc086c4ff77b92b83c84add9123ea9b4cea19995c1ed9",
"0xe187f05df050b0d44e63c1389855c3ac799fc479f0ceffe969fb87322f288bcf",
"0xc3e022d06b8add0247f64663940266c888dd2758e6a19345cf3690c9552e0e42",
"0x536f111e33423a1f789ab16c11d5f7da8fb775daeaac622981153366c31ad27a",
"0xb4abd7fc117ba90dee7fa099f050cb5add8a5e225ad32a50a3e1032d08f094d3",
"0x469a065f48268e3451105c1cab53a2b65f03c891bfbd6a59b8aa177097bd0f8e",
"0x1f5afa0268cc497aa293e6fbb6e9cac2f7074f35dd45bab2c18befd188fb610f",
"0x978914bd32adcf89b3907bedb9f404d1277eb60cca207dcc155e45e4e2482998"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
