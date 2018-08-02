import React from "react";
import {
  darkTeal,
  darkGrey,
  mainWhite,
  lightTeal,
  teal
} from "../../utils/_colors";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated
} from "react-native";

import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import Image from "react-native-scalable-image";

const PetList = ({ pets, onPetSelected, petListAnimation }) => {
  const animatedStyles = {
    opacity: petListAnimation
  };

  return (
    <Animated.View style={[styles.cardContainer, shadowStyle, animatedStyles]}>
      <FlatList
        contentContainerStyle={{ padding: 5 }}
        data={pets}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[shadowStyleImage, { alignItems: "center" }]}
            onPress={() => onPetSelected(item.id.$t)}
          >
            <Image
              style={[
                shadowStyleImage,
                {
                  margin: 10,
                  borderColor: teal,
                  borderWidth: 2
                }
              ]}
              width={250}
              source={{
                uri: item.media.photos
                  ? item.media.photos.photo[3].$t
                  : "https://www.jainsusa.com/images/store/landscape/not-available.jpg"
              }}
            />

            <Text
              style={{
                color: lightTeal,
                textAlign: "center",
                fontFamily: "open-sans-extra-bold-italic"
              }}
            >
              {item.name.$t} - {item.age.$t}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.$t}
      />
    </Animated.View>
  );
};

const shadowStyle = {
  shadowOpacity: 0.7,
  shadowRadius: 2,
  shadowColor: darkGrey,
  shadowOffset: { width: 2, height: -3 }
};
const shadowStyleImage = {
  shadowOpacity: 0.3,
  shadowRadius: 2,
  shadowColor: lightTeal,
  shadowOffset: { width: 1, height: 2 }
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    width: 350,
    flex: 0.95,

    alignItems: "center",
    backgroundColor: darkGrey
  },

  textHeader: {
    color: lightTeal,
    fontFamily: "open-sans-extra-bold"
  }
});

export default PetList;
