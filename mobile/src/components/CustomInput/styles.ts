import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  inputTop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  inputBottom: {
    bottom: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default styles;