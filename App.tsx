
import styled, { css, keyframes } from "@emotion/native";
import React, { useState } from "react";
import { Text, Image, Button, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import dog from "./assets/dog.jpg";


const ViewContainer = styled.View({
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop: 100,
    alignItems: "center",
});

const ButtonContainer = styled.View({
    display: "flex",
    flex: 1,
    flexDirection: "row",
    paddingBottom:0,
    justifyContent: "space-Between",


})
const AlignMiddleContainer = styled.View({
    alignItems:"center",
    flex:2
})
const StyledButton = styled.TouchableOpacity({
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 32,
    width: 40,
    height: 50,
    fontSize: 14,

})

const TotalContainer = styled.View({
    flex:1,
    alignSelf:"center",
    paddingTop:0,
    paddingBottom: 10,
    justifyContent: "spaceEvenly"
})
const FunImageContainer = styled.View({
    flex:3,
    display:"flex",
    alignItems: "center",
    paddingBottom: 120,

})

const Title = styled.Text({
    color: "#000",
    fontWeight: "bold",
})
const InputText = styled.TextInput({
    width: 288,
    height: 40,
    borderColor: "#fff",
    borderRadius: 8,
    borderWidth: 2,
    marginBottom: 20
})


export default function App() {
    const [firstInput, firstInputSetter] = useState<number>();
    const [secondInput, secondInputSetter] = useState<number>();
    const [total, totalSetter] = useState<number>();


    function calculateSum() {
        totalSetter(parseInt(firstInput) + parseInt(secondInput));
    }
    function subtract() {
        totalSetter(parseInt(firstInput) - parseInt(secondInput));
    }
    function divide() {
        totalSetter(parseInt(firstInput) / parseInt(secondInput));
    }
    function multiply() {
        totalSetter(parseInt(firstInput) * parseInt(secondInput))
    }

    return (
        <ViewContainer>

           <AlignMiddleContainer>
                <Ionicons name="ios-calculator" size={62} color="orange" />
                <Text style={{
                 fontSize: 30,
                 padding: 15
                }}>
                Fully Functional Calculator</Text>
            </AlignMiddleContainer>

            <AlignMiddleContainer>
                <InputText placeholder="Enter first desired number here" onChangeText={(text) => firstInputSetter(text)}
                    value={firstInput}>
                </InputText>
                <InputText placeholder="Enter second desired number" onChangeText={(text) => secondInputSetter(text)}
                 value={secondInput}>
                </InputText>
            </AlignMiddleContainer>

            <ButtonContainer>
                <StyledButton onPress={calculateSum} >
                    <Title>+</Title>
                </StyledButton>

                <StyledButton onPress={subtract} >
                    <Title>-</Title>
                </StyledButton>

                <StyledButton onPress={divide} >
                    <Title>/</Title>
                </StyledButton>

                <StyledButton onPress={multiply} >
                    <Title>*</Title>
                </StyledButton>
            </ButtonContainer>

            <TotalContainer>
                <Text style={{
                    fontWeight: "bold"
                }}>
                    {'\n'}
                    Your total is: {total}
                </Text>
            </TotalContainer>

            <FunImageContainer>
                <Image source={dog} style={{ width: 360, height: 240 }} />
                 <Text style= {{
                     textAlign: "center"
                 }}>
                     {'\n'}
                     Btw: Here's a cute dog to look at while you stress over those numbers :)
                </Text>
            </FunImageContainer>
               

        </ViewContainer>
            );
};