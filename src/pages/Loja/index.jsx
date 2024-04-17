import Reac from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Loja(){
    return(
        <View>
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems:"center", 

    },
    text:{
        fontSize:25,
        fontWeight:"bold"
    }
});