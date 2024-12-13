import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

type Props = {
  taskDescription: string;
  onRemove: () => void;
  onComplete: (completed: boolean) => void;
  isComplete: boolean;
};

export function Task({ taskDescription, onRemove, onComplete, isComplete }: Props) {
  const [checkoutPress, setCheckoutPress] = useState(isComplete);
  const [isHovered, setIsHovered] = useState(false);

  const checkImage = checkoutPress
    ? require("../../../assets/check.png")
    : require("../../../assets/checkDefault.png");

  function handlePress() {
    const newStatus = !checkoutPress;
    setCheckoutPress(newStatus);
    onComplete(newStatus);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskView}>
        <TouchableOpacity 
        onPress={handlePress}>
          <Image 
          source={checkImage} 
          style={styles.checkDefaultImg} />
          
        </TouchableOpacity>
        <Text
          style={[
            styles.taskViewText,
            checkoutPress && { textDecorationLine: 'line-through', color: '#808080' },
          ]}
        >
          {taskDescription}
        </Text>
        <TouchableOpacity 
        style={styles.remove} 
        onPress={onRemove}
        onPressIn={() => setIsHovered(true)}
        onPressOut={() => setIsHovered(false)}
        
        >
          <Image 
          source={require("../../../assets/trash.png")} 
          style={[styles.trashImg, isHovered && {tintColor: "#E25858"}]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}