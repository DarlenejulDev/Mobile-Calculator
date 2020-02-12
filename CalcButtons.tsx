import styled from "@emotion/native";
import React from "react";
import { Text } from "react-native";

const TouchableButtons = styled.TouchableOpacity({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 85,
    height: 70,
    borderRadius: "100%",
    marginBottom: 10,
}, (props) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
    title: props.title,
}));

type TouchableButtonsProps = {
    backgroundColor: string;
    color: string;
    title: string;
    onPress: () => void;
};

export const CalcButtonComponent: React.FC<TouchableButtonsProps> = ({ backgroundColor, color, title, onPress }) => (
    <TouchableButtons 
        backgroundColor={backgroundColor} 
        color={color} 
        title={title}
        onPress={onPress}
    >
        <Text 
            style={{
                color: color,
                fontSize: 30,
                display: "flex",
                justifyContent: "center",
                paddingTop: 15,
                paddingRight: 2
            }}
        >
            {title}
        </Text>
    </TouchableButtons>
);
