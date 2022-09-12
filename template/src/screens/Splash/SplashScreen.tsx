import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNBootSplash from 'react-native-bootsplash';
import { localStyles } from './Splash.styles';

const splashLogo = require('./../../../assets/images/bootsplash_logo.png');
const bottomLogo = require('./../../../assets/images/init/bottom_logo_64.png');

const splashSizes = Image.resolveAssetSource(splashLogo);

export const SplashScreen = () => {
  const [bootSplashIsVisible, setBootSplashIsVisible] = useState(true);
  const [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] = useState(false);
  const opacity = useRef(new Animated.Value(1));
  const opacityOfOtherElements = useRef(new Animated.Value(0));
  const translateY = useRef(new Animated.Value(0));
  const isInit = true; //take it from your loading api or store

  useEffect(() => {
    const init = async () => {
      await RNBootSplash.hide({ fade: false }).finally(() => {
        Animated.timing(opacityOfOtherElements.current, {
          useNativeDriver: true,
          duration: 600,
          toValue: 1,
        }).start();
      });

      Animated.stagger(250, [
        Animated.spring(translateY.current, {
          useNativeDriver: true,
          toValue: 17,
        }),
        Animated.spring(translateY.current, {
          useNativeDriver: true,
          toValue:
            -Dimensions.get('window').height / 2 + splashSizes.height * 1.5,
        }),
      ]).start(() => {
        if (Platform.OS === 'android') {
          StatusBar.setTranslucent(true);
          StatusBar.setBackgroundColor('transparent');
          StatusBar.setBarStyle('light-content');
        }
      });

      Animated.timing(opacity.current, {
        useNativeDriver: true,
        toValue: 0.5,
        duration: 150,
        delay: 650,
      }).start(() => {
        setBootSplashIsVisible(false);
      });
    };

    bootSplashLogoIsLoaded && init();
  }, [bootSplashLogoIsLoaded]);

  if (!bootSplashIsVisible && isInit) {
    return <></>;
  }

  return (
    <SafeAreaView style={[localStyles.container]}>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          localStyles.bootsplash,
          { opacity: opacity.current },
        ]}
      >
        <Animated.Image
          source={splashLogo}
          fadeDuration={0}
          onLoadEnd={() => setBootSplashLogoIsLoaded(true)}
          style={[{ transform: [{ translateY: translateY.current }] }]}
        />
      </Animated.View>

      <Animated.View
        style={[
          localStyles.footer,
          { opacity: opacityOfOtherElements.current },
        ]}
      >
        <Image
          source={bottomLogo}
          resizeMode={'contain'}
          style={localStyles.bottomLogo}
        />
        <Text style={localStyles.footerText}>{'by Maxim Vasin\n(mav10)'}</Text>
      </Animated.View>
    </SafeAreaView>
  );
};
