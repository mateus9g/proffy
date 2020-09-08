import React, { useState, useEffect } from 'react';
import { Text, TextInput, Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../contexts/auth';

import styles from './styles';

interface FormGroupProps {
  title: string;
  placeholderFirstInput: string;
  placeholderSecondInput: string;
  textButton: string;
  firstInputType: string;
  secondInputTextContentType: string;
  goTo: string;
}

const FormGroup: React.FC<FormGroupProps> = ({
  title,
  placeholderFirstInput,
  placeholderSecondInput,
  textButton,
  firstInputType,
  secondInputTextContentType,
  goTo
}) => {
  const { navigate } = useNavigation();
  const { nextStep } = useAuth();

  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [offset] = useState(new Animated.ValueXY({ x: -200, y: 100 }));
  const [opacity] = useState(new Animated.Value(0));
  const [buttonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    executeAnimatedParallel();
  }, []);

  useEffect(() => {
    handleButton();
  }, [firstInput, secondInput])

  function executeAnimatedParallel() {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 1,
        bounciness: 10,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      })
    ]).start();
  }

  function handleButton() {
    if (firstInput.length > 0 && secondInput.length > 0) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }

  function handleGoTo() {
    nextStep();
  }

  return (
    <Animated.View style={[styles.container, {
      opacity: opacity,
      transform: [{ translateY: offset.y }]
    }]}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        value={firstInput}
        style={[styles.input, styles.inputFirst]}
        keyboardType={firstInputType === 'email' ? 'email-address' : 'default'}
        textContentType={firstInputType === 'email' ? 'emailAddress' : 'name'}
        autoCorrect={false}
        placeholder={placeholderFirstInput}
        onChangeText={text => setFirstInput(text)}
      />
      <TextInput
        value={secondInput}
        style={[styles.input, styles.inputSecond]}
        keyboardType="default"
        textContentType={secondInputTextContentType === 'password' ? 'password' : 'name'}
        autoCapitalize={secondInputTextContentType === 'password' ? "none" : undefined}
        autoCorrect={false}
        secureTextEntry={secondInputTextContentType === 'password' ? true : false}
        placeholder={placeholderSecondInput}
        onChangeText={text => setSecondInput(text)}
      />

      <RectButton
        style={[styles.button, buttonEnabled ? styles.buttonEnabled : styles.buttonDisabled]}
        enabled={buttonEnabled}
        onPress={handleGoTo}
      >
        <Text style={[styles.buttonText, buttonEnabled ? styles.buttonTextEnabled : styles.buttonTextDisabled]}>{textButton}</Text>
      </RectButton>
    </Animated.View>
  );
}

export default FormGroup;
