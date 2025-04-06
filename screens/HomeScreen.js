// // // // // import React from 'react';
// // // // // import { View, Text, Button, StyleSheet } from 'react-native';

// // // // // export default function HomeScreen({ navigation }) {
// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <Text style={styles.title}>Home Screen</Text>
// // // // //       <Button
// // // // //         title="Go to Details"
// // // // //         onPress={() => navigation.navigate('Details')}
// // // // //       />
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     alignItems: 'center',
// // // // //     justifyContent: 'center',
// // // // //   },
// // // // //   title: {
// // // // //     fontSize: 24,
// // // // //     marginBottom: 20,
// // // // //   },
// // // // // });
// // // // import React from 'react';
// // // // import { View, Text, Button, StyleSheet } from 'react-native';

// // // // export default function HomeScreen({ navigation }) {
// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <Text style={styles.title}>Welcome to My App</Text>

// // // //       <View style={styles.card}>
// // // //         <Text>📱 React Native Projects</Text>
// // // //       </View>
// // // //       <View style={styles.card}>
// // // //         <Text>📊 Data Analytics Passion</Text>
// // // //       </View>
// // // //       <View style={styles.card}>
// // // //         <Text>💼 Mobile Developer @ Optimizrion IT Ltd.</Text>
// // // //       </View>

// // // //       <Button title="About Me" onPress={() => navigation.navigate('About')} />
// // // //       <Button title="Hire Me" onPress={() => navigation.navigate('Hire Me')} />
// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     padding: 20,
// // // //     justifyContent: 'center',
// // // //     backgroundColor: '#fff',
// // // //   },
// // // //   title: {
// // // //     fontSize: 26,
// // // //     marginBottom: 20,
// // // //     fontWeight: 'bold',
// // // //     textAlign: 'center',
// // // //   },
// // // //   card: {
// // // //     padding: 15,
// // // //     marginVertical: 8,
// // // //     backgroundColor: '#f2f2f2',
// // // //     borderRadius: 10,
// // // //   },
// // // // });
// // // import React from 'react';
// // // import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

// // // export default function HomeScreen({ navigation }) {
// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.title}>👋 Welcome!</Text>

// // //       <View style={styles.card}>
// // //         <Text style={styles.cardText}>📱 React Native Projects</Text>
// // //       </View>
// // //       <View style={styles.card}>
// // //         <Text style={styles.cardText}>📊 Passion for Data Analytics</Text>
// // //       </View>
// // //       <View style={styles.card}>
// // //         <Text style={styles.cardText}>💼 Mobile Developer @ Optimizrion IT Ltd.</Text>
// // //       </View>

// // //       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
// // //         <Text style={styles.buttonText}>About Me</Text>
// // //       </TouchableOpacity>

// // //       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Hire Me')}>
// // //         <Text style={styles.buttonText}>Hire Me</Text>
// // //       </TouchableOpacity>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#0A2647',
// // //     padding: 20,
// // //     justifyContent: 'center',
// // //   },
// // //   title: {
// // //     fontSize: 30,
// // //     color: '#fff',
// // //     marginBottom: 25,
// // //     fontWeight: 'bold',
// // //     textAlign: 'center',
// // //   },
// // //   card: {
// // //     backgroundColor: '#f5f5f5',
// // //     padding: 16,
// // //     borderRadius: 12,
// // //     marginVertical: 8,
// // //   },
// // //   cardText: {
// // //     fontSize: 16,
// // //     color: '#0A2647',
// // //   },
// // //   button: {
// // //     backgroundColor: '#2C74B3',
// // //     paddingVertical: 12,
// // //     borderRadius: 8,
// // //     marginTop: 15,
// // //     alignItems: 'center',
// // //   },
// // //   buttonText: {
// // //     color: '#fff',
// // //     fontSize: 16,
// // //   },
// // // });
// // import React from 'react';
// // import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// // export default function HomeScreen({ navigation }) {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>🌟 My Ambitions</Text>

