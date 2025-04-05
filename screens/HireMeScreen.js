import React from 'react';
import { View, Text, StyleSheet, Button, Linking } from 'react-native';

export default function HireMeScreen() {
  const handleContact = () => {
    Linking.openURL('mailto:your@email.com');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hire Me</Text>
      <Text style={styles.text}>
        I'm open to opportunities! Feel free to reach out for collaboration or job offers.
      </Text>
      <Button title="Contact Me" onPress={handleContact} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});
