import React, { Component } from "react";
import fetchJsonp from "fetch-jsonp";
import $ from "jquery";
import { View, Text, Dimensions } from "react-native";
import { Header } from "react-native-elements";
import { mainPink, darkGrey, teal } from "../../../utils/_colors";

const API_KEY = "664be6d32f6fa01896b5358760dfe320";

const HeaderTextComponent = () => {
  return (
    <Text style={{ color: teal, fontSize: 15, fontWeight: "bold" }}>
      LETS PET!
    </Text>
  );
};

class Home extends Component {
  componentDidMount() {
    fetch(
      `http://api.petfinder.com/pet.find?format=json&key=${API_KEY}&animal=dog&location=84070&callback=callback`
    )
      .then(res => res.json())
      .then(responseText => console.log(responseText))
      .catch(err => console.log(err));
  }
  render() {
    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

    return (
      <View>
        <Header
          backgroundColor={darkGrey}
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={<HeaderTextComponent />}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
      </View>
    );
  }
}

export default Home;
