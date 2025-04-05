// import React from 'react';
// import { View, Text, StyleSheet, Button, Linking } from 'react-native';

// export default function HireMeScreen() {
//   const handleContact = () => {
//     Linking.openURL('mailto:your@email.com');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Hire Me</Text>
//       <Text style={styles.text}>
//         I'm open to opportunities! Feel free to reach out for collaboration or job offers.
//       </Text>
//       <Button title="Contact Me" onPress={handleContact} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   header: {
//     fontSize: 24,
//     marginBottom: 15,
//     fontWeight: 'bold',
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
// });
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function HireMeScreen() {
  const handleContact = () => {
    Linking.openURL('mailto:your@email.com');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📩 Hire Me</Text>
      <Text style={styles.text}>
        I'm actively seeking opportunities to work on exciting projects. If you're hiring or looking for collaboration, let's connect!
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleContact}>
        <Text style={styles.buttonText}>Send Email</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A2647',
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#f5f5f5',
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#2C74B3',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
