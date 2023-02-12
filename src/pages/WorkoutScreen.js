import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FAB } from 'react-native-paper';
import { FitnessItems } from "../context/FitnessContext";

const WorkoutScreen = ({ route }) => {
  const navigate = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);
  
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image
          style={{ width: "100%", height: 170 }}
          source={{ uri: route.params.image }}
        />
        <Ionicons
          onPress={() => navigate.goBack()}
          style={{ position: "absolute", top: 50, left: 20 }}
          name="arrow-back"
          size={24}
          color="white"
        />

        {/* Map */}
        <ScrollView>
          {route.params.excersises.map((item, key) => (
            <TouchableOpacity
              style={{ margin: 10, flexDirection: "row", alignItems: "center"}}
              key={key}
            >
              <Image
                style={{ height: 90, width: 90 }}
                source={{ uri: item.image }}
              />
              <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold", width:180}}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 18, marginTop: 4, color: "grays" }}>
                x{item.sets}
              </Text>
              </View>
              {completed.includes(item.name) ? 
              <AntDesign style={{marginLeft:40}} name="checkcircle" size={24} color="green" />
            :
              null
            }
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FAB
      onPress={()=>{
        navigate.navigate("FitScreen", {
          excersises: route.params.excersises,
        })
        setCompleted([]);
      }}
      icon="play"
      color="white"
      style={{
      backgroundColor: "#84458C",
      borderRadius: 50,
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,}}
    />
    </View>

  );
};

export default WorkoutScreen;
