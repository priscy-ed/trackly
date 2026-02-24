import { Stack } from 'expo-router';

import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { fonts } from '@/core/theme/font';

export default function Home() {
  const [fontsLoaded] = useFonts({
    Hangout: require('../assets/fonts/quarantype-hangout.ttf'),
  });

  if (!fontsLoaded) return null;
  return (
    <View className={styles.container}>
      <Stack.Screen options={{ title: 'Trackly', headerTitleStyle: { fontFamily: fonts.tertiary } }} />
    </View>
  );
}

const styles = {
  container: 'flex flex-1 bg-white',
};
