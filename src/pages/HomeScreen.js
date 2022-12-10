import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import React, { useContext, useEffect } from "react";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FitnessItems } from "../context/FitnessContext";

const HomeScreen = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();
  const {
    minutes,
    calories,
    workout
  } = useContext(FitnessItems);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () =>{
      return true
    })
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#684F9F",
          padding: 18,
          height: 200,
          width: "100%",
        }}
      >
        {/* Home text*/}
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Olá, Ramon 
          </Text>
        </View>

        {/* WOKR, KCal, Min */}
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
            {workout}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              WORKOUTS
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
            {calories}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              KCAL
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
            {minutes}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              MINS
            </Text>
          </View>
        </View>

        {/* Image */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 20,
              borderRadius: 7,
            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>
      </View>
      <View style={{ marginTop: 80, height: 550, backgroundColor:'#F2F2F2' }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={FitnessData}
          keyExtractor={(x, i) => i}
          renderItem={({ item, key }) => (
            <View>
              <TouchableOpacity 
              onPress={() => navigation.navigate('Workout', {
                image: item.image,
                excersises: item.excersises,
                id: item.id,
              })}
              style={{ marginVertical: 10, marginHorizontal:20 }} key={key}>
                <Image
                  style={{ with: "95%", height: 140, borderRadius: 7 }}
                  source={{ uri: item.image }}
                />
                <Text
                  style={{
                    position: "absolute",
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
                    left: 20,
                    top: 10,
                  }}
                >
                  {item.name}
                </Text>
                <MaterialCommunityIcons
                  style={{
                    position: "absolute",
                    color: "white",
                    bottom: 15,
                    left: 10,
                  }}
                  name="lightning-bolt"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
