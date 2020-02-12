
import styled from "@emotion/native";
import React, { useState, useEffect } from "react";
import { Text, Alert } from "react-native";
import { CalcButtonComponent } from "./CalcButtons";

const ViewContainer = styled.View({
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    backgroundColor: "black",
    paddingTop: 125,
    paddingBottom: 130,
});

const ZeroButton = styled.TouchableOpacity({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 170,
    height: 70,
    borderRadius: "100%",
    backgroundColor: "grey",
});

const NumberDisplay = styled.View({
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    width: "100%",
    height: 200,
    backgroundColor: "black",
    marginBottom: 50,
});

const ScrollViewItem = styled.View({
    flex: 1,
});

//Concat all the numbers 
export default function App() {
    enum Actions {
        Divide,
        Multiply,
        Substraction,
        Add,
    }

    const [InputA, InputASetter] = useState<number>(0);
    const [InputB, InputBSetter] = useState<number>(0);
    const [DisplayInput, DisplayInputValueSetter] = useState<number>(0);
    const [isAction, setIsAction] = useState<boolean>(false);
    const [Action, setAction] = useState<Actions>(null);
    // const [specialChar,specialCharSetter]= useState<string>();

const TurnNegativeNumber = () =>{
    if(!isAction){
        const number=  InputA*-1 
        InputASetter(number);
    }else{
        const numberTwo = InputB*-1
        InputBSetter(numberTwo);
    }
}


const Percent = () =>{
    if(!isAction){
        const InputANumber= (InputA / 100);
        InputASetter(InputANumber);
    } else {
        const InputBNumber= (InputB / 100);
        InputBSetter(InputBNumber);
    }
}

//Try to parseInt so that it will take an interger and string.. there's just a mismatch
const HandlePeriod = () =>{
    if(!isAction){
        const IncludePeriodA= parseInt((InputA) + ".")
        InputASetter(IncludePeriodA);
    }else{
        const IncludePeriodB = parseInt((InputB) + ".")
        InputBSetter(IncludePeriodB);
    }
}

    const clearButton = () => {
        InputASetter(0);
        InputBSetter(0);
        DisplayInputValueSetter(0);
        setIsAction(false);
        // specialCharSetter('');
    };

    //TODO: Put simpleChar into DisplayInput and have it be aware of the placement

    const divide = () => {
        setAction(Actions.Divide);
        DisplayInputValueSetter(null);
        setIsAction(true);
    }
    const multiply = () => {
        setAction(Actions.Multiply);
        DisplayInputValueSetter(null);
        setIsAction(true);
    }
    const subtraction = () => {
        setAction(Actions.Substraction);
        DisplayInputValueSetter(null);
        setIsAction(true);
    }
    const addition = () => {
        setAction(Actions.Add);
        DisplayInputValueSetter(null);
        setIsAction(true);
    }

    const equal = () => {
        switch(Action) {
            case Actions.Divide:
                const DivideResult = InputA/InputB;
                DisplayInputValueSetter(DivideResult);
                break;
            case Actions.Multiply:
              const result = InputA * InputB;
                DisplayInputValueSetter(result);
                break;
            case Actions.Substraction:
                const SubstractionResult = InputA - InputB;
                DisplayInputValueSetter(SubstractionResult);
                break;
            case Actions.Add:
                const AdditionResult = InputA + InputB;
                DisplayInputValueSetter(AdditionResult);
                break;
            }
    }

    useEffect(() => {
        if (!isAction) {
            DisplayInputValueSetter(InputA);
        } else {
            DisplayInputValueSetter(InputB);
        }
    }, [InputA, InputB]);


    const completeInput = (digit: number) => {
        if (!isAction) {
            if (InputA != null) {
                InputASetter((InputA  + digit));
            } else {
                InputASetter(digit);
            }
            DisplayInputValueSetter(InputA);
        } else {
            if (InputB != null) {
                InputBSetter((InputB * 10) + (digit));
            } else {
                InputBSetter(digit);
            }
            DisplayInputValueSetter(InputB);
        }
    }
    return (
        <ScrollViewItem>
            <ViewContainer>
                <NumberDisplay>
                    <Text style={{
                        paddingTop: 70,
                        color: "white",
                        fontSize: 116,
                    }}>
                        {DisplayInput}
                        {/* {specialChar} */}

                    </Text>
                </NumberDisplay>

                <CalcButtonComponent
                    title="AC"
                    color="black"
                    backgroundColor="lightgrey"
                    onPress={() => {{clearButton()}}}
                />
                <CalcButtonComponent
                    title="+/-"
                    color="black"
                    backgroundColor="lightgrey"
                    onPress={() => {TurnNegativeNumber()}}
                />
                <CalcButtonComponent
                    title="%"
                    color="black"
                    backgroundColor="lightgrey"
                    onPress={() => {Percent()}}
                //this will return decimal and turn number into "smaller" #
                />
                <CalcButtonComponent
                    title="&divide;"
                    color="white"
                    backgroundColor="orange"
                    onPress={() => { divide()}}
                />
                <CalcButtonComponent
                    title="7"
                    color="white"
                    backgroundColor="grey"
                    onPress={() => { completeInput(7) }}
                />
                <CalcButtonComponent
                    title="8"
                    color="white"
                    backgroundColor="grey"
                    onPress={() => { completeInput(8) }}
                />
                <CalcButtonComponent
                    title="9"
                    color="white"
                    backgroundColor="grey"
                    onPress={() => { completeInput(9) }}
                />
                <CalcButtonComponent
                    title="&times;"
                    color="white"
                    backgroundColor="orange"
                    onPress={() => multiply()}
                />
                <CalcButtonComponent
                    title="4"
                    color="white"
                    backgroundColor="grey"
                    onPress={() => { completeInput(4) }}
                />
                <CalcButtonComponent
                    title="5"
                    color="white"
                    backgroundColor="grey"
                    onPress={() => { completeInput(5) }}
                />
                <CalcButtonComponent
                    title="6"
                    color="white"
                    backgroundColor="grey"
                    onPress={() => { completeInput(6) }}
                />
                <CalcButtonComponent
                    title="&minus;"
                    color="white"
                    backgroundColor="orange"
                    onPress={() => { subtraction() }}
                />
                <CalcButtonComponent
                    title="1"
                    color="white"
                    backgroundColor="grey"
                    onPress={() => { completeInput(1) }}
                />
                <CalcButtonComponent
                    title="2"
                    color="white"
                    backgroundColor="grey"
                    onPress={() => { completeInput(2) }}
                />
                <CalcButtonComponent
                    title="3"
                    color="white"
                    backgroundColor="grey"
                    onPress={() => { completeInput(3) }}
                />
                <CalcButtonComponent
                    title="+"
                    color="white"
                    backgroundColor="orange"
                    onPress={() => { addition()}}
                />
                <ZeroButton
                    onPress={() => { completeInput(0) }}>
                    <Text style={{
                        color: "white",
                        fontSize: 40,
                        display: "flex",
                        flex: 1,
                        flexDirection: "row",
                        paddingTop: 12,
                        paddingLeft: 32
                    }}>
                        0
                    </Text>
                </ZeroButton>

                <CalcButtonComponent
                    title="."
                    color="white"
                    backgroundColor="grey"
                    onPress={() => {HandlePeriod()}}
                    // specialCharSetter(".")
                />
                <CalcButtonComponent
                    title="="
                    color="white"
                    backgroundColor="orange"
                    onPress={() => {equal()}}>

                </CalcButtonComponent>
            </ViewContainer>
        </ScrollViewItem>
    );
};
