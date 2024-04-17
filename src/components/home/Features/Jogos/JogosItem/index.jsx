import { View,Text} from 'react-native';
import React from 'react';
import {Card, ExpirationCvvContainer, FieldContainer, FieldTitle, FlagContainer, FlagImage,FieldContent } from './styled';

const JogosItem = ({card}) => {
    return(
        <Card>
            <FlagContainer>
                {card.flag === "visa" ?(
                    <FlagImage source={require("../../../../../../assets/projeto 3.png")}/>
                ) : (
                    <FlagImage source={require("../../../../../../assets/imagem torcida.jpg")}/>
                
            )}
            </FlagContainer>
            <FieldContainer>
            <FieldTitle>Proxims jogos</FieldTitle>
            <FieldContent>{card.number}</FieldContent>
            </FieldContainer>
            <ExpirationCvvContainer> 
            <FieldContainer>
            <FieldTitle>Dia</FieldTitle>
            <FieldContent>{card.expirationDate}</FieldContent>
            </FieldContainer>
            <FieldContainer>
            <FieldTitle>cvv</FieldTitle>
            <FieldContent>{card.cvv}</FieldContent>
            </FieldContainer>
         </ExpirationCvvContainer>    
        </Card>
    )
}

export default JogosItem;