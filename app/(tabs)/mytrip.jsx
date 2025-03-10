import { View, Text } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/Colors";
import { Ionicons } from '@expo/vector-icons';

import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";

export default function Mytrip() {

  const [userTrips, setUserTrips] = useState([]);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{
          fontFamily: "outfit-bold",fontSize: 24
        }}>Mytrip</Text>
        <Ionicons name="add-circle" size={24} color="black" />
      </View>

      { userTrips?.length == 0 ?
        <StartNewTripCard /> : null
      }
    </View>
  );
}
