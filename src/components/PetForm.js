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

const PetForm = ({
  animalSelected,
  onAnimalSelected,
  zipInputVal,
  onTextChange,
  onSearchClick,
  homeImageOpacity,
  homeImageWidth,
  homeImageHeight,
  error
}) => {
  console.log(homeImageOpacity);
  let index = 0;
  const data = [
    { key: index++, label: "Cat", value: "cat" },
    { key: index++, label: "Dog", value: "dog" },
    { key: index++, label: "Bird", value: "bird" },
    { key: index++, label: "Barnyard", value: "barnyard" },
    { key: index++, label: "Reptile", value: "reptile" },
    { key: index++, label: "Small Furry", value: "smallfurry" }
  ];
  return (
    <View
      style={[
        styles.cardContainer,
        shadowStyle,
        { height: animalSelected !== "" ? 280 : 180 }
      ]}
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
          <View>
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
          </View>
        )}
      </View>
    </View>
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
