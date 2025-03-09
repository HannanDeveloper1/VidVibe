import {View, Text, Image, TouchableOpacity, Animated, Easing, Pressable} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import icons from '../constants/icons';
import { BlurView } from 'expo-blur';

export default function ErrorAlert({ message, showAlert, setShowAlert }) {
    const slideAnim = useRef(new Animated.Value(-100)).current;

    useEffect(() => {
        if (showAlert) {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 200,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: -100,
                duration: 200,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start(() => {
                setShowAlert('');
            });
        }
    }, [showAlert]);

    return (
        <>
            {showAlert && (
                <>
                    <BlurView experimentalBlurMethod={'dimezisBlurView'} intensity={2} className='absolute top-0 h-[103vh] w-screen'>
                        <View className='bg-black-overlay top-0 w-screen'>
                            <Animated.View style={{ transform: [{ translateY: slideAnim }], width: '100%' }}>
                                <View className='bg-danger w-screen min-h-28 h-fit rounded-b-2xl justify-end p-3 pt-8'>
                                    <View className='flex-row items-center justify-between space-x-2 gap-2'>

                                        <Image source={icons.error} tintColor={'#fff'} className={'size-8'} /><Text className='text-white font-roboto-medium flex-1 items-center justify-center'>{message}</Text>
                                        <TouchableOpacity onPress={() => setShowAlert('')} activeOpacity={0.8}>
                                            <Image source={icons.close} className='size-8' tintColor='#fff' />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Animated.View>
                        </View>
                        <Pressable onPress={()=> setShowAlert('')} className={'flex-1 bg-black-overlay'}></Pressable>
                    </BlurView>
                    <StatusBar animated={true} style='light' />
                </>
            )}
        </>
    );
}
