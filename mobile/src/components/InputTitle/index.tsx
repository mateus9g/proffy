import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface InputTitleProps {
  title: string;
}

const InputTitle: React.FC<InputTitleProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default InputTitle;
