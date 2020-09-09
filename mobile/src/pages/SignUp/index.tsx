import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Animated,
  Platform,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuth } from '../../contexts/auth';

import InputTitle from '../../components/InputTitle';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import styles from './styles';

const SignUp: React.FC = () => {
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const { stepSignUp } = useAuth();

  const [offsetTitle] = useState(new Animated.ValueXY({ x: -200, y: -100 }));
  const [offsetInputs] = useState(new Animated.ValueXY({ x: -200, y: 100 }));
  const [opacityTitle] = useState(new Animated.Value(100));
  const [opacityInputs] = useState(new Animated.Value(100));

  useEffect(() => {
    executeAnimatedParallel();

    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  function executeAnimatedParallel() {
    Animated.parallel([
      Animated.spring(offsetInputs.y, {
        toValue: 0,
        speed: 1,
        bounciness: 10,
        useNativeDriver: true
      }),
      Animated.timing(opacityInputs, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.spring(offsetTitle.y, {
        toValue: 0,
        speed: 1,
        bounciness: 10,
        useNativeDriver: true
      })
    ]).start();
  }

  function handleFocusTextInput() {
    Animated.timing(opacityTitle, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true
    }).start();
  }

  function handleEndFocus() {
    Animated.timing(opacityTitle, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true
    }).start();
  }

  useEffect(() => {
    handleEndFocus();
  }, [Keyboard.removeAllListeners]);

  const _keyboardDidShow = () => {
    handleFocusTextInput();
  };

  const _keyboardDidHide = () => {
    handleEndFocus();
  };

  function handleButton() {
    if (name.length > 0 && lastName.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  useEffect(() => {
    handleButton();
  }, [name, lastName]);

  return (
    <>
      <StatusBar backgroundColor="#F0F0F7" barStyle="dark-content" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        {...(Platform.OS === 'ios' && { behavior: 'padding' })}
        keyboardVerticalOffset={Platform.select({ ios: 80, android: 500 })}
        enabled
      >
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}>
          <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} onPressOut={handleEndFocus}>
              <Animated.View
                style={[styles.groupInfo, {
                  opacity: opacityTitle,
                  transform: [
                    { translateY: offsetTitle.y },
                  ]
                }]}
              >
                <Text style={styles.introTitle}>Crie sua {'\n'}conta gratuíta</Text>
                <Text style={styles.introHeadline}>Basta preencher esses dados e você estará conosco.</Text>
              </Animated.View>
            </TouchableWithoutFeedback>

            <Animated.View style={{
              opacity: opacityInputs,
              transform: [{ translateY: offsetInputs.y }]
            }}>
              <InputTitle title="01. Quem é você?" />
              <CustomInput
                top={true}
                password={false}
                placeholder="Nome"
                value={name}
                setValue={setName}
              />
              <CustomInput
                top={false}
                password={false}
                placeholder="Sobrenome"
                value={lastName}
                setValue={setLastName}
              />
              <CustomButton
                text="Próximo"
                disabled={disabled}
              />
            </Animated.View>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default SignUp;
