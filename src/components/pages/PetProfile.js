import React, { Component } from "react";
import { connect } from "react-redux";
import { teal, lightTeal, darkGrey } from "../../../utils/_colors";
import { View, Text, StyleSheet, Animated } from "react-native";
import ProfileCard from "../ProfileCard";
import Spinner from "react-native-loading-spinner-overlay";
import ProfileNotFound from "../ProfileNotFound";
class PetProfile extends Component {
  state = {
    loading: false,
    fontsLoaded: false,
    opacity: new Animated.Value(0)
  };

  async componentDidMount() {
    await Font.loadAsync({
      "open-sans-extra-bold": require("../../../assets/fonts/OpenSans-ExtraBold.ttf"),
      "open-sans-extra-bold-italic": require("../../../assets/fonts/OpenSans-ExtraBoldItalic.ttf")
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadOnRender();
  }

  loadOnRender = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 1000
      }).start();
    }, 1000);
  };

  routeToImageView = () => {
    this.props.navigation.navigate("ImageView");
  };
  render() {
    let renderItems;
    if (this.state.loading) {
      renderItems = (
        <View style={styles.activityIndicator}>
          <Spinner
            visible={this.state.loading}
            size="large"
            color={lightTeal}
            textContent="Loading.."
            textStyle={
              this.state.fontsLoaded
                ? { color: darkGrey, fontFamily: "open-sans-extra-bold" }
                : { color: darkGrey }
            }
          />
        </View>
      );
    } else if (this.props.pet && this.props.pet.name) {
      renderItems = (
        <ProfileCard
          pet={this.props.pet}
          fontsLoaded={this.state.fontsLoaded}
          routeToImageView={this.routeToImageView}
          opacity={this.state.opacity}
        />
      );
    } else {
      renderItems = <ProfileNotFound />;
    }
    return <View style={styles.profileContainer}>{renderItems}</View>;
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: teal
  },
  activityIndicator: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  }
});

const mapStateToProps = ({ foundPets }) => ({
  pet: foundPets.pet
});

export default connect(mapStateToProps)(PetProfile);
