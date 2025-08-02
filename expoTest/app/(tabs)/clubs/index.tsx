import { router } from 'expo-router';
import { FlatList, Text, TouchableOpacity } from 'react-native';

const clubs = [
  { id: 'club-a', name: 'Club A' },
  { id: 'club-b', name: 'Club B' },
  { id: 'club-c', name: 'Club C' },
  { id: 'club-d', name: 'Club D' },
  { id: 'club-e', name: 'Club E' },
];

export default function ClubsList() {
  const handleClubPress = (clubId: string) => {
    router.push(`/club/${clubId}/games`);
  };

  return (
    <FlatList
      data={clubs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity 
          onPress={() => handleClubPress(item.id)}
          style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#eee' }}
        >
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}