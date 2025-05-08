import { createSlice } from '@reduxjs/toolkit';
import btcIcon from '../../assets/icons/btc.png';
import ethIcon from '../../assets/icons/eth.png';
import usdtIcon from '../../assets/icons/usdt.png';
import xrpIcon from '../../assets/icons/xrp.png';
import bnbIcon from '../../assets/icons/bnb.png';
import solIcon from '../../assets/icons/sol.png';

const initialState = {
  assets: [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      icon: btcIcon,
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      supply: 19850000,
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      icon: ethIcon,
      price: 1802.46,
      change1h: 0.6,
      change24h: 3.21,
      change7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      supply: 120710000,
    },
    {
      id: 'tether',
      name: 'Tether',
      symbol: 'USDT',
      icon: usdtIcon,
      price: 1.0,
      change1h: 0.0,
      change24h: 0.0,
      change7d: 0.04,
      marketCap: 145320022085,
      volume24h: 92288882007,
      supply: 145270000,
    },
    {
      id: 'xrp',
      name: 'XRP',
      symbol: 'XRP',
      icon: xrpIcon,
      price: 2.22,
      change1h: 0.46,
      change24h: 0.54,
      change7d: 6.18,
      marketCap: 130073814966,
      volume24h: 5131481491,
      supply: 58390000000,
    },
    {
      id: 'bnb',
      name: 'BNB',
      symbol: 'BNB',
      icon: bnbIcon,
      price: 606.65,
      change1h: 0.09,
      change24h: -1.2,
      change7d: 3.73,
      marketCap: 85471956947,
      volume24h: 1874281784,
      supply: 140890000,
    },
    {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      icon: solIcon,
      price: 151.51,
      change1h: 0.53,
      change24h: 1.26,
      change7d: 14.74,
      marketCap: 78381958631,
      volume24h: 4881674486,
      supply: 517310000,
    },
  ],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state) => {
      state.assets.forEach((asset) => {
        const fluctuation = (Math.random() - 0.5) * 2; // random ±1%
        const newPrice = parseFloat((asset.price * (1 + fluctuation / 100)).toFixed(2));
        asset.change1h = parseFloat(fluctuation.toFixed(2));
        asset.change24h = parseFloat(((newPrice - asset.price) / asset.price * 100).toFixed(2));
        // Update volume24h with small random variation
        asset.volume24h = Math.max(0, Math.floor(asset.volume24h * (1 + (Math.random() * 0.1 - 0.05))));
        asset.price = newPrice;
      });
    },
  },
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;
