import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

interface InputProps {
  top?: boolean;
  password: boolean;
  placeholder: string;
  value: string;
  setValue(value: string): void;
}

const CustomInput: React.FC<InputProps> = ({ top, password, placeholder, value, setValue }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.input, top ? styles.inputTop : styles.inputBottom]}
      autoCorrect={false}
      secureTextEntry={password}
      value={value}
      onChangeText={(text) => setValue(text)}
    />
  );
}

export default CustomInput;
