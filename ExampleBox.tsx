import styled from "@emotion/native";
import React from "react";

const ButtonView = styled.View({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 85,
    height: 70,
    borderRadius: "100%" 
}, (props) => ({
    backgroundColor: props.backgroundColor,
    title:props.title,
    color:props.color
}));

type ExampleBoxProps = {
    backgroundColor: string;
    color:string;
    title:string;
};

export const ExampleBox: React.FC<ExampleBoxProps> = ({ backgroundColor, color,title}) => (
    <ButtonView backgroundColor={backgroundColor} color={color} title={title}/>
);
