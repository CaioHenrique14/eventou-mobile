import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import Typography from "../../../shared/components/Typography/Typography";
import { RootStackParamList } from "~/app/navigation/RegisterFeature";
import TouchableButton from "../../../shared/components/TouchableButton/TouchableButton";
import {
  RegisterFormContainer,
  RegisterHeaderContainer,
  RegisterScreenContainer,
} from "./RegisterScreen.styled";
import { RegisterForm } from "../components/RegisterForm";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { RegisterOrganizationForm } from "../components/RegisterOrganizationForm";
import FormTypeSelector from "../components/FormTypeSelector/FormTypeSelector";
import { FormSelectorView } from "../components/FormSelectorView/FormSelector.styled";
type RegisterScreenProps = StackScreenProps<RootStackParamList, "Register">;

export const RegisterScreen: React.FC<RegisterScreenProps> = ({}) => {
  const [formType, setFormType] = useState("user");
  const [activeUser, setActiveUser] = useState(true);
  const [activeOrg, setActiveOrg] = useState(false);

  return (
    <ScrollView>
      <RegisterScreenContainer>
        <ImageBackground
          source={require("../assets/background.png")}
          resizeMode="cover"
        >
          <RegisterHeaderContainer>
            <Typography variant="headingDisplay" color="white" semiBold>
              Olá,
            </Typography>
            <Typography variant="headingDisplay" color="blue" semiBold>
              faça seu cadastro.
            </Typography>
          </RegisterHeaderContainer>

          <FormSelectorView>
            <TouchableOpacity
              onPress={() => {
                setFormType("user");
                setActiveUser(!activeUser);
                setActiveOrg(false);
              }}
            >
              <FormTypeSelector text="Usuário" actived={activeUser} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setFormType("org");
                setActiveOrg(!activeOrg);
                setActiveUser(false);
              }}
            >
              <FormTypeSelector text="Organização" actived={activeOrg} />
            </TouchableOpacity>
          </FormSelectorView>
        </ImageBackground>
        <RegisterFormContainer>
          
          {formType === "user" ? (
            <RegisterForm />
          ) : (
            <RegisterOrganizationForm />
          )}
        </RegisterFormContainer>
      </RegisterScreenContainer>
    </ScrollView>
  );
};
