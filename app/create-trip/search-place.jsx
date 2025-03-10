import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SearchPlace() {
    const navigation = useNavigation();
    const {tripData, setTripData} = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search Place',
        });
    }, []);

  return (
    <View style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
    }}>
      <GooglePlacesAutocomplete
      placeholder='Search...'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        // console.log(data.description);
        setTripData({
          locationInfo: {
            name: data.description,
            coordinates: details?.geometry.location,
            photoRef: details?.photos?.[0]?.photo_reference,
            url: details?.url 
          }
        })
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
    />
    </View>
  )
}