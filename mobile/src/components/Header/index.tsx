import React from 'react';
import { View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../contexts/auth';

import BackImage from '../../assets/images/icons/Voltar.png';

import styles from './styles';

const Header: React.FC = () => {
  const { stepSignUp, previousStep } = useAuth();
  const { goBack } = useNavigation();

  function handleGoBack() {
    if (stepSignUp == 0) {
      goBack();
    } else {
      previousStep();
    }
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={handleGoBack}>
        <Image source={BackImage} resizeMode="contain" />
      </BorderlessButton>

      <View style={styles.stepGroup}>
        <View style={[styles.stepItem, stepSignUp == 0 && styles.stepActive]} />
        <View style={[styles.stepItem, stepSignUp == 1 && styles.stepActive]} />
      </View>
    </View>
  );
}

export default Header;
