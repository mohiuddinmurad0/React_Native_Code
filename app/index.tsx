import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Screen</Text>

      <Link href='/loginScreen' style={{ marginTop: 20 , padding:5 , width:100 , height:33 , backgroundColor:'red', borderRadius: 10 ,textAlign:'center'}}>
        Login Page
      </Link>

    </View>
  );
}
