# crypto-tracker
Track the crypto price
File structure
crypto-tracker/
├── src/
│   ├── features/crypto
│   │   └── cryptoSlice.jsx
|   |   |__CryptoTable.jsx
│   ├── assets/
│   │   └── icons/
│   └── App.js
├── package.json
└── README.md

CryptoTable.jsx
This React component is responsible for displaying the cryptocurrency data in a tabular format.
Purpose: Presents a user-friendly table of cryptocurrencies with relevant details.
Implementation:
Connects to the Redux store to access cryptocurrency data.
Maps over the data to render each cryptocurrency as a table row.
Incorporates sorting and filtering functionalities for enhanced user interaction.
Key Features:
Displays cryptocurrency name, price, market cap, and other relevant metrics.
Includes responsive design considerations for various screen sizes.

icons
This directory contains the icon assets for various cryptocurrencies.
Purpose: Provides visual representations of cryptocurrencies to enhance user experience.
Implementation:
Stores SVG or PNG files named after their respective cryptocurrencies (e.g., bitcoin.svg, ethereum.svg).
Icons are imported and used within the CryptoTable component to display alongside cryptocurrency names.

cryptoSlice.jsx
Purpose: Manages the state related to cryptocurrency data using Redux Toolkit's createSlice.
Key Features:
Defines the initial state for cryptocurrency data.
Includes reducers to handle actions such as setting the cryptocurrency list.
Automatically generates action creators and action types corresponding to the reducers

store.js
Purpose: Sets up the Redux store, which holds the entire state tree of your application.
Key Features:
Utilizes Redux Toolkit's configureStore to simplify store configuration.
Integrates the cryptoSlice reducer to manage cryptocurrency-related state.
Provides a centralized store that can be accessed throughout the application
