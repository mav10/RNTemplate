import React, { PropsWithChildren, useEffect, useState } from 'react';
import { initializeLocalization } from './localization';

export const LanguageProvider: React.FC<PropsWithChildren> = (
  props: PropsWithChildren,
) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      await initializeLocalization();
      setLoading(false);
    };

    bootstrapAsync();
  }, []);

  return isLoading ? <></> : <>{props.children}</>;
};
