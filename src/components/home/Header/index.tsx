
import React from "react";
import { Container, Logo, UsePhotoContainer, UsePhotoImage } from "./styled";

import {MaterialCommunityIcons} from "@expo/vector-icons"


const Header = () => {
    return(
        <Container>
            <MaterialCommunityIcons name="dots-vertical" size={40} color="#8b0000"/>
            <Logo source={require("../../../../assets/Logo-Bordo.png")}/>
            <UsePhotoContainer>
                <UsePhotoImage source={require("../../../../assets/WhatsApp Image 2023-11-09 at 01.01.17.jpeg")} />
            </UsePhotoContainer>
        </Container>
    )

};

export default Header