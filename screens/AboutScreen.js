// // import React from 'react';
// // import { View, Text, Button, StyleSheet } from 'react-native';

// // export default function DetailsScreen({ navigation }) {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Details Screen</Text>
// //       <Button
// //         title="Go back"
// //         onPress={() => navigation.goBack()}
// //       />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   title: {
// //     fontSize: 24,
// //     marginBottom: 20,
// //   },
// // });
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function AboutScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>About Me</Text>
//       <Text style={styles.text}>
//         I'm a freshly graduated mobile app developer with experience in React Native and a deep interest in data analytics. Currently working at Optimizrion IT Ltd.
//       </Text>
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
//     lineHeight: 24,
//   },
// });
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>👨‍💻 About Me</Text>
      <Text style={styles.text}>
        I'm a passionate mobile developer with a fresh graduation and solid skills in React Native. I love building clean, intuitive apps and exploring data-driven features to enhance user experience.
      </Text>
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
    lineHeight: 24,
  },
});
