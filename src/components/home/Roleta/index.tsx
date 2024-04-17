import React from 'react';
import { View, FlatList, Image, Dimensions } from 'react-native';
import styles from './styled';

const DATA = [
  { id: '1', src: require('../../../../assets/jogo1..jpg') },
  { id: '2', src: require('../../../../assets/jogo2.jpg') },
  { id: '3', src: require('../../../../assets/jogo3.jpg') },
  { id: '4', src: require("../../../../assets/jogo4.jpg")},
  // Adicione mais itens conforme necessário
];

const Item = ({ src }) => (
  <View style={styles.container}>
    <Image source={src} style={styles.image} />
  </View>
);
export const Roleta = () => (
  <FlatList 
    data={DATA}
    renderItem={({ item }) => <Item src={item.src} />}
    keyExtractor={item => item.id}
    horizontal
    showsHorizontalScrollIndicator={false}
    snapToAlignment="center"
    snapToInterval={Dimensions.get('window').width}
    decelerationRate="fast"
  />
);

export default Roleta;