import React, { useState } from "react";
import { Document, PDFViewer, Page, Text } from "@react-pdf/renderer";
import { Tab, Tabs, Box } from "@mui/material";
import Header from "./header";
import TextField from "./textField";
import Footer from "./footer";
import Image from "./image";
import Testimonial from "./testimonial";
import Services from "./services";

const CompanyProposal = ({ currentOrg, template, clientData, services }) => {
  let pages = [];
  let currentPage = [];

  const templateData = {
    ...template,
    contentBlocks: [
      ...template.contentBlocks,
      { type: "ServiceType", data: services },
    ],
  };
  const footer = templateData.contentBlocks.find((el) => el.type === "Footer");

  templateData.contentBlocks
    .sort((a, b) => a.position - b.position)
    .forEach((block) => {
      if (block.type === "Header") {
        if (currentPage.length > 0) {
          pages.push(currentPage);
        }
        currentPage = [block];
      } else {
        currentPage.push(block);
      }
    });

  if (currentPage.length > 0) {
    pages.push(currentPage);
  }

  const renderBlock = (block) => {
    switch (block.type) {
      case "Header":
        return (
          <Header
            currentOrg={currentOrg}
            clientData={clientData}
            block={block}
          />
        );
        break;
      case "TextField":
        return <TextField block={block} />;
        break;
      case "Image":
        return <Image block={block} />;
        break;
      case "Testimonial":
        return <Testimonial block={block} />;
        break;
      case "ServiceType":
        return <Services block={block} />;
        break;
      default:
        return null;
    }
  };

  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        {pages.map((pageBlocks, pageIndex) => {
          return (
            pageBlocks.length > 0 && (
              <Page
                size="A4"
                key={pageIndex}
                style={{
                  position: "relative",
                  height: "100%",
                  padding: "0 0 100px 0",
                }}
              >
                {pageBlocks.map((block) => renderBlock(block))}
                <Text
                  style={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    color: "#FFF",
                    fontSize: "10pt",
                  }}
                  render={({ pageNumber }) => `${pageNumber}`}
                  fixed
                />
                <Footer block={footer} key={pageIndex} />
              </Page>
            )
          );
        })}
      </Document>
    </PDFViewer>
  );
};

const Proposal = ({ calculationResult, template, clientData }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const currentOrg =
    calculationResult.groupedByEntity[0].organizations[currentTab]
      .organizationName;

  return (
    <Box>
      <Tabs value={currentTab} onChange={handleTabChange}>
        {calculationResult.groupedByEntity[0].organizations.map(
          (org, index) => (
            <Tab label={org.organizationName} key={index} />
          )
        )}
      </Tabs>
      <CompanyProposal
        currentOrg={currentOrg}
        template={template}
        clientData={clientData}
        services={
          calculationResult.groupedByEntity[0].organizations[currentTab]
            .servicesByType
        }
      />
    </Box>
  );
};

export default Proposal;
