import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import CryptoTable from './features/crypto/CryptoTable';

function App() {
  return (
    <Provider store={store}>
      <div className="App w-full h-screen bg-white">
        <CryptoTable />
      </div>
    </Provider>
  );
}

export default App;
