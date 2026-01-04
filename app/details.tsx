import { ScrollView, View } from 'react-native';

import { Stack, useLocalSearchParams } from 'expo-router';

import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';

export default function Details() {
  const { name } = useLocalSearchParams();

  return <ScrollView></ScrollView>;
}

const styles = {
  container: 'flex flex-1 bg-white',
};
