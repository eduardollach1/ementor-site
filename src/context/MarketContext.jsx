import { createContext, useContext, useState } from 'react';

export const MARKETS = [
  { key: 'us',  flag: '🇺🇸', label: 'United States', lang: 'en', appMarket: 'us'  },
  { key: 'sv',  flag: '🇸🇻', label: 'El Salvador',   lang: 'es', appMarket: 'sv'  },
  { key: 'ke',  flag: '🇰🇪', label: 'Kenya',         lang: 'en', appMarket: 'ke', soon: true },
  { key: 'tz',  flag: '🇹🇿', label: 'Tanzania',      lang: 'en', appMarket: 'tz', soon: true },
];

const MarketContext = createContext(null);

export function MarketProvider({ children }) {
  const [market, setMarket] = useState(MARKETS[0]);

  function appUrl(path = '') {
    return `https://app.ementor.ai${path}?market=${market.appMarket}&lang=${market.lang}`;
  }

  return (
    <MarketContext.Provider value={{ market, setMarket, MARKETS, appUrl }}>
      {children}
    </MarketContext.Provider>
  );
}

export function useMarket() {
  return useContext(MarketContext);
}
