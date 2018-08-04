import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Dimensions
} from "react-native";
import {
  darkTeal,
  darkGrey,
  mainWhite, 
  lightTeal,
  teal
} from "../../utils/_colors";
import Image from "react-native-scalable-image";
const ProfileCard = ({ pet, routeToImageView, opacity }) => {
  let breedStr;
  if (Array.isArray(pet.breeds.breed)) {
    breedStr = pet.breeds.breed[0].$t.substring(0, 18);
  } else {
    if (Dimensions.get("window").width <= 375) {
      if (pet.breeds.breed.$t.length > 12) {
        breedStr = pet.breeds.breed.$t.substring(0, 12);
      } else {
        breedStr = pet.breeds.breed.$t;
      }
    } else {
      breedStr = pet.breeds.breed.$t.substring(0, 18);
    }
  }
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.textTitle}>{pet.name.$t}'s Profile</Text>
      <Animated.View style={[styles.cardContainer, shadowStyle]}>
        <TouchableOpacity
          onPress={routeToImageView}
          style={{ alignItems: "flex-start", height: 200 }}
        >
          <Image
            width={Dimensions.get("window").width > 375 ? 200 : 150}
            source={{
              uri:
                pet.media && pet.media.photos
                  ? pet.media.photos.photo[3].$t
                  : "https://www.jainsusa.com/images/store/landscape/not-available.jpg"
            }}
            height={200}
          />
          {pet.media.photos && (
            <Text
              style={
                Dimensions.get("window").width > 375
                  ? { color: teal, marginBottom: 50 }
                  : { color: teal, marginBottom: 50, fontSize: 10 }
              }
            >
              Tap Me To View My Pics
            </Text>
          )}
        </TouchableOpacity>
        <View style={styles.headerSection}>
          <Text style={styles.headerTextStyles}>
            Name:{" "}
            {pet.name && pet.name.$t ? pet.name.$t.substring(0, 17) : null}{" "}
          </Text>
          <Text style={styles.headerTextStyles}>
            Age: {pet.name && pet.age.$t}{" "}
          </Text>
          <Text style={styles.headerTextStyles}>
            Sex: {pet.name && pet.sex.$t}{" "}
          </Text>
          <Text style={styles.headerTextStyles}>
            Breed: {pet.breeds && pet.breeds.breed.$t ? breedStr : "Contact Us"}{" "}
          </Text>
          <Text style={[styles.headerTextStyles, { marginBottom: 10 }]}>
            Location:{" "}
            {pet.contact && pet.name.$t && pet.contact.city.$t
              ? pet.contact.city.$t.substring(0, 16)
              : null}{" "}
          </Text>
        </View>
        {pet.description.$t && (
          <View style={styles.bioContainer}>
            <Text
              style={{
                fontSize: 20,
                color: lightTeal,
                marginBottom: 10,
                textDecorationStyle: "solid",
                textDecorationLine: "underline",
                textDecorationColor: darkTeal
              }}
            >
              BIO:
            </Text>
            <ScrollView>
              <Text
                style={{ 
                  fontSize: 15,
                  color: lightTeal,
                  fontWeight: "200"
                }}
              >
                {pet.description && pet.description.$t}
              </Text>
            </ScrollView>
          </View>
        )}

        <View style={[styles.contactContainer]}>
          <Text style={styles.contactTextStyles}>
            <Text style={{ color: teal }}>ShelterID:</Text>{" "}
            {pet.shelterId && pet.shelterId.$t}
          </Text>
          {pet.contact.phone.$t && (
            <Text style={styles.contactTextStyles}>
              <Text style={{ color: teal }}>Phone Number:</Text>{" "}
              {pet.contact.phone && pet.contact.phone.$t}
            </Text>
          )}
          <Text style={styles.contactTextStyles}>
            <Text style={{ color: teal }}>Address:</Text>{" "}
            {pet.contact.address1 && pet.contact.address1.$t}{" "}
            {pet.contact.city && pet.contact.city.$t}{" "}
            {pet.contact.state && pet.contact.state.$t},
            {pet.contact.zip && pet.contact.zip.$t}
          </Text>
          <Text style={styles.contactTextStyles}>
            <Text style={{ color: teal }}>Email:</Text>{" "}
            {pet.contact.email && pet.contact.email.$t}
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

const shadowStyle = {
  shadowOpacity: 0.7,
  shadowRadius: 2,
  shadowColor: darkGrey,
  shadowOffset: { width: 2, height: 2 }
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: "center"
  },
  cardContainer: {
    marginTop: 10,
    flex: 0.97,
    width: Dimensions.get("window").width > 375 ? 400 : 340,
    backgroundColor: darkGrey
  },
  bioContainer: {
    marginTop: Dimensions.get("window").width > 375 ? 25 : 0,
    flex: 0.95,
    width: Dimensions.get("window").width > 375 ? 200 : 170,
    padding: 10,
    borderRightWidth: Dimensions.get("window").width > 320 ? 5 : null,
    borderRightColor: darkTeal
  },
  contactContainer: {
    position: "absolute",
    alignItems: 'center',
    top: Dimensions.get("window").width > 375 ? 250 : 200,
    left: Dimensions.get("window").width > 375 ? 200 : 160,
    flex: 0.95,
    width: Dimensions.get("window").width > 375 ? 180 : 150,
    borderTopWidth: Dimensions.get("window").width > 375 ? 5 : null,
    borderTopColor: darkTeal,
    borderBottomWidth: Dimensions.get("window").width > 375 ? 5 : null,
    borderBottomColor: darkTeal,
    padding: 5,
    margin: 10
  },
  contactTextStyles: {
    fontSize: 13,
    padding: 10,
    color: lightTeal,
    textAlign: "center"
  },
  textTitle: {
    color: mainWhite,
    fontSize: 25,
    textAlign: "center",
    fontFamily: "open-sans-extra-bold-italic"
  },
  headerSection: {
    left: Dimensions.get("window").width > 375 ? 200 : 150,
    position: "absolute",
    padding: 10,
    maxWidth: 400,
    flex: 1
  },
  headerTextStyles: {
    padding: 5,
    fontSize: Dimensions.get("window").width > 375 ? 14 : 12,
    color: mainWhite,
    fontWeight: "300",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    textDecorationColor: darkTeal
  }
});

export default ProfileCard;
