import { Dimensions, Image, StyleSheet } from 'react-native';
import { Fonts } from '../../commons/styles/fonts';
import { CommonColors } from '../../commons/styles/colors';

const { height, width } = Dimensions.get('window');

const splashLogoSizes = Image.resolveAssetSource(require('../../../assets/images/bootsplash_logo.png'));

export const navigationStyles = StyleSheet.create({
  headerStyles: {
    backgroundColor: CommonColors.background,
  },

  headerTitleStyles: {
    color: CommonColors.text,
    fontFamily: Fonts.BOLD,
    fontSize: 22,
  },

  mainLoader: {
    alignSelf: 'center',
    aspectRatio: splashLogoSizes.width / splashLogoSizes.height,
    height: splashLogoSizes.height,
    position: 'absolute',
    top: height / 2 - 80 / 2 + 3,
    width: splashLogoSizes.width,
  },

  surveyHeaderTitle: {
    flex: 0,
    paddingHorizontal: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: width * 0.7,
  },

  textStyles: {
    alignSelf: 'center',
    position: 'absolute',
    top: height / 2 + 80 / 2 + 3,
  },
});
