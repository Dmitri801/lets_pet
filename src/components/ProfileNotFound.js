import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { mainWhite, darkGrey } from "../../utils/_colors";
import { BlurView } from "expo";

const ProfileNotFound = () => {
  return (
    <BlurView style={styles.absolute} tint="dark" intensity={90}>
      <View style={styles.noProfileContainer}>
        <View style={styles.noProfileCard}>
          <Text style={{ color: mainWhite, textAlign: "center", fontSize: 20 }}>
            Sorry Fam, This Profile Doesn't Exist 😿
          </Text>
        </View>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  noProfileContainer: {
    flex: 1,
    alignItems: "center"
  },
  noProfileCard: {
    height: 100,
    width: 300,
    backgroundColor: "rgba(255,0,0, 0.8)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: darkGrey,
    borderRadius: 50,
    marginTop: 10
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default ProfileNotFound;
