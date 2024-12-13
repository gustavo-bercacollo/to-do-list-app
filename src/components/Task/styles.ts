import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  taskView: {
    backgroundColor: "#262626",
    flexDirection: "row",
    borderRadius: 8,
    width: "100%",
    marginTop: 8,
  },
  taskViewText: {
    color: "#F2F2F2",
    flex: 1,
    textAlignVertical: "center", 
    padding: 8,
    fontSize: 12,
    marginTop: 12,
    marginBottom: 12
  },
  remove: {
    flexDirection: "row"
  },
  trashImg: {
    width: 32,
    height: 32,
    marginRight: 8,
    marginTop: 16,
    marginBottom: 16
  },
  checkDefaultImg: {
    width: 24,
    height: 24,
    marginLeft: 15.27,
    marginTop: 20,
    marginBottom: 20,
  }

})