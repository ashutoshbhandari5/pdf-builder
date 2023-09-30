import React from "react";
import { View, StyleSheet, Font, Text } from "@react-pdf/renderer";
import RubikRegular from "../../assets/fonts/Rubik-Black.ttf";

Font.register({ family: "Rubik", src: RubikRegular });

const styles = StyleSheet.create({
  container: {
    padding: "5pt 20pt",
    fontFamily: "Rubik",
    marginTop: 5,
  },
  mainHeader: {
    color: "#2651B2",
    fontSize: "18pt",
    fontWeight: 500,
    fontFamily: "Rubik",
  },
  serviceType: {
    borderRadius: "6px",
    fontFamily: "Rubik",
    fontSize: "14pt",
  },
  serviceTypeHeader: {
    color: "#E0192D",
    fontSize: "14pt",
    fontFamily: "Rubik",
    fontWeight: 500,
    marginBottom: "5pt",
  },
  serviceTypeBody: {
    backgroundColor: "#F0F0F0",
    marginTop: "10pt",
    fontSize: "14pt",
    borderRadius: "8px",
    fontFamily: "Rubik",
    padding: "10pt 12pt",
  },
  serviceHeader: {
    color: "#242323",
    fontFamily: "Rubik",
    fontSize: "14pt",
    marginBottom: "10pt",
  },
  serviceValue: {
    backgroundColor: "#FFF",
    borderRadius: "6pt",
    padding: "10pt 15pt",
    lineHeight: 2,
    fontSize: "14pt",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    gap: "10pt",
  },
  value: {
    color: "#527DDE",
    fontSize: "14pt",
  },
});
const index = ({ block }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>Services</Text>
      {block.data.map((el, i) => {
        return (
          <View key={i} style={styles.serviceType}>
            <Text style={styles.serviceTypeHeader}>{el.serviceTypeName}</Text>
            {el.services.map((service, serviceIndex) => {
              return (
                <View style={styles.serviceTypeBody} key={serviceIndex}>
                  <Text style={styles.serviceHeader}>
                    {service.serviceName}
                  </Text>
                  <View style={styles.serviceValue}>
                    <View style={styles.flex}>
                      <Text>Net Price</Text>
                      <Text style={styles.value}>£{service.serviceTotal}</Text>
                    </View>
                    <View style={styles.flex}>
                      <Text>Tax Amount ({service.taxRate})%: </Text>
                      <Text style={styles.value}>£{service.taxAmount}</Text>
                    </View>
                    <View style={styles.flex}>
                      <Text>Gross Price: </Text>
                      <Text style={styles.value}>£{service.total}</Text>
                    </View>
                    <View style={styles.flex}>
                      <Text>Period: </Text>
                      <Text style={styles.value}>{service.period}</Text>
                    </View>
                    <View>
                      <Text>Description</Text>
                      <Text style={styles.value}>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source.
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

export default index;
