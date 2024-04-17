import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin-top: 20%;
`

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: ${({theme}) => theme.colors};//dark
    margin-left: 15px;

`;