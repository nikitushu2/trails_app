import React from 'react';
import { Stack } from 'expo-router';
import { Text } from "react-native";

const App = () => {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <Text>Hello</Text>
        </>
    )
}

export default App;