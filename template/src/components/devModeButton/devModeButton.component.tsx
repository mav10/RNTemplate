import React, { FC, PropsWithChildren, useCallback, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDevModeEnabled } from '../../features/app/app-selectors';
import { DevModeButtonProps } from './devModeButton';
import { AppRoutes } from '../../navigation/configuration/routes';
import { useRootNavigation } from '../../navigation/configuration/navigators';
import { differenceInSeconds } from 'date-fns';

const isValidClickPeriod = (date: Date | null): boolean => {
  const availablePeriodInSeconds = 3;

  if (date === null) {
    return false;
  }

  return Math.abs(differenceInSeconds(date, new Date())) < availablePeriodInSeconds;
};

export const DevModeButton: FC<PropsWithChildren<DevModeButtonProps>> = props => {
  const isDevMode = useDevModeEnabled();
  const navigation = useRootNavigation();
  const [counter, setCounter] = useState<number>(0);
  const [startClickSessionAt, setClickSessionAt] = useState<Date | null>(null);

  const handler = useCallback(() => {
    if (isDevMode || (counter >= 7 && isValidClickPeriod(startClickSessionAt))) {
      navigation.navigate(AppRoutes.DevScreen);
    } else if (startClickSessionAt === null || isValidClickPeriod(startClickSessionAt)) {
      setCounter(counter + 1);
      setClickSessionAt((prev: Date | null) => {
        return !prev ? new Date() : prev;
      });
    } else {
      setCounter(0);
      setClickSessionAt(null);
    }
  }, [counter, isDevMode, navigation, startClickSessionAt]);

  return (
    <TouchableOpacity activeOpacity={1} onPress={handler} style={props.style}>
      {props.children}
    </TouchableOpacity>
  );
};
