import { Ionicons } from '@expo/vector-icons';
import { Tabs, useLocalSearchParams } from 'expo-router';

export default function ClubTabsLayout() {
  const { clubId } = useLocalSearchParams();
  
  return (
    <Tabs>
      <Tabs.Screen 
        name="games" 
        options={{
          title: 'Games',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="football" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="chat" 
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="game-plan" 
        options={{
          title: 'Game Plan',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="clipboard" size={size} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}