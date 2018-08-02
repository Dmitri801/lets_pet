import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated
} from "react-native";
import {
  darkTeal,
  darkGrey,
  mainWhite,
  lightTeal,
  teal
} from "../../utils/_colors";
import { getPet } from "../store/actions/petActions";
import { connect } from "react-redux";
import { ImageGallery } from "@nlabs/react-native-image-gallery";

class Test extends Component {
  state = {
    inputVal: "",
    animation: new Animated.Value(1)
  };

  componentDidMount() {
    this.props.getPet("40560547");
  }
  onTextChange = val => {
    this.setState({
      inputVal: val
    });
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 350
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500
      }).start();
    });
  };
  render() {
    // index 4 of each picture, every 5 pictures are new pictures , grab indexes 4 , 9, 14, 19, 24
    const animatedStyles = {
      opacity: this.state.animation
    };

    const { pet } = this.props;
    let arrOfFacts = [];
    let arrOfURIs = [];
    let pics;

    if (pet && pet.media) {
      pics = pet.media.photos.photo.reduce((accum, photo, index) => {
        if (photo["@size"] === "pn") {
          accum.push(photo.$t);
        }
        return accum;
      }, []);
    }

    console.log(pics);

    if (pet && pet.media) {
      arrOfURIs = pics.map((pic, index) => ({
        url: pic,
        id: JSON.stringify(index),
        title: pet.name.$t,
        description: "Pic"
      }));
    }

    console.log(arrOfURIs);

    let render;
    if (!pet) {
      render = <Text>Loading..</Text>;
    } else {
      render = (
        <View>
          <Text style={styles.textHeader}>
            {pet.name && pet.name.$t}'s Profile
          </Text>
          <ImageGallery images={arrOfURIs} />
        </View>
      );
    }
    return <View style={styles.profileContainer}>{render}</View>;
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  cardContainer: {
    marginTop: 10,
    padding: 10,
    flex: 0.95,
    width: 400,

    backgroundColor: darkGrey
  },

  textHeader: {
    color: mainWhite,
    fontSize: 25,
    textAlign: "center"
  }
});

const mapStateToProps = ({ foundPets }) => ({
  pet: foundPets.pet
});

export default connect(
  mapStateToProps,
  { getPet }
)(Test);
