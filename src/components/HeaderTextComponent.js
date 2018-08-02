import React from "react";
import { Text } from "react-native";
import { teal, mainWhite } from "../../utils/_colors";
const HeaderTextComponent = () => {
  return (
    <Text style={{ padding: 12 }}>
      <Text
        style={{
          color: mainWhite,
          fontSize: 25,
          fontFamily: "open-sans-extra-bold-italic"
        }}
      >
        LETS PET
      </Text>
    </Text>
  );
};

export default HeaderTextComponent;
