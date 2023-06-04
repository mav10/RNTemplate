import { AppCommonStyles } from '../styles/styles';
import React, { PropsWithChildren, useCallback, useRef } from 'react';
import { Text, View } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import { ButtonComponent } from '../buttons/button.component';
import { localStyles } from './informationScreenContainer.styles';
import { InformationScreenContainerProps } from './informationScreenContainer';
import { useAppSelector } from '../../appInfrastructure/redux-store/store-types';
import { useAppRestoredFromBackground } from '../../appInfrastructure/hooks/useAppRestoredFromBackground';

export const InformationScreenContainer = (props: PropsWithChildren<InformationScreenContainerProps>) => {
  const animationRef = useRef<AnimatedLottieView>();
  const { splashHidden } = useAppSelector(state => state.app);
  const testIdPrefix = props.testIdPrefix ? `${props.testIdPrefix}` : 'InformationScreen';

  const animationFinishHandler = useCallback(() => {
    if (props.animationConfig && !props.animationConfig.loop && props.animationConfig.postLoopCycle) {
      const {
        postLoopCycle: { start, end },
      } = props.animationConfig;
      animationRef.current?.play(start, end);
    }
  }, [props.animationConfig]);

  useAppRestoredFromBackground(animationFinishHandler);

  /**
   * Why do we need it?
   *
   * 1. At the loading time we display `Splash Screen`
   *    It covers all content, while we mount components, fetch initial data etc.
   * 2. As Navigator is ready it fire a "ready-event"
   * 3. After that in splash screen we consume it and finalize animation to disappear it (splash).
   * 4. At this moment `Lottie Animation` could have been finishing.
   *    So we render as it(splash) has disappeared to start anima when user could physically see it
   */
  if (!splashHidden) {
    return <></>;
  }

  return (
    <View style={localStyles.container} testID={testIdPrefix + '_screen'}>
      <View style={localStyles.topContainer}>
        <AnimatedLottieView
          // @ts-ignore
          ref={animationRef}
          style={localStyles.lottie}
          source={props.lottieSource}
          resizeMode={'contain'}
          autoPlay={true}
          loop={props.animationConfig?.loop || false}
          colorFilters={props.animationConfig?.lottieColorFilters}
          onAnimationFinish={animationFinishHandler}
        />

        <Text testID={testIdPrefix + '_headerText'} style={[AppCommonStyles.heading3, localStyles.header]}>
          {props.headerText}
        </Text>

        <Text testID={testIdPrefix + '_text'} style={[AppCommonStyles.text, localStyles.text]}>
          {props.text}
        </Text>

        {props.children}
      </View>

      {props.onPress && (
        <ButtonComponent
          testID={'InformationScreen_button'}
          type={'primary'}
          label={props.buttonLabel}
          onPress={props.onPress}
          disabled={props.inProgress}
        />
      )}
    </View>
  );
};
