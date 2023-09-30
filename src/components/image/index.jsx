import React from "react";
import { StyleSheet, View, Image, Text, Link, Font } from "@react-pdf/renderer";
import RubikRegular from "../../assets/fonts/Rubik-Black.ttf";

Font.register({ family: "Rubik", src: RubikRegular });

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  firstPageBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  header: {
    padding: "0 15pt",
    position: "absolute",
    top: "25%",
    left: "30%",
    fontFamily: "Rubik",
    fontSize: 24,
    color: "#FFF",
  },
  content: {
    paddingLeft: "15pt",
    paddingRight: "25pt",
    position: "absolute",
    top: "30%",
    left: 20,
    fontFamily: "Rubik",
    fontSize: 14,
    color: "#FFF",
  },
});

const index = ({ block }) => {
  return (
    <View style={styles.container}>
      {/* <Image
        src={`${process.env.REACT_APP_API_ENDPOINT}/image/${block.image.url}`}
        style={styles.firstPageBackground}
      /> */}
      <Text style={styles.header}>Scope of services</Text>
      <Text style={styles.content}>
        We have listed below the work which you have instructed us to carry out,
        the detail of which is contained in the attached schedules.
      </Text>
    </View>
  );
};

export default index;
