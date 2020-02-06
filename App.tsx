
import styled, { css , keyframes } from "@emotion/native";
import React, { useState } from "react";
import { Text, Button , Switch, TouchableOpacity, TextInput, Alert} from "react-native";
import { Ionicons } from '@expo/vector-icons';


const ViewContainer = styled.View({
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop:100,
    alignItems: "center",
    // justifyContent: "center",
});

const StyledButton = styled.TouchableOpacity ({
        backgroundColor: "#fff",
        padding: 16,
        borderRadius:32,
        width: 20,
        height:50,
        // flexDirection: "column",
        // justifyContent: "center",
        // display:"inlineFlex",
        // verticalAlign: "flexStart",
        // alignItems: "center",
        fontSize: 14,
        float: "right",
})

const Title = styled.Text({
    color: "#000",
    fontWeight: "bold",
})
const InputText = styled.TextInput ({
    width: 288,
    height: 40,
    borderColor: "#fff",
    borderRadius:8,
    borderWidth: 2,
    marginBottom: 20
})


export default function App(){
    const [firstInput, firstInputSetter] =useState<number>();
    const [secondInput, secondInputSetter] =useState<number>();
    const [total, totalSetter]= useState<number>();


    function calculateSum(){
        totalSetter(parseInt(firstInput) + parseInt(secondInput));
    }
    function subtract(){
        totalSetter(parseInt(firstInput) - parseInt(secondInput));
    }
    function divide(){
        totalSetter(parseInt(firstInput) / parseInt(secondInput));
    }
    function multiply(){
        totalSetter(parseInt(firstInput) * parseInt(secondInput))
    }

    return (
        <ViewContainer>
            <Ionicons name="ios-calculator" size={62} color="orange" />
            <Text style={{
                fontSize: 30,
                padding:15
            }}>
            Fully Functional Calculator</Text>
            <InputText placeholder= "Enter first desired number here" onChangeText= {(text) =>firstInputSetter(text)}
            value = {firstInput}>
            </InputText>
            <InputText placeholder= "Enter second desired number" onChangeText= {(text) => secondInputSetter(text)}
            value = {secondInput}>
            </InputText>
            
            <StyledButton onPress = {calculateSum} >
                <Title>+</Title>
            </StyledButton>

            <StyledButton onPress = {subtract} >
                <Title>-</Title>
            </StyledButton> 

            <StyledButton onPress = {divide} >
                <Title>/</Title>
            </StyledButton> 

            <StyledButton onPress = {multiply} >
                <Title>*</Title>
            </StyledButton>
            <Text style={{
                fontWeight: "bold"
            }}>
             {'\n'}
             Your total is: {total}
            </Text>

        </ViewContainer>
    );
};