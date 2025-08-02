import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import {} from 'react-native-paper'

export default function AuthScreen () {
    return (

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <View>
                <Text>Create Account</Text>
                
            </View>

        </KeyboardAvoidingView>
    )
}