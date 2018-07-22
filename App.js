import React from "react";
import { mainWhite } from "./utils/_colors";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/components/pages/Home";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainWhite,

    justifyContent: "flex-start"
  }
});

export default App;
