import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
    width: 85%;
    margin: 0 auto;
    border: 0px solid #fff;
    border-bottom-width: 2px;
    padding-bottom: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${statusBarHeight}px;
`;

export const Logo = styled.Image.attrs({
    resizeMode: "contain",
})`
    width: 200px;
    height: 65px;
    
    
`;

export const UsePhotoContainer = styled.View`
    width: 35px;
    height: 35px;
    border-radius:18px;
   
`;

export const UsePhotoImage = styled.Image.attrs({
    resizeMode:'contain'
})`
    width: 100%;
    height: 100%;
    border-radius:18px;
`;