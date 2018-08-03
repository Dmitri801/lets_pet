import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { mainWhite, darkGrey, lightTeal } from "../../../utils/_colors";
import { BlurView } from "expo";
const About = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={{
        uri:
          "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      }}
      blurRadius={5}
    >
      <Text
        style={{
          fontSize: 30,
          color: darkGrey,
          textAlign: "center",
          fontFamily: "open-sans-light"
        }}
      >
        About
      </Text>
      <View style={styles.cardContainer}>
        <Text style={{ color: mainWhite, fontFamily: "open-sans-extra-bold" }}>
          This app was developed and designed by DMI Web Design - in conjunction
          with the Pet Finder API.
        </Text>
        <Text
          style={{
            color: lightTeal,
            fontFamily: "open-sans-extra-bold-italic",
            marginTop: 10
          }}
        >
          If you enjoy the app, give me a rating or a review on the app store!
          😻
        </Text>
        <Text
          style={{
            color: mainWhite,
            fontFamily: "open-sans-light",
            marginTop: 10
          }}
        >
          For more information on the animals visit petfinder.com
        </Text>
        <Text
          style={{
            color: mainWhite,
            fontFamily: "open-sans-light",
            marginTop: 30
          }}
        >
          Logo Credits: logomakr.com
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: "center"
  },
  cardContainer: {
    marginTop: 10,
    width: 320,
    height: 250,
    padding: 20,
    backgroundColor: darkGrey
  }
});

export default About;
