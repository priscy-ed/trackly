import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { fonts } from '@/core/theme/font';
import { useFonts } from 'expo-font';

const Home = () => {
  const [fontsLoaded] = useFonts({
    Hangout: require('../../assets/fonts/quarantype-hangout.ttf'),
  });

  if (!fontsLoaded) return null;
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Trackly',
          headerTitleStyle: { fontFamily: fonts.tertiary, fontSize: 24 },
        }}
      />
      <View>
        
        <Text>Home</Text>
      </View>
    </>
  );
};

export default Home;
