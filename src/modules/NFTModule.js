const { BaseModule } = require('lisk-sdk');
const { getAllNFTTokensAsJSON } = require('./nftHelpers');
const CreateNFTAsset = require('./transactions/CreateNFTAsset');
const PurchaseNFTAsset = require('./transactions/PurchaseNFTAsset');
const TransferNFTAsset = require('./transactions/TransferNFTAsset');

class NFTModule extends BaseModule {
  name = 'nft';
  id = 1024;

  accountSchema = {
    type: 'object',
    required: ['ownNFTs'],
    properties: {
      ownNFTs: {
        type: 'array',
        fieldNumber: 4,
        items: {
          dataType: 'bytes',
        },
      },
    },
    default: {
      ownNFTs: [],
    },
  };

  transactionAssets = [
    new CreateNFTAsset(),
    new PurchaseNFTAsset(),
    new TransferNFTAsset(),
  ];

  actions = {
    // get all the registered NFT tokens from blockchain
    getAllNFTTokens: async () => getAllNFTTokensAsJSON(this._dataAccess),
  };
}

module.exports = { NFTModule };
