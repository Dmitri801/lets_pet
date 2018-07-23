import React, { Component } from "react";
import { connect } from "react-redux";
import { findPets } from "../../store/actions/petActions";
import { View } from "react-native";
import { Header } from "react-native-elements";
import HeaderTextComponent from "../HeaderTextComponent";
import { darkGrey } from "../../../utils/_colors";

class Home extends Component {
  componentDidMount() {
    this.props.findPets("dog", "84070");
  }

  render() {
    const { fontsLoaded } = this.props;

    return (
      <View>
        <Header
          backgroundColor={darkGrey}
          centerComponent={fontsLoaded ? <HeaderTextComponent /> : null}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ foundPets }) => ({
  foundPets: foundPets.pets
});

export default connect(
  mapStateToProps,
  { findPets }
)(Home);
