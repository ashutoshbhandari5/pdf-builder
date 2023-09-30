import React from "react";
import { StyleSheet, View, Image, Text, Link, Font } from "@react-pdf/renderer";
import FooterSvg from "../../assets/images/footer-bg.jpg";
import RubikRegular from "../../assets/fonts/Rubik-Regular.ttf";

Font.register({ family: "Rubik", src: RubikRegular });

const styles = StyleSheet.create({
  footerImageContainer: {
    zIndex: 1,
    position: "absolute",
    bottom: 0.5,
    width: "100%",
    maxHeight: 100,
    marginTop: 20,
  },
  footerColumn: {
    flex: 1,
    paddingTop: 10,
  },
  footerColumnTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
  footerColumnText: {
    color: "#FFF",
    fontSize: 9,
    fontWeight: "600",
    lineHeight: "12pt",
  },

  footerBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: 0,
    margin: 0,
    right: 0,
    bottom: 0,
  },

  pageNumber: {
    position: "absolute",
    bottom: 15,
    right: 25,
    color: "white",
    fontSize: 10,
  },
  linkStyle: {
    color: "#ffffff",
    fontSize: 9,
    fontWeight: "600",
    textDecoration: "underline",
    lineHeight: 15,
    marginBottom: 10,
  },
});

const index = ({ block }) => {
  return (
    <View fixed style={styles.footerImageContainer}>
      <Image source={FooterSvg} style={styles.footerBackground} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "50px",
          paddingRight: "50px",
          paddingTop: "20px",
          paddingBottom: "10px",
          gap: 0,
        }}
      >
        <View
          style={[
            styles.footerColumn,
            {
              borderLeftWidth: 2,
              borderLeftColor: "#ffffff",
              borderLeftStyle: "solid",
              paddingLeft: 8,
            },
          ]}
        >
          <Text style={styles.footerColumnText}>
            {block?.footer?.companyName ? block.footer.companyName : "N/A"}
          </Text>
          <Text style={styles.footerColumnText}>
            Registered In England & Wales
          </Text>
          <Text style={styles.footerColumnText}>
            Limited Company Number 10510918
          </Text>
        </View>
        <View style={[styles.footerColumn, { paddingLeft: 40 }]}>
          <Text style={styles.footerColumnTitle}>ADDRESS</Text>
          <Text style={styles.footerColumnText}>809 Salisbury House</Text>
          <Text style={styles.footerColumnText}>29 Finsbury Circus</Text>
          <Text style={styles.footerColumnText}>London, EC2M 7AQ</Text>
        </View>
        <View style={[styles.footerColumn, { paddingRight: 10 }]}>
          <Text style={styles.footerColumnTitle}>CONTACT</Text>
          <View style={{ lineHeight: 1.7 }}>
            <Link
              style={styles.linkStyle}
              src="tel:+442071297588"
              title="Call +44 207 1297 588"
            >
              {block?.footer?.phoneNumber ? block.footer.phoneNumber : "N/A"}
            </Link>
            <Link style={styles.linkStyle} title="Email info@ukpa.co.uk">
              {block?.footer?.email ? block.footer.email : "N/A"}
            </Link>
            <Link
              style={styles.linkStyle}
              src={block.footer.website}
              title="Visit ukpropertyaccountants.co.uk"
            >
              {block?.footer?.website ? block.footer.website : "N/A"}
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;
