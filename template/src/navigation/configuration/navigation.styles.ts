import { Dimensions, Image, StyleSheet } from 'react-native';
import { Fonts } from '../../commons/styles/fonts';
import { CommonColors } from '../../commons/styles/colors';

const { height, width } = Dimensions.get('window');

const splashLogoSizes = Image.resolveAssetSource(require('../../../assets/images/bootsplash_logo.png'));

export const navigationStyles = StyleSheet.create({
  headerTitleStyles: {
    fontFamily: Fonts.BOLD,
    fontSize: 22,
    color: CommonColors.text,
  },

  headerStyles: {
    backgroundColor: CommonColors.background,
  },

  surveyHeaderTitle: {
    width: width * 0.7,
    paddingHorizontal: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 0,
  },

  mainLoader: {
    position: 'absolute',
    top: height / 2 - 80 / 2 + 3,
    alignSelf: 'center',
    width: splashLogoSizes.width,
    height: splashLogoSizes.height,
    aspectRatio: splashLogoSizes.width / splashLogoSizes.height,
  },

  textStyles: {
    position: 'absolute',
    top: height / 2 + 80 / 2 + 3,
    alignSelf: 'center',
  },
});