// //       <View style={styles.fileCard}>
// //         <Text style={styles.fileTitle}>📱 App Builder</Text>
// //         <Text style={styles.fileText}>
// //           I aim to build user-friendly, innovative mobile apps that solve real-world problems.
// //         </Text>
// //       </View>

// //       <View style={styles.fileCard}>
// //         <Text style={styles.fileTitle}>📊 Data Enthusiast</Text>
// //         <Text style={styles.fileText}>
// //           I'm passionate about using data to make smart decisions and improve user experience.
// //         </Text>
// //       </View>

// //       <View style={styles.fileCard}>
// //         <Text style={styles.fileTitle}>🚀 Career Growth</Text>
// //         <Text style={styles.fileText}>
// //           My mission is to grow steadily as a developer, learning from every project and team.
// //         </Text>
// //       </View>

// //       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
// //         <Text style={styles.buttonText}>About Me</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Hire Me')}>
// //         <Text style={styles.buttonText}>Hire Me</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#0A2647',
// //     padding: 20,
// //     justifyContent: 'center',
// //   },
// //   title: {
// //     fontSize: 28,
// //     color: '#fff',
// //     fontWeight: 'bold',
// //     marginBottom: 25,
// //     textAlign: 'center',
// //   },
// //   fileCard: {
// //     backgroundColor: '#f5f5f5',
// //     borderRadius: 12,
// //     padding: 16,
// //     marginBottom: 15,
// //     shadowColor: '#000',
// //     shadowOpacity: 0.1,
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowRadius: 6,
// //     elevation: 4,
// //   },
// //   fileTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 8,
// //     color: '#0A2647',
// //   },
// //   fileText: {
// //     fontSize: 14,
// //     color: '#333',
// //     lineHeight: 20,
// //   },
// //   button: {
// //     backgroundColor: '#2C74B3',
// //     paddingVertical: 12,
// //     borderRadius: 8,
// //     marginTop: 12,
// //     alignItems: 'center',
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// // });
// import React, { useContext } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { AuthContext } from '../AuthContext';

// export default function HomeScreen({ navigation }) {
//   const { logout } = useContext(AuthContext);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>🌟 My Ambitions</Text>

//       {/* ambition cards */}
//       <View style={styles.fileCard}>
//         <Text style={styles.fileTitle}>📱 App Builder</Text>
//         <Text style={styles.fileText}>I aim to build innovative mobile apps.</Text>
//       </View>

//       <View style={styles.fileCard}>
//         <Text style={styles.fileTitle}>📊 Data Enthusiast</Text>
//         <Text style={styles.fileText}>I love using data to improve UX.</Text>
//       </View>

//       <View style={styles.fileCard}>
//         <Text style={styles.fileTitle}>🚀 Career Growth</Text>
//         <Text style={styles.fileText}>Always learning and improving.</Text>
//       </View>

//       {/* navigation buttons */}
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
//         <Text style={styles.buttonText}>About Me</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Hire Me')}>
//         <Text style={styles.buttonText}>Hire Me</Text>
//       </TouchableOpacity>

//       {/* logout button */}
//       <TouchableOpacity style={[styles.button, { backgroundColor: '#b32c2c' }]} onPress={logout}>
//         <Text style={styles.buttonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#0A2647', padding: 20, justifyContent: 'center' },
//   title: { fontSize: 28, color: '#fff', fontWeight: 'bold', marginBottom: 25, textAlign: 'center' },
//   fileCard: {
//     backgroundColor: '#f5f5f5',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     elevation: 4,
//   },
//   fileTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#0A2647' },
//   fileText: { fontSize: 14, color: '#333', lineHeight: 20 },
//   button: {
//     backgroundColor: '#2C74B3',
//     paddingVertical: 12,
//     borderRadius: 8,
//     marginTop: 12,
//     alignItems: 'center',
//   },
//   buttonText: { color: '#fff', fontSize: 16 },
// });
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button title="Hire Me" onPress={() => navigation.navigate('HireMe')} />
            <Button title="About" onPress={() => navigation.navigate('About')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
