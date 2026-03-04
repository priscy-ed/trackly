import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { COLORS } from '@/core/theme/colors';
import { TabBarIcon } from '@/components/TabBarIcon';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.blue[400],
        tabBarStyle: {
          backgroundColor: COLORS.red[500],
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 4,
          width: '90%',
          alignSelf: 'center',
          bottom: 10,
          borderRadius: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="person-outline" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
