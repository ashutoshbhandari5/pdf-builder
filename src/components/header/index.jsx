import React from "react";
import { StyleSheet, View, Image, Text, Link, Font } from "@react-pdf/renderer";
import RubikRegular from "../../assets/fonts/Rubik-Black.ttf";
Font.register({ family: "Rubik", src: RubikRegular });

const styles = StyleSheet.create({
  firstPageBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  logo: {
    position: "absolute",
    top: 180,
    left: "45%",
    width: 70,
    height: 70,
  },

  proposalTitle: {
    top: "-10%",
    textAlign: "center",
  },
  proposalHeadlineOne: {
    color: "#D41F37",
    marginTop: 330,
    fontSize: 25,
    fontWeight: "400",
  },
  proposalHeadlineTwo: {
    color: "#012A44",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "700",
  },

  tableContainer: {
    top: "-10%",
    marginTop: 20,
    width: "100%",
    padding: 30,
  },
  tableRow: {
    flexDirection: "row",
    paddingLeft: 5,
  },
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    backgroundColor: "#002986",
    justifyContent: "center",
    alignItems: "start",
    marginRight: 3,
    fontSize: "16px",
    fontStyle: " normal",
    fontWeight: "600",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    textTransform: "uppercase",
  },
  tableHeaderText: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#FFF",
  },
  tableCell: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "start",
    marginRight: 5,
  },
  tableCellText: {
    color: "#565656",
    fontSize: 10,
  },
});

const Header = ({ currentOrg, block, clientData }) => {
  return (
    <View style={{ height: "100%" }}>
      {/* <Image
        src={`${process.env.REACT_APP_API_ENDPOINT}/image/${block.header.image.url}`}
        style={styles.firstPageBackground}
      /> */}
      <Link src="https://example.com/link231">
        {/* <Image
          src={`${process.env.REACT_APP_API_ENDPOINT}/image/${block.header.logo.url}`}
          style={styles.logo}
        /> */}
      </Link>
      <View style={styles.contentWrapper}>
        <View style={styles.proposalTitle}>
          <Text style={styles.proposalHeadlineOne}>Proposal for</Text>
          <Text style={styles.proposalHeadlineTwo}>{currentOrg}</Text>
        </View>

        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.tableHeaderText}>Produced By</Text>
            </View>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.tableHeaderText}>Produced For</Text>
            </View>
          </View>

          {/* Table Rows */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { backgroundColor: "#F8FAFE" }]}>
              <Text style={styles.tableCellText}>UK Property Accountants</Text>
            </View>
            <View style={[styles.tableCell, { backgroundColor: "#F8FAFE" }]}>
              <Text style={styles.tableCellText}>
                Client Name:{" "}
                {clientData?.clientName ? clientData.clientName : "N/A"}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { backgroundColor: "#F1F4FC" }]}>
              <Text style={styles.tableCellText}>Client Relationship Team</Text>
            </View>
            <View style={[styles.tableCell, { backgroundColor: "#F1F4FC" }]}>
              <Text style={styles.tableCellText}>
                Position: {clientData?.position ? clientData.position : "N/A"}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { backgroundColor: "#F8FAFE" }]}>
              <Text style={styles.tableCellText}>
                Email:<Text style={{ color: "#275ED8" }}>info@ukpa.co.uk</Text>
              </Text>
            </View>
            <View style={[styles.tableCell, { backgroundColor: "#F8FAFE" }]}>
              <Text style={styles.tableCellText}>
                Email: {clientData?.email ? clientData.email : "N/A"}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { backgroundColor: "#F1F4FC" }]}>
              <Text style={styles.tableCellText}>Tel:0207129785</Text>
            </View>
            <View style={[styles.tableCell, { backgroundColor: "#F1F4FC" }]}>
              <Text style={styles.tableCellText}>
                Contact:{" "}
                {clientData?.phoneNumber ? clientData.phoneNumber : "N/A"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
