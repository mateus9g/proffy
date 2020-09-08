import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  introContainer: {
    flex: 1,
    backgroundColor: '#8257E5',
    minWidth: '100%',
    padding: 32,
    maxHeight: 300
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  imageLogo: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputContainer: {
    flex: 1,
    backgroundColor: '#F0F0F7',
    minWidth: '100%',
    padding: 32,
    paddingTop: 56
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 24,
    lineHeight: 34,
    color: '#32264d',
    fontFamily: 'Poppins-SemiBold'
  },

  signupButtonText: {
    fontSize: 12,
    color: '#8257E5',
    lineHeight: 24,
    fontFamily: 'Poppins-Regular'
  },

  inputGroup: {
    marginTop: 24,
  },

  input: {
    height: 64,
    backgroundColor: '#FAFAFC',
    borderWidth: 1,
    borderColor: '#E6E6F0',

    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 20,
    paddingBottom: 20,
  },

  inputEmail: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  inputPassword: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginBottom: 24,
    bottom: 1
  },

  button: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },

  forgotRememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },

  rememberGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputTextDefault: {
    fontSize: 12,
    lineHeight: 24,
    fontFamily: 'Poppins-Regular',
    color: '#9C98A6'
  },

  buttonLoginText: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Archivo-SemiBold',
  }
});

export default styles;