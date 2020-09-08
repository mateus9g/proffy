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

import FormGroup from '../../components/FormGroup';

import styles from './styles';

const SignUp: React.FC = () => {
  const { stepSignUp } = useAuth();

  const [offsetTitle] = useState(new Animated.ValueXY({ x: -200, y: -100 }));
  const [opacityTitle] = useState(new Animated.Value(100));

  useEffect(() => {
    Animated.spring(offsetTitle.y, {
      toValue: 0,
      speed: 1,
      bounciness: 10,
      useNativeDriver: true
    }).start();

    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  function handleFocusTextInput() {
    Animated.timing(opacityTitle, {
      toValue: 0,
      duration: 200,
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

            {stepSignUp == 0 ? (
              <FormGroup
                title="01. Quem é você?"
                placeholderFirstInput="Nome"
                placeholderSecondInput="Sobrenome"
                textButton="Próximo"
                firstInputType="name"
                secondInputTextContentType="name"
                goTo="SignUpEmail"
              />
            ) : (
                <FormGroup
                  title="02. E-mail e senha"
                  placeholderFirstInput="E-mail"
                  placeholderSecondInput="Senha"
                  textButton="Concluir cadastro"
                  firstInputType="email"
                  secondInputTextContentType="password"
                  goTo="SignUpEmail"
                />
              )}
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default SignUp;
