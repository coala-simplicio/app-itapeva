import {View,Dimensions,Image,StyleSheet,Text } from "react-native";
import React, {useState} from "react";
import { MainInfoContainer,Container } from "./styled";
import  Header  from "../../components/home/Header";
import Pontos from "../../components/home/Pontos";
import SelectFeatures from "../../components/home/SelectFeatures";
import { Roleta } from "../../components/home/Roleta";



const Home = () =>{
    const [currentFeature, setCurrentFeature] = useState("Cards");

    return(
        <Container>
            <MainInfoContainer>
                <Header/>
               <Pontos/>
               <SelectFeatures setFeature={setCurrentFeature}/>   
            </MainInfoContainer>
            <Roleta/>           
            </Container>
             

      
    )
}

export default Home;