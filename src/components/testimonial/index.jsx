import React from "react";
import { StyleSheet, View, Text, Font } from "@react-pdf/renderer";
import RubikRegular from "../../assets/fonts/Rubik-Regular.ttf";

Font.register({ family: "Rubik", src: RubikRegular });

const styles = StyleSheet.create({
  mainHeader: {
    marginBottom: 10,
    border: "1pt solid #E9F1FD",
    color: "#535A68",
    fontSize: "20pt",
    fontWeight: 600,
    backgroundColor: "#F5F9FE",
    padding: "10pt 20pt",
    margin: "10pt 20pt",
  },
  card: {
    backgroundColor: "#2E317E",
    padding: 16,
    margin: 8,
    fontFamily: "Rubik",
    borderRadius: 8,
    color: "white",
  },
  header: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 4,
    fontFamily: "Rubik",
  },
  companyName: {
    fontSize: 14,
    textAlign: "center",
    color: "white",
    marginBottom: 8,
    fontFamily: "Rubik",
  },
  description: {
    marginBottom: 12,
    color: "white",
    fontSize: "14pt",
    textAlign: "center",
    fontFamily: "Rubik",
  },
});

const TestimonialComponent = ({ block }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.mainHeader}>Testimonials</Text>
      {block.testimonials.map((testimonial, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.description}>{testimonial.text}</Text>
          <Text style={styles.companyName}>{testimonial.company}</Text>
          <Text style={styles.header}>{testimonial.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default TestimonialComponent;
