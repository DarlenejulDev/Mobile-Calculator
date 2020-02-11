
import styled, { css, keyframes } from "@emotion/native";
import React, { useState } from "react";
import { Text, ScrollView, Image, Button, TouchableOpacity, TextInput, StyleSheet } from "react-native";
// import { ExampleBox } from "./ExampleBox";
import { CalcButtonComponent } from "./CalcButtons";
// import { Ionicons } from "@expo/vector-icons";
// import dog from "./assets/dog.jpg";


const ViewContainer = styled.View({
    flex: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    backgroundColor: "black",
    paddingTop: 125,
    paddingBottom:130
});

const ZeroButton = styled.TouchableOpacity({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 170,
    height: 70,
    borderRadius: "100%",
    backgroundColor: "grey"
})

const NumberDisplay = styled.View({
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    width: "100%",
    height: 200,
    backgroundColor: "black",
    marginBottom: 50,

})

const Title = styled.Text({
    color: "#000",
    fontWeight: "bold",
})
const ScrollViewItem = styled.ScrollView({
    flex: 1,
});

export default function App() {

    return (
        <ScrollViewItem>
            <ViewContainer>
                <NumberDisplay>
                    <Text style={{
                        paddingTop: 70,
                        color: "white",
                        fontSize: 116,
                    }}>0</Text>
                </NumberDisplay>


                <CalcButtonComponent
                    title="AC"
                    color="black"
                    backgroundColor="lightgrey"
                />
                <CalcButtonComponent
                    title="+/-"
                    color="black"
                    backgroundColor="lightgrey"
                />
                <CalcButtonComponent
                    title="%"
                    color="black"
                    backgroundColor="lightgrey"
                />
                <CalcButtonComponent
                    title="&divide;"
                    color="white"
                    backgroundColor="orange"
                />
                <CalcButtonComponent
                    title="7"
                    color="white"
                    backgroundColor="grey"
                />
                <CalcButtonComponent
                    title="8"
                    color="white"
                    backgroundColor="grey"

                />
                <CalcButtonComponent
                    title="9"
                    color="white"
                    backgroundColor="grey"
                />
                <CalcButtonComponent
                    title="&times;"
                    color="white"
                    backgroundColor="orange"
                />
                <CalcButtonComponent
                    title="4"
                    color="white"
                    backgroundColor="grey"
                />
                <CalcButtonComponent
                    title="5"
                    color="white"
                    backgroundColor="grey"
                />
                <CalcButtonComponent
                    title="6"
                    color="white"
                    backgroundColor="grey"
                />
                <CalcButtonComponent
                    title="&minus;"
                    color="white"
                    backgroundColor="orange"
                />
                <CalcButtonComponent
                    title="1"
                    color="white"
                    backgroundColor="grey"
                />
                <CalcButtonComponent
                    title="2"
                    color="white"
                    backgroundColor="grey"
                />
                <CalcButtonComponent
                    title="3"
                    color="white"
                    backgroundColor="grey"
                />
                <CalcButtonComponent
                    title="+"
                    color="white"
                    backgroundColor="orange"
                />
                <ZeroButton>
                    <Text style={{
                        color: "white",
                        fontSize: 40,
                        display: "flex",
                        flex: 1,
                        flexDirection: "row",
                        paddingTop: 12,
                        paddingLeft: 32
                    }}>0</Text>
                </ZeroButton>
                <CalcButtonComponent
                    title="."
                    color="white"
                    backgroundColor="grey"
                />
                <CalcButtonComponent
                    title="="
                    color="white"
                    backgroundColor="orange">8
                </CalcButtonComponent>
            </ViewContainer>
        </ScrollViewItem>
    );
};