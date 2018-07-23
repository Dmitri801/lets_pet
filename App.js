import React from "react";
import { teal } from "./utils/_colors";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { Font } from "expo";
import store from "./src/store/store";
import Home from "./src/components/pages/Home";

class App extends React.Component {
  state = {
    fontsLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "open-sans-extra-bold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
      "open-sans-extra-bold-italic": require("./assets/fonts/OpenSans-ExtraBoldItalic.ttf")
    });
    this.setState({ fontsLoaded: true });
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Home fontsLoaded={this.state.fontsLoaded} />
        </View>
      </Provider>
    );
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
