import React from "react";
import { Text, View, Modal, StyleSheet, TouchableOpacity } from "react-native";

const Snackbar = props => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={props.visible}
      onRequestClose={() => props.handleAction()}
    >
      <View
        style={
          props.position === "top"
            ? styles(props).positionTop
            : props.position === "bottom"
            ? styles(props).positionBottom
            : styles(props).positionBottom
        }
      >
        <View style={styles(props).widthBig}>
          <Text style={styles(props).messageText}>{props.message}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles(props).widthSmall}
          onPress={() => props.handleAction()}
        >
          <Text style={styles(props).buttonText}>{props.actionText}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = props =>
  StyleSheet.create({
    positionTop: {
      width: "95%",
      height: 60,
      padding: 10,
      elevation: 1,
      borderRadius: 5,
      alignSelf: "center",
      position: "absolute",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: props.backgroundColor,
      top: 20
    },
    widthBig: { width: "80%" },
    messageText: { color: props.messageTextColor },
    widthSmall: { width: "20%", padding: 10 },
    positionBottom: {
      width: "95%",
      height: 60,
      padding: 10,
      elevation: 1,
      borderRadius: 5,
      alignSelf: "center",
      position: "absolute",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: props.backgroundColor,
      bottom: 20
    },
    buttonText: {
      color: props.actionTextColor,
      fontWeight: "bold",
      textAlign: "center"
    }
  });

export default Snackbar;
