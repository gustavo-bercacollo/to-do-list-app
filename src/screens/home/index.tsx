import React, { useState } from "react";
import { Text, View, TextInput, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";

export function Home() {
  const [tasksData, setTasksData] = useState<{ id: string; taskDescription: string; complete: boolean }[]>([]);
  const [tasks, setTasks] = useState("");
  const [focusBorder, setFocusBorder] = useState(false);

  function addTask() {
    if (tasks.trim() === "") {
      return Alert.alert("Task Inválida", "A task não pode estar vazia");
    }

    const newTask = {
      id: `${Date.now()}` + `${Math.floor(Math.random() * 1000)}`,
      taskDescription: tasks.trim(),
      complete: false,
    };

    setTasksData((prevState) => [...prevState, newTask]);
    setTasks("");
  }

  function removeTask(id: string) {
    setTasksData((prev) => prev.filter((task) => task.id !== id));
  }

  function toggleTaskComplete(id: string, complete: boolean) {
    setTasksData((prev) =>
      prev.map((task) => (task.id === id ? { ...task, complete } : task))
    );
  }

  const countTaskDone = tasksData.filter((task) => task.complete).length;

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/Logo.png")} style={styles.image} />
      <View style={styles.form}>
        <TextInput
          style={[
            styles.taskInput,
            focusBorder && { borderWidth: 1, borderColor: "#5E60CE" },
          ]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTasks}
          value={tasks}
          onFocus={() => setFocusBorder(true)}
          onBlur={() => setFocusBorder(false)}
        />
        <TouchableOpacity onPress={addTask} style={styles.button}>
          <Image source={require("../../../assets/plus.png")} style={styles.plusImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoTasks}>
        <View style={styles.taskCounterContainer}>
          <Text style={styles.createdInfo}>Criadas</Text>
          <View style={styles.numberOfTasksView}>
            <Text style={styles.numberOfTasks}>{tasksData.length}</Text>
          </View>
        </View>

        <View style={styles.taskCounterContainer}>
          <Text style={styles.doneInfo}>Concluídas</Text>
          <View style={styles.numberOfTasksView}>
            <Text style={styles.numberOfTasks}>{countTaskDone}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={tasksData}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => (
          <Task
            taskDescription={item.taskDescription}
            onRemove={() => removeTask(item.id)}
            onComplete={(completed) => toggleTaskComplete(item.id, completed)}
            isComplete={item.complete}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <View style={styles.line} />
            <View style={styles.showWhenNoTasks}>
              <Image
                source={require("../../../assets/clipboard.png")}
                style={styles.clipboardImg}
              />
              <Text style={styles.showWhenNoTasksText1}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.showWhenNoTasksText2}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </>
        )}
      />
    </View>
  );
}
