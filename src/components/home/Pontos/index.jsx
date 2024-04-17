import { View, Text, Use } from "react-native";
import React, { useState } from "react";
import { Container, DefaultText, RowContainer } from "./styled";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Pontos = () => {
  const [seePonts, setseePontos] = useState(false);

  const handleToggleSeePontos = () => {
    setseePontos(!seePonts);
  };
  return (
    <Container>
      <View>
        <DefaultText>Pontos Acumulados</DefaultText>
        {!seePonts ? (
          <RowContainer>
            <DefaultText>****</DefaultText>
            <Ionicons
              name="eye-off-outline"
              size={24}
              color="#8b0000"
              style={{ marginLeft: 10 }}
              onPress={handleToggleSeePontos}
            />
          </RowContainer>
        ) : (
          <RowContainer>
            <DefaultText>100</DefaultText>
            <MaterialIcons
              name="eye-outline"
              size={24}
              color="#8b0000"
              style={{ marginLeft: 10 }}
              onPress={handleToggleSeePontos}
            />
          </RowContainer>
        )}
      </View>
      <RowContainer>
        <DefaultText>Ver Detalhes</DefaultText>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="#8b0000"
          style={{ marginLeft: 2 }}
          onPress={handleToggleSeePontos}
        />
      </RowContainer>
    </Container>
  );
};

export default Pontos;
