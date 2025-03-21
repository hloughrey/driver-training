import React, { createContext, useContext } from 'react';

interface PreviewContextProps {
  entry: any; // CMS entry data
  getAsset: (asset: string) => string; // CMS asset helper
}

const PreviewContext = createContext<PreviewContextProps | undefined>(undefined);

export const PreviewProvider = ({ 
  children, 
  value 
}: { 
  children: React.ReactNode; 
  value: PreviewContextProps 
}) => (
  <PreviewContext.Provider value={value}>
    {children}
  </PreviewContext.Provider>
);

export const usePreview = () => {
  const context = useContext(PreviewContext);
  if (context === undefined) {
    throw new Error('usePreview must be used within a PreviewProvider');
  }
  return context;
};
