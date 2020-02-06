
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



//TO CREATE CALCULATOR