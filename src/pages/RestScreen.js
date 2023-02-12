import { useNavigation } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";

function RestScreen() {
  const navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(15);

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTime();
    return () => clearTimeout(timer);
  });

  return (

      <View style={{ flex:1, backgroundColor: "#4D62AB" }}>
        <View style={{ height: 420 }}>
          <AnimatedLottieView
            source={require("../assets/timer.json")}
            autoPlay
          />
        </View>
        <View>
          <Text
            style={{
              color:'#f2f2f2',
              fontSize: 30,
              fontWeight: "900",
              marginTop: 50,
              textAlign: "center",
            }}
          >
            Descanse!
          </Text>
          <Text
            style={{
              color:'#f2f2f2',
              fontSize: 40,
              fontWeight: "800",
              marginTop: 50,
              textAlign: "center",
            }}
          >
            {timeLeft}
          </Text>
        </View>
      </View>
  );
}

export default RestScreen;
