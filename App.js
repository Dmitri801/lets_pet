import React from "react";
import { teal, darkGrey, mainWhite, lightTeal } from "./utils/_colors";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { StyleSheet, StatusBar, View } from "react-native";
import store from "./src/store/store";
import Test from "./src/components/Test";
import About from "./src/components/pages/About";
import PetProfile from "./src/components/pages/PetProfile";
import Home from "./src/components/pages/Home";
import ImageView from "./src/components/pages/ImageView";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Asset, AppLoading, Font } from "expo";

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarOptions: {
        labelStyle: {
          fontSize: 13
        },
        activeTintColor: mainWhite,
        style: {
          backgroundColor: darkGrey
        }
      },

      tabBarLabel: "Home",
      tabBarIcon: ({ focused, tintColor }) => (
        <MaterialIcons name="pets" size={30} color={tintColor} marginTop={40} />
      )
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      tabBarOptions: {
        labelStyle: {
          fontSize: 13
        },
        activeTintColor: mainWhite,
        style: {
          backgroundColor: darkGrey
        }
      },

      tabBarLabel: "About",
      tabBarIcon: ({ focused, tintColor }) => (
        <Entypo name="info" size={30} color={tintColor} marginTop={40} />
      )
    }
  }
});

const MainNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: darkGrey
      },
      title: "PET FAM",
      headerTitleStyle: {
        color: mainWhite,
        fontSize: 30,
        fontWeight: "200",
        fontFamily: "open-sans-extra-bold"
      }
    }
  },
  PetProfile: {
    screen: PetProfile,
    navigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: darkGrey
      },
      title: "Profile",
      headerTitleStyle: {
        color: mainWhite,
        fontSize: 30,
        fontWeight: "bold"
      }
    }
  },
  ImageView: {
    screen: ImageView,
    navigationOptions: {
      headerTintColor: mainWhite,
      headerStyle: {
        backgroundColor: darkGrey
      },
      title: "Pics",
      headerTitleStyle: {
        color: mainWhite,
        fontSize: 30,
        fontWeight: "bold"
      }
    }
  }
});

class App extends React.Component {
  state = {
    isReady: false
  };
  async _cacheResourcesAsync() {
    await Font.loadAsync({
      "open-sans-extra-bold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
      "open-sans-extra-bold-italic": require("./assets/fonts/OpenSans-ExtraBoldItalic.ttf"),
      "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf")
    });
  }
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            {/* <Test /> */}
            <StatusBar barStyle="light-content" />
            <MainNavigator />
          </View>
        </Provider>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: teal,
    justifyContent: "flex-start"
  }
});

export default App;
