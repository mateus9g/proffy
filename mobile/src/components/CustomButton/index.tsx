import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface ButtonProps {
  text: string;
  disabled: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({ text, disabled }) => {
  return (
    <RectButton
      style={[styles.button, disabled ? styles.buttonDisabled : styles.buttonEnabled]}
      enabled={!disabled}
    >
      <Text
        style={[styles.buttonText, disabled ? styles.buttonTextDisabled : styles.buttonTextEnabled]}
      >
        {text}
      </Text>
    </RectButton>
  );
}

export default CustomButton;
