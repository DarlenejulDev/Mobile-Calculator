import styled from "@emotion/native";


import styled from "@emotion/styled";
import { Container } from "ui/container";
import { Card } from "ui/card";
const CalcContainer = styled(Card)({
    display: "grid",
    gridTemplateColumns: "repeat(4, 90px)",
    gridTemplateRows: "repeat(6, 1fr)",
    gap: 8,
    justifyItems: "center",
    width: "min-content",
    margin: "50px auto",
    padding: 16
})
const NumberDisplay = styled.div({
    gridColumn: "span 4",
    justifySelf: "end",
    fontSize: 70
})

const OperatorButton = styled.button({
    backgroundColor: "orange",
    borderRadius: "100%",
    width: 85,
    padding: 32,
    textAlign: "center"
})
const SpecialOperatorButtons = styled(OperatorButton)({
    backgroundColor: "lightgray"
})
const NumberButton = styled(OperatorButton)({
    backgroundColor: "gray",
})
const CalcPage: React.FC = () => {
    return (
        <Container>
            <CalcContainer>
                <NumberDisplay>0</NumberDisplay>
                <SpecialOperatorButtons>AC</SpecialOperatorButtons>
                <SpecialOperatorButtons>+/-</SpecialOperatorButtons>
                <SpecialOperatorButtons>%</SpecialOperatorButtons>
                <OperatorButton>&divide;</OperatorButton>
                <NumberButton>7</NumberButton>
                <NumberButton>8</NumberButton>
                <NumberButton>9</NumberButton>
                <OperatorButton>&times;</OperatorButton>
                <NumberButton>4</NumberButton>
                <NumberButton>5</NumberButton>
                <NumberButton>6</NumberButton>
                <OperatorButton>&minus;</OperatorButton>
                <NumberButton>1</NumberButton>
                <NumberButton>2</NumberButton>
                <NumberButton>3</NumberButton>
                <OperatorButton>+</OperatorButton>
                <NumberButton css={{ gridColumn: "span 2", width: "100%", borderRadius: 50, textAlign:"end" }}>0</NumberButton>
                <NumberButton>.</NumberButton>
                <OperatorButton>=</OperatorButton>
            </CalcContainer>
        </Container>
    );
}
export default CalcPage;
