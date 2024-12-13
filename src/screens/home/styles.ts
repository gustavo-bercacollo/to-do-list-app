import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    padding: 24,
  },
  taskInput: {
    color: "#F2F2F2",
    height: 54,
    backgroundColor: "#262626",
    fontSize: 14,
    borderRadius: 6,
    padding: 16,
    flex: 1,
    marginRight: 4,
  },
  button: {
    height: 52,
    width: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    alignItems:"center",
  },
  infoTasks: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 20,
  },
  taskCounterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  createdInfo: {
    color: "#4EA8DE",
    fontSize: 16,
    fontWeight: "bold",
  },
  doneInfo: {
    color: "#8284FA",
    fontSize: 16,
    fontWeight: "bold",
  },
  numberOfTasksView: {
    backgroundColor: "#333333",
    borderRadius: 999,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  numberOfTasks: {
    color: "#D9D9D9",
    fontWeight: "bold",
    fontSize: 12,
  },
  image: {
    width: 100,
    resizeMode: "center",
    margin: "auto",
  },
  plusImage: {
    width: 16,
    height: 16,
  },
  showWhenNoTasks: {
    color: "#fff",
    marginBottom: 48,
  },
  clipboardImg: {
    width: 56,
    height: 56,
    margin: "auto",
    marginBottom: 16,
  },
  line: {
    height: 1.5,
    backgroundColor: "#333333",
    marginBottom: 48,
  },
  showWhenNoTasksText1: {
    color: "#808080",
    textAlign: "center",
    fontWeight: "bold",
  },
  showWhenNoTasksText2: {
    color: "#808080",
    textAlign: "center",
  }
});
