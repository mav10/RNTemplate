import React from 'react';
import { CustomTextInputProps } from './customTextInput';
import { Text, TextInput, View } from 'react-native';
import { localStyles } from './customTextInput.styles';

export const CustomTextInput = React.forwardRef<TextInput, CustomTextInputProps>((props, ref) => {
  return (
    <View style={[localStyles.container, props.containerStyles]}>
      <Text style={localStyles.label} testID={props.testIdPrefix && `${props.testIdPrefix}_Caption`}>
        {props.label}
      </Text>
      <TextInput
        ref={ref}
        {...props}
        autoCapitalize={'none'}
        autoCorrect={false}
        spellCheck={false}
        blurOnSubmit={false}
        style={[localStyles.control, localStyles.text, !!props.isInvalid && localStyles.error, props.textStyles]}
        testID={props.testIdPrefix && `${props.testIdPrefix}_TextInput`}
      />
    </View>
  );
});

CustomTextInput.displayName = 'CustomTextInput';
