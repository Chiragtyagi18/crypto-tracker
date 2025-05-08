import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePrices } from './cryptoSlice';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from 'recharts';

const generate7DayData = (price) => {
  return Array.from({ length: 7 }, (_, i) => ({
    day: i + 1,
    value: parseFloat((price * (1 + (Math.random() - 0.5) * 0.05)).toFixed(2)),
  }));
};

export default function CryptoTable() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 1500);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="w-full h-screen p-4 overflow-auto">
      <table className="w-full border-collapse table-fixed">
        <thead>
          <tr className="text-left bg-gray-200">
            <th className="p-3">#</th>
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">1h %</th>
            <th className="p-3">24h %</th>
            <th className="p-3">Market Cap</th>
            <th className="p-3">Volume (24h)</th>
            <th className="p-3">Supply</th>
            <th className="p-3">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, idx) => (
            <tr key={asset.id} className="border-t even:bg-gray-50">
              <td className="p-3">{idx + 1}</td>
              <td className="p-3 flex items-center gap-2">
                <img src={asset.icon} alt={asset.symbol} className="w-5 h-5" />
                {asset.name} ({asset.symbol})
              </td>
              <td className={`p-3 ${asset.change1h >= 0 ? 'text-green-600' : 'text-red-600'}`}>${asset.price.toLocaleString()}</td>
              <td className={`p-3 ${asset.change1h >= 0 ? 'text-green-600' : 'text-red-600'}`}>{asset.change1h}%</td>
              <td className={`p-3 ${asset.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>{asset.change24h}%</td>
              <td className="p-3">${asset.marketCap.toLocaleString()}</td>
              <td className="p-3">${asset.volume24h.toLocaleString()}</td>
              <td className="p-3">{asset.supply}B</td>
              <td className="p-3 w-32 h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={generate7DayData(asset.price)}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={asset.change7d >= 0 ? "#16a34a" : "#dc2626"}
                      strokeWidth={2}
                      dot={false}
                    />
                    <YAxis hide domain={['dataMin', 'dataMax']} />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}