import {FlatList, Dimensions} from 'react-native'; 
import React from 'react';
import { Container,Title } from './styled';
import JogosItem from './JogosItem';
import { Card } from './JogosItem/styled';




const Jogos = [
    {
      id: 1,
      number: "0000 0000 0000 0000",
      expirationDate: "04/2025",
      cvv: "000",
      flag: "master",
    },
    {
      id: 2,
      number: "0000 0000 0000 0000",
      expirationDate: "04/2025",
      cvv: "000",
      flag: "visa",
    },
    {
      id: 3,
      number: "0000 0000 0000 0000",
      expirationDate: "04/2025",
      cvv: "000",
      flag: "visa",
    },
    {
      id: 4,
      number: "0000 0000 0000 0000",
      expirationDate: "04/2025",
      cvv: "000",
      flag: "master",
    },
  ]

  const width = Dimensions.get("window").width;

const JogosList =() => {
    const renderItem = ({item}) =><JogosItem card={item} key={item.id}/>;
    return(
        <Container>
            <Title>Proximos Jogos</Title>
            <FlatList data={Jogos} KeyExtractor={(item) => item.id} 
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            horizontal
            snapToAlignment={"start"}
            scrollEventThottle={16}
            desacelerationRate={"fast"}
            snapToOffsets={[...Array(Jogos.length)].map(
               (x,i)=>i*(width * 0.9-40) + (i-1) * 40
            
            )}
            />
        </Container>
    );
};

export default JogosList;