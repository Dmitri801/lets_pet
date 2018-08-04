import React, { Component } from "react";
import { isValidZip } from "../../../utils/validate";
import { connect } from "react-redux";
import { findPets, getPet, resetError } from "../../store/actions/petActions";
import { teal, mainWhite } from "../../../utils/_colors";
import { View, StyleSheet, Animated, Alert } from "react-native";
import PetForm from "../PetForm";
import PetList from "../PetList";

// Animation Types
// Decay - initial velocity and slow to a stop
// Spring - spring physics model
// Timing - animated a value over time

class Home extends Component {
  state = {
    searchActivated: false,
    animalSelected: "",
    zipInputVal: "",
    error: false,
    petListAnimation: new Animated.Value(0),
    homeImageOpacity: new Animated.Value(0),
    homeImageWidth: new Animated.Value(0),
    homeImageHeight: new Animated.Value(0),
    cardHeight: new Animated.Value(180)
  };

  componentDidMount() {
    const { homeImageOpacity, homeImageWidth, homeImageHeight } = this.state;
    Animated.timing(homeImageOpacity, { toValue: 1, duration: 1500 }).start();
    Animated.spring(homeImageWidth, {
      toValue: 80,
      speed: 0.5
    }).start();
    Animated.spring(homeImageHeight, {
      toValue: 80,
      speed: 0.5
    }).start();
  }

  componentDidUpdate() {
    if(this.props.zipError) {
      Alert.alert('Zip Code Error', 'Sorry, We had trouble finding information with that zip code..')
      this.props.resetError();
    }
  }

  static navigationOptions = () => {
    return {
      title: "PET FAM",
      headerTitleStyle: {
        color: mainWhite,
        fontSize: 30,
        fontWeight: "200",
        fontFamily: "open-sans-extra-bold"
      }
    };
  };

  onSearchClick = () => {
    if (!isValidZip(this.state.zipInputVal)) {
      this.setState({ error: true });
    } else {
      this.props.findPets(this.state.animalSelected, this.state.zipInputVal)
      this.setState({
        error: false,
        animalSelected: "",
        searchActivated: true
      });
      Animated.timing(this.state.petListAnimation, {
        toValue: 1,
        duration: 500
      }).start();
      Animated.timing(this.state.cardHeight, {
        toValue: 180
      }).start();
    }
  };
  onTextChange = val => {
    this.setState({
      zipInputVal: val
    });
  };

  onAnimalSelected = selectedPet => {
    Animated.timing(this.state.cardHeight, {
      toValue: 280
    }).start(() => this.setState({ animalSelected: selectedPet }));
  };

  onPetSelected = id => {
    this.props.navigation.navigate("PetProfile");
    this.props.getPet(id);
  };

  render() {
    const { foundPets} = this.props;
    
    return (
      <View style={styles.homeContainer}>
        <PetForm
          homeImageOpacity={this.state.homeImageOpacity}
          homeImageWidth={this.state.homeImageWidth}
          homeImageHeight={this.state.homeImageHeight}
          cardHeight={this.state.cardHeight}
          error={this.state.error}
          animalSelected={this.state.animalSelected}
          onAnimalSelected={this.onAnimalSelected}
          zipInputVal={this.state.zipInputVal}
          onTextChange={this.onTextChange}
          onSearchClick={this.onSearchClick}
        />
        {this.state.searchActivated && (
          <PetList
            petListAnimation={this.state.petListAnimation}
            petsAnimation={this.state.petsAnimation}
            pets={foundPets}
            onPetSelected={this.onPetSelected}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: teal,
    justifyContent: "flex-start"
  }
});

const mapStateToProps = ({ foundPets }) => ({
  foundPets: foundPets.pets,
  zipError: foundPets.error
});

export default connect(
  mapStateToProps,
  { findPets, getPet, resetError }
)(Home);
