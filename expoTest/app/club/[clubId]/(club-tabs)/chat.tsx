import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ChatScreen() {
  const { clubId } = useLocalSearchParams<{ clubId: string }>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat for {clubId}</Text>
    </View>
  );
}