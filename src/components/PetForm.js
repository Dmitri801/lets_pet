import React from "react";
import {
  darkTeal,
  darkGrey,
  mainWhite,
  lightTeal,
  teal
} from "../../utils/_colors";
import { View, Text, StyleSheet, Animated } from "react-native";
import { FormInput, FormValidationMessage, Icon } from "react-native-elements";
import ModalSelector from "react-native-modal-selector";
import AwesomeButton from "react-native-really-awesome-button";
import Image from "react-native-scalable-image";
import Form from "./common/Form";
const PetForm = ({
  animalSelected,
  onAnimalSelected,
  zipInputVal,
  onTextChange,
  onSearchClick,
  homeImageOpacity,
  homeImageWidth,
  homeImageHeight,
  cardHeight,
  error
}) => {
  let index = 0;
  const data = [
    { key: index++, label: "Cat", value: "cat" },
    { key: index++, label: "Dog", value: "dog" },
    { key: index++, label: "Bird", value: "bird" },
    { key: index++, label: "Barnyard", value: "barnyard" },
    { key: index++, label: "Reptiles & Fish", value: "reptile" },
    { key: index++, label: "Small Furry", value: "smallfurry" }
  ];
  return (
    <Animated.View
      style={[styles.cardContainer, shadowStyle, { height: cardHeight }]}
    >
      <View
        style={[
          styles.formContainer,
          {
            justifyContent:
              animalSelected !== "" ? "space-between" : "flex-start"
          }
        ]}
      >
        <Animated.Image
          source={require("../../assets/img/logo.png")}
          style={[
            {
              marginBottom: 5,
              width: homeImageWidth,
              height: homeImageHeight,
              opacity: homeImageOpacity
            }
          ]}
        />
        <ModalSelector
          data={data}
          initValue="Click To Pick An Animal"
          onChange={option => onAnimalSelected(option.value)}
          selectTextStyle={styles.textHeader}
          optionTextStyle={{ color: darkTeal }}
          cancelText="Close"
          cancelTextStyle={{ color: "red" }}
        />

        {animalSelected === "" ? (
          <Text style={[styles.textHeader, { fontSize: 25 }]}>
            {zipInputVal}
          </Text>
        ) : null}
        {animalSelected !== "" && (
          <Form
            onTextChange={onTextChange}
            zipInputVal={zipInputVal}
            onSearchClick={onSearchClick}
            error={error}
          />
        )}
      </View>
    </Animated.View>
  );
};

const shadowStyle = {
  shadowOpacity: 0.7,
  shadowRadius: 2,
  shadowColor: darkGrey,
  shadowOffset: { width: 2, height: -2 }
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    width: 320,

    padding: 20,
    backgroundColor: darkGrey
  },
  formContainer: {
    flex: 1,
    alignItems: "center"
  },
  textHeader: {
    color: lightTeal,
    fontFamily: "open-sans-extra-bold"
  }
});

export default PetForm;
