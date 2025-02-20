import {ActivityIndicator, GestureResponderEvent, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'

export default function BtnPrimary({label, isLoading=false, onPress, loadingText="Loading"}: {label: string, isLoading?: boolean, loadingText?: string,  onPress?: (event: GestureResponderEvent) => void}) {
    return (
        <TouchableOpacity disabled={isLoading} className={'flex-row items-center gap-2 p-4 mt-10 rounded-lg bg-primary disabled:opacity-80 justify-center w-full'} activeOpacity={0.9} onPress={onPress}>
            {isLoading ?
                (
                   <View className={'flex-row gap-2'}><ActivityIndicator color={'#fff'}/><Text className={'text-white text-center font-roboto-semibold'}>{loadingText}</Text></View>
                ) :(
                    <Text className={'text-white text-center font-roboto-semibold'}>{label}</Text>
            )}
        </TouchableOpacity>
    )
}
