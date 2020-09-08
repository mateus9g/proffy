import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#312e38',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    lineHeight: 26,
    marginBottom: 24,
    color: '#32264D'
  },
  input: {
    height: 64,
    width: '100%',
    backgroundColor: '#FAFAFC',

    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 24,

    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 24,
    paddingRight: 24,

    borderWidth: 1,
    borderColor: '#E6E6F0',
  },
  inputFirst: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  inputSecond: {
    bottom: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  button: {
    width: '100%',
    height: 64,
    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24
  },
  buttonDisabled: {
    backgroundColor: '#DCDCE5',
  },
  buttonEnabled: {
    backgroundColor: '#8257E5',
  },
  buttonFinish: {

  },
  buttonText: {
    fontFamily: 'Archivo-SemiBold',
    fontSize: 16,
    lineHeight: 26
  },
  buttonTextDisabled: {
    color: '#9C98A6'
  },
  buttonTextEnabled: {
    color: '#FFFFFF'
  }
});

export default styles;