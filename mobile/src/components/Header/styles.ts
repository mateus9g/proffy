import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 32,
    backgroundColor: '#F0F0F7',
  },
  stepGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 16,
    height: 4
  },
  stepItem: {
    width: 4,
    height: 4,
    backgroundColor: '#C1BCCC',
    borderRadius: 2,
  },
  stepActive: {
    backgroundColor: '#8257E5'
  }
});

export default styles;