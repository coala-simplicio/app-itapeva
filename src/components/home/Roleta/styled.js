import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width,
    justifyContent: "flex-start",
    alignItems:'center',
    padding: 20,
  
  
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: 'contain',
    
  },
});