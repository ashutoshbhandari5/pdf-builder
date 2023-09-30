import React from "react";
import { Box, Typography } from "@mui/material";
import Proposal from "./components/index";

const ViewPDf = ({ templateData, calculationResult }) => {
  const template = { ...templateData };
  const clientDetails = {
    clientData: {
      clientName: "Ashutosh Bhandari",
      position: "Developer",
      email: "ashutoshbhandari605@gmail.com",
      phoneNumber: "9860000000",
    },
  };
  const testimonialBlocks = template.contentBlocks.filter(
    (block) => block.type === "Testimonial"
  );
  const testimonials = testimonialBlocks.map((block) => block.testimonial);

  const newContentBlocks = template.contentBlocks.filter(
    (block) => block.type !== "Testimonial"
  );

  newContentBlocks.push({
    type: "Testimonial",
    position: testimonialBlocks.reduce(
      (max, block) => Math.max(max, block.position),
      0
    ),
    testimonials,
  });

  template.contentBlocks = newContentBlocks;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        width: "100%",
        gap: "3em",
      }}
    >
      <Box
        bgcolor={"#FFF"}
        sx={{
          borderRadius: "8px",
          boxShadow: "#0px 6px 24px 0px rgba(69, 72, 80, 0.08)",
          maxWidth: "206px",
          width: "100%",
          p: "10px ",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography
          sx={{ bgcolor: "#EBF0FB", p: "10px 15px", borderRadius: "6px" }}
        >
          Proposal Preview
        </Typography>
        <Typography
          sx={{ bgcolor: "#EBF0FB", p: "10px 15px", borderRadius: "6px" }}
        >
          Loe Preview
        </Typography>
      </Box>
      <Box
        width={"100%"}
        height={"70vh"}
        border={"1px solid #E6E7E9"}
        borderRadius={"6px"}
        sx={{ overflowY: "scroll" }}
      >
        <Box sx={{ px: "15px", width: "100%" }}>
          <Typography sx={{ color: "#175EFD", fontSize: "18px" }}>
            PDF Preview
          </Typography>
          <Box mt={1}>
            <Proposal
              calculationResult={calculationResult}
              clientData={clientDetails.clientData}
              template={template}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const FinalPreview = () => {
  const calculatedResults = {
    calculationResult: {
      groupedByEntity: [
        {
          organizationTypeId: "651282144cfce6902790a43f",
          organizationTypeName: "Limited Company",
          organizations: [
            {
              organizationId: "6512c3acbf1c05a7be5b182a",
              organizationName: "Boyer Holloway Plc",
              servicesByType: [
                {
                  serviceTypeId: "6516aaeb43624e9d1781b517",
                  serviceType: "Ashutosh tester",
                  services: [
                    {
                      serviceId: "6516ab1443624e9d1781b539",
                      serviceName: "Ashutosh test service",
                      serviceType: "Ashutosh tester",
                      serviceTypeId: "6516aaeb43624e9d1781b517",
                      description:
                        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
                      period: "Yearly",
                      client: {
                        _id: "6512c3acbf1c05a7be5b182a",
                        name: "Boyer Holloway Plc",
                        type: {
                          name: "Limited Company",
                          id: "651282144cfce6902790a43f",
                        },
                      },
                      serviceTotal: 101,
                      taxAmount: 15.15,
                      taxRate: 15,
                      total: 116.15,
                    },
                    {
                      serviceId: "6516ab1443624e9d1781b539",
                      serviceName: "Ashutosh test service",
                      serviceType: "Ashutosh tester",
                      serviceTypeId: "6516aaeb43624e9d1781b517",
                      description:
                        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
                      period: "Yearly",
                      client: {
                        _id: "6512c3acbf1c05a7be5b182a",
                        name: "Boyer Holloway Plc",
                        type: {
                          name: "Limited Company",
                          id: "651282144cfce6902790a43f",
                        },
                      },
                      serviceTotal: 101,
                      taxAmount: 15.15,
                      taxRate: 15,
                      total: 116.15,
                    },
                  ],
                },
              ],
              grandTotal: 116.15,
              netTotal: 101,
              taxesByRate: {
                15: 15.15,
              },
            },
          ],
        },
      ],
      pointOfContact: "650bd92344ac7dd08c7a4898",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJncm91cGVkQnlFbnRpdHkiOlt7Im9yZ2FuaXphdGlvblR5cGVJZCI6IjY1MTI4MjE0NGNmY2U2OTAyNzkwYTQzZiIsIm9yZ2FuaXphdGlvblR5cGVOYW1lIjoiTGltaXRlZCBDb21wYW55Iiwib3JnYW5pemF0aW9ucyI6W3sib3JnYW5pemF0aW9uSWQiOiI2NTEyYzNhY2JmMWMwNWE3YmU1YjE4MmEiLCJvcmdhbml6YXRpb25OYW1lIjoiQm95ZXIgSG9sbG93YXkgUGxjIiwic2VydmljZXNCeVR5cGUiOlt7InNlcnZpY2VUeXBlSWQiOiI2NTE2YWFlYjQzNjI0ZTlkMTc4MWI1MTciLCJzZXJ2aWNlVHlwZSI6IkFzaHV0b3NoIHRlc3RlciIsInNlcnZpY2VzIjpbeyJzZXJ2aWNlSWQiOiI2NTE2YWIxNDQzNjI0ZTlkMTc4MWI1MzkiLCJzZXJ2aWNlTmFtZSI6IkFzaHV0b3NoIHRlc3Qgc2VydmljZSIsInNlcnZpY2VUeXBlIjoiQXNodXRvc2ggdGVzdGVyIiwic2VydmljZVR5cGVJZCI6IjY1MTZhYWViNDM2MjRlOWQxNzgxYjUxNyIsImRlc2NyaXB0aW9uIjoiQ29udHJhcnkgdG8gcG9wdWxhciBiZWxpZWYsIExvcmVtIElwc3VtIGlzIG5vdCBzaW1wbHkgcmFuZG9tIHRleHQuIEl0IGhhcyByb290cyBpbiBhIHBpZWNlIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmF0dXJlIGZyb20gNDUgQkMsIG1ha2luZyBpdCBvdmVyIDIwMDAgeWVhcnMgb2xkLiBSaWNoYXJkIE1jQ2xpbnRvY2ssIGEgTGF0aW4gcHJvZmVzc29yIGF0IEhhbXBkZW4tU3lkbmV5IENvbGxlZ2UgaW4gVmlyZ2luaWEsIGxvb2tlZCB1cCBvbmUgb2YgdGhlIG1vcmUgb2JzY3VyZSBMYXRpbiB3b3JkcywgY29uc2VjdGV0dXIsIGZyb20gYSBMb3JlbSBJcHN1bSBwYXNzYWdlLCBhbmQgZ29pbmcgdGhyb3VnaCB0aGUgY2l0ZXMgb2YgdGhlIHdvcmQgaW4gY2xhc3NpY2FsIGxpdGVyYXR1cmUsIGRpc2NvdmVyZWQgdGhlIHVuZG91YnRhYmxlIHNvdXJjZS4iLCJwZXJpb2QiOiJZZWFybHkiLCJjbGllbnQiOnsiX2lkIjoiNjUxMmMzYWNiZjFjMDVhN2JlNWIxODJhIiwibmFtZSI6IkJveWVyIEhvbGxvd2F5IFBsYyIsInR5cGUiOnsibmFtZSI6IkxpbWl0ZWQgQ29tcGFueSIsImlkIjoiNjUxMjgyMTQ0Y2ZjZTY5MDI3OTBhNDNmIn19LCJzZXJ2aWNlVG90YWwiOjEwMSwidGF4QW1vdW50IjoxNS4xNSwidGF4UmF0ZSI6MTUsInRvdGFsIjoxMTYuMTV9XX1dLCJncmFuZFRvdGFsIjoxMTYuMTUsIm5ldFRvdGFsIjoxMDEsInRheGVzQnlSYXRlIjp7IjE1IjoxNS4xNX19XX1dLCJwb2ludE9mQ29udGFjdCI6IjY1MGJkOTIzNDRhYzdkZDA4YzdhNDg5OCIsInByb2Nlc3NlZERhdGEiOlt7Im9yZ2FuaXphdGlvbklkIjoiNjUxMmMzYWNiZjFjMDVhN2JlNWIxODJhIiwiZW50aXR5VHlwZSI6IjY1MTI4MjE0NGNmY2U2OTAyNzkwYTQzZiIsInNlcnZpY2VzIjpbeyJzZXJ2aWNlSWQiOiI2NTE2YWIxNDQzNjI0ZTlkMTc4MWI1MzkiLCJjYWxjdWxhdGlvbiI6W3siaWQiOiI2NTE2YWJjYTQzNjI0ZTlkMTc4MWI3NWUiLCJpbnB1dEZpZWxkIjo4MX1dLCJyZWxhdGl2ZVR5cGVzIjpbeyJpZCI6IjY1MTE0YzIwOWNjNWY3MDkzNDBjMmRiYiIsImxhYmVsIjoiNjUxMTRjMjA5Y2M1ZjcwOTM0MGMyZGJjIn1dfV0sInRheCI6IjY1MGQ1N2Q0OWNjNWY3MDkzNDBjMGY1MyJ9XSwiaWF0IjoxNjk2MDcyODQzfQ.mc3lgS396yapgEqftHEW-iAif1lfbVn-tK_7gZhpNjo",
      processedData: [
        {
          organizationId: "6512c3acbf1c05a7be5b182a",
          entityType: "651282144cfce6902790a43f",
          services: [
            {
              serviceId: "6516ab1443624e9d1781b539",
              calculation: [
                {
                  id: "6516abca43624e9d1781b75e",
                  inputField: 81,
                },
              ],
              relativeTypes: [
                {
                  id: "65114c209cc5f709340c2dbb",
                  label: "65114c209cc5f709340c2dbc",
                },
              ],
            },
          ],
          tax: "650d57d49cc5f709340c0f53",
        },
      ],
    },
    message: "Service prices successfully calculated.",
  };

  const data = {
    status: 200,
    message: "Proposal template fetched successfully!",
    template: {
      _id: "65158c5638bd215ee11a0f40",
      title: "Irure enim facere vo",
      description: "Eum voluptate volupt",
      contentBlocks: [
        {
          position: 1,
          type: "Header",
          service: false,
          header: {
            logo: {
              url: "MicrosoftTeams-image (3)-1695910998550-990237011.jpg",
              altText: "",
            },
            image: {
              url: "Moominvalley_Background_Moominhouse-1695910998579-55543858.jpg",
              altText: "",
              caption: "",
            },
            _id: "65158c5638bd215ee11a0f42",
          },
          _id: "65158c5638bd215ee11a0f41",
        },
        {
          position: 2,
          type: "TextField",
          textField: {
            content:
              '<p>Sint maiores laboris.</p><p><span class="ql-size-huge">asasss</span><span class="ql-size-small">sssssasa</span><span class="ql-size-large">saaa</span><span class="ql-size-small">asas</span><span class="ql-size-large">asa</span>asassasasa</p>',
            title: "Voluptatem qui volu",
            _id: "65158c5638bd215ee11a0f44",
          },
          service: false,
          _id: "65158c5638bd215ee11a0f43",
        },
        {
          position: 3,
          type: "Footer",
          service: false,
          footer: {
            companyName: "Fields and Buck Traders",
            companyDescription: "Enim quibusdam nisi ",
            phoneNumber: "132465789",
            email: "gelyv@mailinator.com",
            website: "https://www.votoximuhoxi.org.uk",
            _id: "65158c5638bd215ee11a0f46",
          },
          _id: "65158c5638bd215ee11a0f45",
        },
      ],
    },
  };

  return (
    <>
      <ViewPDf
        templateData={data.template}
        calculationResult={calculatedResults.calculationResult}
      />
    </>
  );
};

export default FinalPreview;
