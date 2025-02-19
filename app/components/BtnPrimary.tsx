import {Text, TouchableOpacity} from 'react-native'
import React from 'react'

export default function BtnPrimary({label}: {label: string}) {
    return (
        <TouchableOpacity className={'flex-row items-center gap-2 p-4 mt-10 rounded-lg bg-primary justify-center w-full'} activeOpacity={0.9}>
           <Text className={'text-white text-center font-roboto-semibold'}>{label}</Text>
        </TouchableOpacity>
    )
}
