import { View, Text , StyleSheet } from 'react-native'


export default function LoginScreen() {
    return (
        <View style={styles.view}>
            <Text style={{ marginTop: 10, marginRight: 20 }}>Login Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})