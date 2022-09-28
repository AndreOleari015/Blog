import React from 'react';
import { ImageBackground, Text, View } from 'react-native';


const LoadingPage: React.FC = () => {
    return (
        <ImageBackground
            source={require("../../assets/splash.png")}
            style={{ flex: 1 }} />
    )
}

export default LoadingPage;