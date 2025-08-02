// import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>Home Screen</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
     marginTop: 20, 
     padding: 5, 
     width: 100, 
     height: 33, 
     backgroundColor: 'red', 
     borderRadius: 10,
    textAlign: 'center' 
  }

})
