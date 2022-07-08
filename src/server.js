// 1.Import lisk sdk to create the blockchain application
const {
  Application,
  configDevnet,
  genesisBlockDevnet,
  HTTPAPIPlugin,
  utils,
} = require('lisk-sdk');
require('dotenv').config();

// 2.Import NFT module and Plugin
const { NFTModule } = require('./modules/NFTModule');
const { NFTAPIPlugin } = require('./api/NFTAPIPlugin');

// 3.Update the genesis block accounts to include NFT module attributes
genesisBlockDevnet.header.timestamp = 1605699440;
genesisBlockDevnet.header.asset.accounts =
  genesisBlockDevnet.header.asset.accounts.map((a) =>
    utils.objects.mergeDeep({}, a, {
      nft: {
        ownNFTs: [],
      },
    })
  );

// 4.Update application config to include unique label
// and communityIdentifier to mitigate transaction replay
const appConfig = utils.objects.mergeDeep({}, configDevnet, {
  label: 'nft-app',
  genesisConfig: { communityIdentifier: 'NFT' }, //In order to have a unique networkIdentifier
  logger: {
    consoleLogLevel: 'info',
  },
  network: {
    port: parseInt(process.env.PORT) || 8888,
  },
});

// 5.Initialize the application with genesis block and application config
const app = Application.defaultApplication(genesisBlockDevnet, appConfig);

// 6.Register custom NFT Module and Plugins
app.registerModule(NFTModule);
app.registerPlugin(HTTPAPIPlugin);
app.registerPlugin(NFTAPIPlugin);
// 7.Run the application
app
  .run()
  .then(() => console.info('🚀 NFT Blockchain running....'))
  .catch(console.error);
