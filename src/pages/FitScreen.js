import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FitnessItems } from "../context/FitnessContext";

const FitScreen = ({ route }) => {
  console.log(route.params);
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersises;
  const current = excersise[index];
  console.log(current, "primeiro exercicio");
  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    workout,
    setWorkout,
  } = useContext(FitnessItems);

  return (
    <View style={{ flex: 1 }}>
      <View style={{}}>
        {/* Imagem do exercício */}
        <Image
          style={{ width: "100%", height: 350 }}
          source={{ uri: current.image }}
        />
        {/* Nome do exercicio */}
        <Text
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          {current.name}
        </Text>
        {/* repetições dos exercicio */}
        <Text
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          x{current.sets}
        </Text>
        {index + 1 >= excersise.length ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={{
              backgroundColor: "blue",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 30,
              borderRadius: 20,
              padding: 10,
              width: 150,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#F2F2F2",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Done
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RestScreen");
              setCompleted([...completed, current.name]);
              setWorkout(workout + 1);
              setMinutes(minutes + 2.5);
              setCalories(calories + 6);
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={{
              backgroundColor: "#0D66D0",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 30,
              borderRadius: 20,
              padding: 10,
              width: 150,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#F2F2F2",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Concluido
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
          }}
        >
          <TouchableOpacity
          disabled={index === 0}
            onPress={() => {
              navigation.navigate("RestScreen");

              setTimeout(() => {
                setIndex(index - 1);
              }, 2000);
            }}
            style={{
              width: 100,
              backgroundColor: "#6A4C73",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: "#F2F2F2",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              PREV
            </Text>
          </TouchableOpacity>

          {index + 1 >= excersise.length ? (
            <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
              style={{
                width: 100,
                backgroundColor: "#6A4C73",
                padding: 10,
                borderRadius: 20,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "#F2F2F2",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                SKIP
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestScreen");

                setTimeout(() => {
                  setIndex(index + 1);
                }, 2000);
              }}
              style={{
                width: 100,
                backgroundColor: "#6A4C73",
                padding: 10,
                borderRadius: 20,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "#F2F2F2",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                SKIP
              </Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FitScreen;
