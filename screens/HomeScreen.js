// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// export default function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
// });
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>

      <View style={styles.card}>
        <Text>📱 React Native Projects</Text>
      </View>
      <View style={styles.card}>
        <Text>📊 Data Analytics Passion</Text>
      </View>
      <View style={styles.card}>
        <Text>💼 Mobile Developer @ Optimizrion IT Ltd.</Text>
      </View>

      <Button title="About Me" onPress={() => navigation.navigate('About')} />
      <Button title="Hire Me" onPress={() => navigation.navigate('Hire Me')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
});
