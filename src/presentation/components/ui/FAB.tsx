import { View, Text, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { Button } from '@ui-kitten/components';
import { CustomIcon } from './CustomIcon';

interface Props {
  iconName: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const FAB = ({ iconName, onPress, style }: Props) => {
  return (
    <Button
      style={[
        style,
        {
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.4,
          shadowRadius: 10,
          elevation: 3,
          borderRadius: 13,
        },
      ]}
      accessoryLeft={<CustomIcon name={iconName} white />}
      onPress={onPress}
    />
  );
};
