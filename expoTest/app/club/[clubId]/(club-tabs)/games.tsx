import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function GamesScreen() {
  const { clubId } = useLocalSearchParams<{ clubId: string }>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Games for {clubId}</Text>
    </View>
  );
}