import React, { Component } from "react";
import { Animated, Platform } from "react-native";
import {
  darkTeal,
  darkGrey,
  mainWhite,
  lightTeal,
  teal
} from "../../../utils/_colors";
import { FormInput, FormValidationMessage } from "react-native-elements";
import AwesomeButton from "react-native-really-awesome-button";
class Form extends Component {
  state = {
    opacity: new Animated.Value(0)
  };

  componentDidMount() {
    const { opacity } = this.state;
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000
    }).start();
  }
  render() {
    const { onTextChange, zipInputVal, onSearchClick, error } = this.props;
    return (
      <Animated.View style={{ opacity: this.state.opacity }}>
        <FormInput
          onChangeText={onTextChange}
          placeholder="Enter A Zip Code"
          placeholderTextColor={teal}
          selectionColor={darkTeal}
          containerStyle={{ borderBottomColor: mainWhite }}
          inputStyle={{
            color: teal,
            width: "70%"
          }}
          value={zipInputVal}
          keyboardAppearance={"dark"}
          keyboardType={
            Platform.OS === "ios" ? "numbers-and-punctuation" : "number-pad"
          }
        />
        <FormValidationMessage style={{ padding: 20 }}>
          {error ? "Please Enter A Valid Zip Code" : ""}{" "}
        </FormValidationMessage>
        <AwesomeButton
          style={{ marginTop: 10 }}
          height={30}
          width={250}
          backgroundColor={lightTeal}
          backgroundShadow={darkGrey}
          backgroundDarker={darkTeal}
          textColor={darkGrey}
          onPress={onSearchClick}
        >
          Search
        </AwesomeButton>
      </Animated.View>
    );
  }
}

export default Form;
