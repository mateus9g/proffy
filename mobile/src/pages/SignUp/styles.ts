import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7',
    padding: 32,
    justifyContent: 'space-between'
  },
  groupInfo: {
    flex: 1
  },
  groupInput: {
    flex: 1
  },
  introTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 32,
    maxWidth: 250,
    color: '#32264D'
  },
  introHeadline: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6A6180',
    maxWidth: 210
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
  buttonNext: {
    width: '100%',
    height: 64,
    backgroundColor: '#DCDCE5',
    borderRadius: 8,

    marginTop: 24,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNextEnabled: {
    width: '100%',
    height: 64,
    backgroundColor: '#8257E5',
    borderRadius: 8,

    marginTop: 24,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNextText: {
    fontFamily: 'Archivo-SemiBold',
    fontSize: 16,
    lineHeight: 26,
    color: '#9C98A6',
  },
  buttonNextEnabledText: {
    fontFamily: 'Archivo-SemiBold',
    fontSize: 16,
    lineHeight: 26,
    color: '#FFFFFF',
  }
});

export default styles;