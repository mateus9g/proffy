import React, { useState, useEffect } from 'react';
import {
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  TextInput
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const SignUpEmail: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonNextDisabled, setButtonNextDisabled] = useState(true);

  const [offset] = useState(new Animated.ValueXY({ x: -200, y: 100 }));
  const [offsetTitle] = useState(new Animated.ValueXY({ x: -200, y: -100 }));
  const [opacity] = useState(new Animated.Value(0));
  const [opacityTitle] = useState(new Animated.Value(100));

  const { navigate } = useNavigation();

  function handleGoToNextStep() {
    navigate('SignUpEmail');
  }

  useEffect(() => {
    handleAnimatedParallel();

    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  useEffect(() => {
    handleButtonFinish();
  }, [email, password])

  function handleAnimatedParallel() {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 1,
        bounciness: 10,
        useNativeDriver: true
      }),
      Animated.spring(offsetTitle.y, {
        toValue: 0,
        speed: 1,
        bounciness: 10,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start();
  }

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

  function editingEmail(value: string) {
    setEmail(value);
  }

  function editingPassword(value: string) {
    setPassword(value);
  }

  function handleButtonFinish() {
    if (email.length > 0 && password.length > 0) {
      setButtonNextDisabled(false);
    } else {
      setButtonNextDisabled(true);
    }
  }

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
                <Text style={styles.introTitle}>Nós estamos {'\n'}quase concluindo</Text>
                <Text style={styles.introHeadline}>Só precisamos de mais algumas informações suas.</Text>
              </Animated.View>
            </TouchableWithoutFeedback>

            <Animated.View
              style={[
                styles.groupInput,
                {
                  opacity: opacity,
                  transform: [
                    { translateY: offset.y },
                  ]
                }
              ]}
            >
              <Text style={styles.title}>02. E-mail e senha</Text>

              <TextInput
                style={[styles.input, styles.inputFirst]}
                value={email}
                placeholder="E-mail"
                autoCorrect={false}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={text => editingEmail(text)}
              />
              <TextInput
                style={[styles.input, styles.inputSecond]}
                value={password}
                placeholder="Senha"
                autoCorrect={false}
                keyboardType="default"
                textContentType="password"
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={text => editingPassword(text)}
              />

              <RectButton style={buttonNextDisabled ? styles.buttonNext : styles.buttonNextEnabled} onPress={handleGoToNextStep} enabled={!buttonNextDisabled}>
                <Text style={buttonNextDisabled ? styles.buttonNextText : styles.buttonNextEnabledText}>Concluir cadastro</Text>
              </RectButton>
            </Animated.View>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default SignUpEmail;
