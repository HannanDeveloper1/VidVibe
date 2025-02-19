import { View, TouchableOpacity, Animated, PanResponder } from 'react-native';
import React, { useRef } from 'react';
import { JSX, ReactNode } from "react";

export default function FormDrawer({ children }: { children: ReactNode }): JSX.Element {
    const initialHeight = 260;
    const maxHeight = 350;
    const height = useRef(new Animated.Value(initialHeight)).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: () => {
                height.setOffset(height._value);
                height.setValue(0);
            },
            onPanResponderMove: (evt, gestureState) => {
                if (gestureState.dy < 0) {
                    height.setValue(-gestureState.dy);
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                height.flattenOffset();
                Animated.spring(height, {
                    toValue: initialHeight,
                    useNativeDriver: false,
                }).start();
            },
        })
    ).current;

    return (
        <Animated.View style={{ height: height, maxHeight, backgroundColor: '#f2f2f2', width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
            <View className='w-full h-8 flex-row mb-1.5' {...panResponder.panHandlers}>
                <TouchableOpacity className={'flex-1 items-center justify-center'}>
                    <View className='w-24 h-1 bg-black-200 rounded-full' />
                </TouchableOpacity>
            </View>
            {children}
        </Animated.View>
    );
}
