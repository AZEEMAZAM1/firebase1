// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';

const App = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  // This function loads files from a directory
  const loadFiles = async (directory) => {
    try {
      const fileList = await FileSystem.readDirectoryAsync(directory);
      setFiles(fileList);
    } catch (error) {
      console.error('Error reading directory:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Assuming you want to list files from the app's document directory
    loadFiles(FileSystem.documentDirectory);
  }, []);

  // Renders individual files/folders in the list
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.fileItem}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Folder Structure</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={files}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fileItem: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default App;
