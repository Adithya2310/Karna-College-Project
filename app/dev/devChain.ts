export const devChain = {
    id: 1337,
    name: "localhost",
    network: "localhost",
    nativeCurrency: {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
    },
    rpcUrls: {
      default: { http: ["http://127.0.0.1:7545"] },
      public: { http: ["http://127.0.0.1:7545"] },
    },
  };