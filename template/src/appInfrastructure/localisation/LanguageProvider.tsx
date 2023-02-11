import React, { PropsWithChildren, useEffect, useState } from 'react';
import { initializeLocalization } from './localization';

export const LanguageProvider: React.FC<PropsWithChildren> = props => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      await initializeLocalization();
    };

    bootstrapAsync().finally(() => {
      setLoading(false);
    });
  }, []);

  return isLoading ? null : <>{props.children}</>;
};
