import { Image, Text, TouchableOpacity, View, Animated, Easing } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import FormDrawer from '../components/formDrawer';
import icons from '../constants/icons';
import images from '../constants/images';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

export default function Index() {
    const translateYAnimation = useRef(new Animated.Value(300)).current;
    const translateXLeftAnimation = useRef(new Animated.Value(-300)).current;
    const translateXRightAnimation = useRef(new Animated.Value(300)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(translateYAnimation, {
                toValue: 0,
                duration: 1000,
                easing: Easing.out(Easing.exp),
                useNativeDriver: true,
            }),
            Animated.timing(translateXLeftAnimation, {
                toValue: 0,
                duration: 1000,
                easing: Easing.out(Easing.exp),
                useNativeDriver: true,
            }),
            Animated.timing(translateXRightAnimation, {
                toValue: 0,
                duration: 1000,
                easing: Easing.out(Easing.exp),
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <LinearGradient colors={['#ff89b8', '#ec3554', '#ec3554']} style={{ flex: 1 }}>
            <SafeAreaView className="flex-1 items-center justify-center">
                <View className="flex-1 items-center justify-center">
                    <Animated.View style={{
                        position: 'absolute',
                        left: '31%',
                        transform: [{ translateX: translateXLeftAnimation }, { rotate: '30deg' }],
                        zIndex: 0,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        elevation: 5
                    }}>
                        <LinearGradient colors={['#ff792c', '#ffa25e']} style={{ borderRadius: 12 }}>
                            <Image source={icons.upload} className="size-24" tintColor={'#f2f2f2'} />
                        </LinearGradient>
                    </Animated.View>
                    <Animated.View style={{
                        transform: [{ translateY: translateYAnimation }],
                        zIndex: 1,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        elevation: 5
                    }}>
                        <Image source={images.icon} className="size-28" />
                    </Animated.View>
                    <Animated.View style={{
                        position: 'absolute',
                        right: '32%',
                        transform: [{ translateX: translateXRightAnimation }, { rotate: '-32deg' }],
                        zIndex: 2,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        elevation: 5
                    }}>
                        <LinearGradient colors={['#0088ea', '#33bfff']} style={{ borderRadius: 12 }}>
                            <Image source={icons.likeFill} className="size-20" tintColor={'#f2f2f2'} />
                        </LinearGradient>
                    </Animated.View>
                </View>
                <FormDrawer>
                    <View>
                        <Text className="font-roboto-bold text-3xl text-center">Get Started</Text>
                        <Text className="sub-heading text-center mt-1">Login to your account!</Text>
                        <TouchableOpacity className="drawer-btn bg-primary" activeOpacity={0.9}>
                            <Image source={icons.google} tintColor="#fff" className="size-7" />
                            <Text className="font-roboto-medium text-white">Continue with Google</Text>
                        </TouchableOpacity>
                        <Text className="text-center">OR</Text>
                        <TouchableOpacity className="drawer-btn bg-white-100 border border-black-200 mb-5" activeOpacity={0.5} onPress={() => { router.navigate('/login'); }}>
                            <Image source={icons.mail} className="size-7" />
                            <Text className="font-roboto-medium">Continue with Email</Text>
                        </TouchableOpacity>
                    </View>
                </FormDrawer>
                <StatusBar animated={true} style="light" />
            </SafeAreaView>
        </LinearGradient>
    );
}
