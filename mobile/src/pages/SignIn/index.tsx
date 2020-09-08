import React, { useState } from 'react';
import {
  ImageBackground,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

import Background from '../../assets/images/Background.png';
import Logo from '../../assets/images/Intro.png';

import styles from './styles';

const SignIn: React.FC = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [buttonLoginDisabled, setButtonLoginDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { navigate } = useNavigation();

  function handleGoToSignUp() {
    navigate('SignUp');
  }

  function handleButtonLogin() {
    if (email !== '' && password !== '') {
      setButtonLoginDisabled(false);
    } else {
      setButtonLoginDisabled(true);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.select({
        ios: 'padding'
      })}
    >
      <StatusBar backgroundColor="#8257E5" barStyle="light-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.introContainer}>
            <ImageBackground resizeMode="contain" source={Background} style={styles.image}>
              <Image source={Logo} style={styles.imageLogo} />
            </ImageBackground>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Fazer login</Text>

              <TouchableOpacity onPress={() => { }}>
                <Text style={styles.signupButtonText} onPress={handleGoToSignUp}>Criar uma conta</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <TextInput
                style={[styles.input, styles.inputEmail]}
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCompleteType="email"
                autoCorrect={false}
                placeholder="E-mail"
                value={email}
                onChangeText={value => setEmail(value)}
                onChange={handleButtonLogin}
              />
              <TextInput
                style={[styles.input, styles.inputPassword]}
                keyboardType="default"
                textContentType="password"
                secureTextEntry={true}
                autoCorrect={false}
                placeholder="Senha"
                value={password}
                onChangeText={value => setPassword(value)}
                onChange={handleButtonLogin}
              />

              <View style={styles.forgotRememberContainer}>
                <View style={styles.rememberGroup}>
                  <CheckBox
                    disable={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue: boolean) => setToggleCheckBox(newValue)}
                    width={1}
                  />
                  <Text style={styles.inputTextDefault}>Lembrar senha</Text>
                </View>

                <TouchableOpacity onPress={() => { }}>
                  <Text style={styles.inputTextDefault}>Esqueci minha senha</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  disabled={buttonLoginDisabled}
                  style={[styles.button, buttonLoginDisabled ? { backgroundColor: '#DCDCE5' } : { backgroundColor: '#04D361' }]}
                  onPress={() => null}
                >
                  <Text
                    style={[styles.buttonLoginText, buttonLoginDisabled ? { color: '#9C98A6' } : { color: '#fff' }]}
                  >
                    Entrar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
