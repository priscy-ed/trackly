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
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="home-outline" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="person-outline" color={color} />
            ),
          }}
        />
      </Tabs>
  );
};

export default TabLayout;
