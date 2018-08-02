import React, { Component } from "react";
import { teal } from "../../../utils/_colors";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { ImageGallery } from "@nlabs/react-native-image-gallery";
class ImageView extends Component {
  render() {
    const { pet } = this.props;
    let arrOfPics = [];
    let pics;

    if (pet) {
      pics = pet.media.photos.photo.reduce((accum, photo, index) => {
        if (photo["@size"] === "pn") {
          accum.push(photo.$t);
        }
        return accum;
      }, []);
    }

    if (pet && pet.media) {
      arrOfPics = pics.map((pic, index) => ({
        url: pic,
        id: JSON.stringify(index),
        title: pet.name.$t,
        description: "Pic"
      }));
    }
    return (
      <View style={styles.imageViewContainer}>
        <ImageGallery images={arrOfPics} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageViewContainer: {
    flex: 1,
    backgroundColor: teal
  }
});

const mapStateToProps = ({ foundPets }) => ({
  pet: foundPets.pet
});

export default connect(mapStateToProps)(ImageView);
