import { styles } from '../../AppStyles';
import { View, Text } from 'react-native';

export default function EventsView() {
    return (
      <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Events</Text>
      </View>
    );
  }