import { styles } from '../../AppStyles';
import { View, Text } from 'react-native';

export default function AccountView() {
    return (
      <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Account</Text>
      </View>
    );
  }