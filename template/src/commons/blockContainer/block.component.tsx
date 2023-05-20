import React, { FC, PropsWithChildren, useMemo } from 'react';
import { Text, View } from 'react-native';
import { BlockComponentProps } from './block';
import { localStyles } from './block.styles';
import { AppCommonStyles } from '../styles/styles';
import { ButtonComponent } from '../buttons/button.component';

export const BlockComponent: FC<PropsWithChildren<BlockComponentProps>> = props => {
  const emptyPlaceholder = useMemo(() => {
    return <>{props.emptyComponent}</>;
  }, [props.emptyComponent]);

  return (
    <View style={[localStyles.container, props.wrapperStyle]} testID={`Block_${props.testId}`}>
      <View style={localStyles.textContainer}>
        <Text style={AppCommonStyles.heading4}>{props.headerText}</Text>

        {props.action && props.actionText && (
          <ButtonComponent type={'link'} label={props.actionText} onPress={props.action} />
        )}
      </View>

      <View style={[localStyles.contentContainer, props.contentStyle]}>
        {props.isNullData ? emptyPlaceholder : props.children}
      </View>
    </View>
  );
};
