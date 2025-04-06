// // // // // import { StatusBar } from 'expo-status-bar';
// // // // // import { StyleSheet, Text, View } from 'react-native';

// // // // // export default function App() {
// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <Text>Open up App.js to start working on your app!</Text>
// // // // //       <StatusBar style="auto" />
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     backgroundColor: '#fff',
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'center',
// // // // //   },
// // // // // });
// // // // import React, { useState, useEffect } from 'react';
// // // // import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// // // // import * as FileSystem from 'expo-file-system';

// // // // const App = () => {
// // // //   const [files, setFiles] = useState([]);
// // // //   const [loading, setLoading] = useState(true);

// // // //   // This function loads files from a directory
// // // //   const loadFiles = async (directory) => {
// // // //     try {
// // // //       const fileList = await FileSystem.readDirectoryAsync(directory);
// // // //       setFiles(fileList);
// // // //     } catch (error) {
// // // //       console.error('Error reading directory:', error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     // Assuming you want to list files from the app's document directory
// // // //     loadFiles(FileSystem.documentDirectory);
// // // //   }, []);

// // // //   // Renders individual files/folders in the list
// // // //   const renderItem = ({ item }) => {
// // // //     return (
// // // //       <TouchableOpacity style={styles.fileItem}>
// // // //         <Text>{item}</Text>
// // // //       </TouchableOpacity>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <Text style={styles.header}>Folder Structure</Text>
// // // //       {loading ? (
// // // //         <Text>Loading...</Text>
// // // //       ) : (
// // // //         <FlatList
// // // //           data={files}
// // // //           renderItem={renderItem}
// // // //           keyExtractor={(item, index) => index.toString()}
// // // //         />
// // // //       )}
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     justifyContent: 'center',
// // // //     alignItems: 'center',
// // // //     paddingTop: 50,
// // // //   },
// // // //   header: {
// // // //     fontSize: 24,
// // // //     fontWeight: 'bold',
// // // //     marginBottom: 20,
// // // //   },
// // // //   fileItem: {
// // // //     padding: 10,
// // // //     backgroundColor: '#f0f0f0',
// // // //     marginBottom: 5,
// // // //     borderRadius: 5,
// // // //   },
// // // // });

// // // // export default App;
// // // import React from 'react';
// // // import { NavigationContainer } from  '@react-navigation/native';
// // // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // // import HomeScreen from './screens/HomeScreen';
// // // import DetailsScreen from './screens/AboutScreen';

// // // const Stack = createNativeStackNavigator();

// // // export default function App() {
// // //   return (
// // //     <NavigationContainer>
// // //       <Stack.Navigator initialRouteName="Home">
// // //         <Stack.Screen name="Home" component={HomeScreen} />
// // //         <Stack.Screen name="Details" component={DetailsScreen} />
// // //       </Stack.Navigator>
// // //     </NavigationContainer>
// // //   );
// // // }
// // import React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import HomeScreen from './screens/HomeScreen';
// // import AboutScreen from './screens/AboutScreen';
// // import HireMeScreen from './screens/HireMeScreen';

// // const Stack = createNativeStackNavigator();

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName="Home">
// //         <Stack.Screen name="Home" component={HomeScreen} />
// //         <Stack.Screen name="About" component={AboutScreen} />
// //         <Stack.Screen name="Hire Me" component={HireMeScreen} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }
// import React, { useContext } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './screens/HomeScreen';
// import AboutScreen from './screens/AboutScreen';
// import HireMeScreen from './screens/HireMeScreen';
// import LoginScreen from './screens/LoginScreen';
// import { AuthProvider, AuthContext } from './AuthContext';

// const Stack = createNativeStackNavigator();

// function AppStack() {
//   const { isLoggedIn } = useContext(AuthContext);

//   console.log("isLoggedIn", isLoggedIn); // ✅ Add this

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {isLoggedIn ? (
//           <>
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="About" component={AboutScreen} />
//             <Stack.Screen name="Hire Me" component={HireMeScreen} />
//           </>
//         ) : (
//           <Stack.Screen name="Login" component={LoginScreen} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <AppStack />
//     </AuthProvider>
//   );
// }
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import HireMeScreen from './screens/HireMeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="HireMe" component={HireMeScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
