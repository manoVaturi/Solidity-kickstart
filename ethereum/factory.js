import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x1144f09c88C9d2e85a5824d950f20AF6E0a080E2'
);

export default instance;
