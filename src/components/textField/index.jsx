import React from "react";
import { StyleSheet, View, Text } from "@react-pdf/renderer";
import { Parser } from "htmlparser2";

const styles = StyleSheet.create({
  container: { padding: "5pt 20pt", marginTop: 5 },
  header: {
    marginBottom: 10,
    border: "1pt solid #E9F1FD",
    color: "#535A68",
    fontSize: "20pt",
    fontWeight: 600,
    backgroundColor: "#F5F9FE",
    padding: "10pt 20pt",
  },
  body: {
    padding: "10pt 20pt",
    color: "#565656",
    fontSize: "16px",
    fontWeight: 400,
  },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic", color: "blue" },
  underline: { textDecoration: "underline" },
  listItem: { flexDirection: "row", marginBottom: 5 },
  bulletPoint: { width: 20, textAlign: "right" },
  listItemContent: { flex: 1 },
  orderedListItem: { paddingLeft: 10 },
  unorderedListItem: { paddingLeft: 10, listStyleType: "bullet" },
  header1: { fontSize: "24pt", fontWeight: "bold", marginBottom: 10 },
  header2: { fontSize: "22pt", fontWeight: "bold", marginBottom: 8 },
  header3: { fontSize: "20pt", fontWeight: "bold", marginBottom: 8 },
  header4: { fontSize: "18pt", fontWeight: "bold", marginBottom: 7 },
  header5: { fontSize: "16pt", fontWeight: "bold", marginBottom: 6 },
  header6: { fontSize: "14pt", fontWeight: "bold", marginBottom: 5 },
  blockquote: { paddingLeft: 20, fontStyle: "italic" },
  link: { color: "blue" },
});

const rgbToHex = (r, g, b) => {
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

const parseHtml = (html) => {
  console.log(html);
  let parsedElements = [];
  let currentText = "";
  let style = {};
  let inOrderedList = false;
  let listItemNumber = 1;
  let styleStack = []; //
  const applyStyle = (additionalStyle) => {
    styleStack.push(additionalStyle);
  };

  const removeLastStyle = () => {
    styleStack.pop();
  };

  const getCurrentStyle = () => {
    return Object.assign({}, ...styleStack);
  };
  const parser = new Parser({
    onopentag(tagname, attributes) {
      if (attributes.style) {
        const colorMatch = attributes.style.match(
          /color: rgb\((\d+), (\d+), (\d+)\)/
        );
        if (colorMatch) {
          const [_, r, g, b] = colorMatch;
          style = {
            ...style,
            color: rgbToHex(parseInt(r), parseInt(g), parseInt(b)),
          };
        }
      }
      switch (tagname) {
        case "strong":
          applyStyle(styles.bold);
          break;
        case "em":
          style = { ...style, ...styles.italic };
          break;
        case "u":
          style = { ...style, ...styles.underline };
          break;
        case "li":
          currentText += inOrderedList ? `${listItemNumber}. ` : "• ";
          style = { ...style, ...styles.listItem };
          break;
        case "ol":
          inOrderedList = true;
          listItemNumber = 1;
          break;
        case "ul":
          inOrderedList = false;
          break;
        case "h1":
          style = { ...style, ...styles.header1 };
          break;
        case "h2":
          style = { ...style, ...styles.header2 };
          break;
        case "h3":
          style = { ...style, ...styles.header3 };
          break;
        case "h4":
          style = { ...style, ...styles.header4 };
          break;
        case "h5":
          style = { ...style, ...styles.header5 };
          break;
        case "h6":
          style = { ...style, ...styles.header6 };
          break;
        case "blockquote":
          style = { ...style, ...styles.blockquote };
          break;
        case "a":
          parsedElements.push(
            <Link src={attributes.href}>{attributes.href}</Link>
          );
          break;
      }
    },

    ontext(text) {
      currentText += text;
    },

    onclosetag(tagname) {
      switch (tagname) {
        case "strong":
        case "em":
        case "u":
          removeLastStyle();
          break;
        case "li":
          parsedElements.push(<Text style={style}>{currentText}</Text>);
          if (inOrderedList) listItemNumber++;
          currentText = "";
          style = {};
          break;
        case "p":
          break;
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
        case "blockquote":
          parsedElements.push(<Text style={style}>{currentText}</Text>);
          currentText = "";
          style = {};
          break;
        default:
          break;
      }
    },
  });
  console.log(parsedElements);
  parser.write(html);
  parser.end();
  return parsedElements;
};

const Index = ({ block }) => {
  const content = parseHtml(block.textField.content);
  return (
    <View style={styles.container}>
      <View style={styles.body}>{content}</View>
    </View>
  );
};

export default Index;
