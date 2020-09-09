import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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