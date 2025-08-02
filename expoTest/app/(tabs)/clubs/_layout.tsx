import { Stack } from 'expo-router';

export default function ClubsLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ title: 'My Clubs' }} 
      />
    </Stack>
  );
}