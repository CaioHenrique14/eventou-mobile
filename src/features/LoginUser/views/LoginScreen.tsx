import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Typography from "../../../shared/components/Typography/Typography";
import { RootStackParamList } from "~/app/navigation/RegisterFeature";
import {
  LoginScreenContainer,
} from "./LoginScreen.styled";
import { ScrollView} from "react-native-gesture-handler";

type LoginScreenProps = StackScreenProps<RootStackParamList, "Login">;

export const LoginScreen: React.FC<LoginScreenProps> = ({}) => {

  return (
    <ScrollView>
      <LoginScreenContainer>
      <ImageBackground
          source={require("../assets/background.png")}
          resizeMode="cover"
        >
          </ImageBackground>
      </LoginScreenContainer>
    </ScrollView>
  );
};