
// import styled, { css } from "@emotion/native";
// import React, { useState } from "react";
// import { Text, Button , Switch, TouchableOpacity, TextInput, Alert} from "react-native";


// const ViewContainer = styled.View({
//     flex: 1,
//     backgroundColor: "#164E3E",
//     alignItems: "center",
//     justifyContent: "center",
// });

// const StyledButton = styled.TouchableOpacity ({
//         backgroundColor: "#fff",
//         padding: 16,
//         borderRadius:32,
//         width: 118,
//         height:50,
//         alignItems: "center",
//         fontSize: 14
// })

// const Title = styled.Text({
//     color: "#000",
//     fontWeight: "bold",
// })
// const InputText = styled.TextInput ({
//     width: 288,
//     height: 40,
//     borderColor: "#fff",
//     borderRadius:8,
//     borderWidth: 1,
//     marginBottom: 20
// })

// export default function App(){
//     const [MyDog, MyDogSetter]= useState<string>();
//     const [MyCat, MyCatSetter] = useState<string>();
//     const [myAge, showMyAge] = useState<number>(45);
//     const [isToggled, setIsToggled] = useState<true>();
//     const [value, valueSetter] = useState<string>();
//     const [newValue, nextSetter] = useState<string>();

//        function toggle(value) {
//         setIsToggled(value);
//         showMyAge(value ? 45 : 100);
//       }

//     return (
//         <ViewContainer>
//              <Text>{myAge}</Text>
//              <Button title= "Press Me" onPress = {()=> MyDogSetter("My favorite Dog is a German Shepherd")} /> */}
//              <Switch onValueChange= {()=> MyDogSetter("I don't like cats actually")} /> */}
//              <Switch value={isToggled} onValueChange={toggle} /> */}
//              <StyledButton title="Sign in"></StyledButton> */}
//              <Text>Insert Text Below: </Text>
//             <InputText placeholder="Message Here" onChangeText= {text => valueSetter(text)}
//             value = {value}></InputText>
//             <Text>{newValue}</Text>
//             <StyledButton onPress = {() => nextSetter(value)}>
//                 <Title>Sign In</Title>
//             </StyledButton> */}
//            <Text>{MyDog}</Text> */}
//         </ViewContainer>
//     );
// };



// //TO CREATE CALCULATOR


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
    display:"grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gridTemplateRows: "repeat(6, 1fr)",
    gridGap:20,
    padding: 20,
    // gridTemplateRows: "25% 100 auto",
    // display: "flex",
    // flex: 1,
    // flexDirection: "row",
    // paddingBottom:0,
    // justifyContent: "space-Between",
})

const StyledNumberButtons = styled.View({
    gridTemplateColumns: "repeat(4,1fr)",
    gridRowGap: 20,
    gridColumn: "span 3",
    // gridColumnGap: 20,
    // gridGap:20,
    backgroundColor: "#ebddcb",
    fontSize: 14,
    padding: 16,
    borderRadius: 32,
    width: 40,
    height: 50,
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
const RandomTest = styled.View({
    display:"grid",
    // gridTemplateColumns: "1fr",
    backgroundColor: "orange",
    padding: 16,
    borderRadius: 32,
    width: 40,
    height: 50,
    fontSize: 14,
})
const TextForRandomTest = styled.Text({
    gridTemplateColumns: "repeat(4,1fr)",
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
            <TotalContainer>
                <Text style={{
                    fontWeight: "bold"
                }}>
                    {'\n'}
                    Your total is: {total}
                </Text>
            </TotalContainer>
            {/* <AlignMiddleContainer>
                <InputText placeholder="Enter first desired number here" onChangeText={(text) => firstInputSetter(text)}
                    value={firstInput}>
                </InputText>
                <InputText placeholder="Enter second desired number" onChangeText={(text) => secondInputSetter(text)}
                    value={secondInput}>
                </InputText>
            </AlignMiddleContainer> */}
            {/* <RandomTest>
                <TextForRandomTest>This is a random test</TextForRandomTest>
                <TextForRandomTest>Another random test</TextForRandomTest>
                <TextForRandomTest>Here's another one as well</TextForRandomTest>
            </RandomTest> */}

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
        
                <StyledNumberButtons>
                    <Title>AC</Title>
                </StyledNumberButtons>

                <StyledNumberButtons>
                    <Title>+/-</Title>
                </StyledNumberButtons>

                <StyledNumberButtons>
                    <Title>%</Title>
                </StyledNumberButtons>

                <StyledNumberButtons>
                    <Title>0</Title>
                </StyledNumberButtons>

                <StyledNumberButtons>
                    <Title>1</Title>
                </StyledNumberButtons>

                <StyledNumberButtons>
                    <Title>2</Title>
                </StyledNumberButtons>

                <StyledNumberButtons>
                    <Title>3</Title>
                </StyledNumberButtons>

                <StyledNumberButtons>
                    <Title>4</Title>
                </StyledNumberButtons>

                <StyledNumberButtons>
                    <Title>5</Title>
                </StyledNumberButtons>

                <StyledNumberButtons>
                    <Title>6</Title>
                </StyledNumberButtons>

                <StyledNumberButtons>
                    <Title>7</Title>
                </StyledNumberButtons>

                <StyledNumberButtons>
                    <Title>8</Title>
                </StyledNumberButtons>

                <StyledNumberButtons>
                    <Title>9</Title>
                </StyledNumberButtons>

                <StyledNumberButtons>
                    <Title>.</Title>
                </StyledNumberButtons>
            </ButtonContainer>
            {/* <FunImageContainer>
                <Image source={dog} style={{ width: 360, height: 240 }} />
                <Text style= {{
                    textAlign: "center"
                }}>
                    {'\n'}
                  Btw: Here's a cute dog to look at while you stress over those numbers :)
             </Text>
            </FunImageContainer> */}
        </ViewContainer>
            );
};