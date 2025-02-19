import {View, Text, TextInput, TouchableOpacity, Image, KeyboardTypeOptions} from 'react-native';
import React, { useState } from 'react';
import icons from '../constants/icons';

const FormInput = ({ keyboardType, value, placeholder, handleChangeText, label, numOfLines=1 }: { keyboardType: KeyboardTypeOptions, value:string, placeholder?: string, label:string, handleChangeText: (e:any)=>void, numOfLines?: number}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View className={`space-y-2 mt-5 font-roboto-medium`}>
            <Text className="text-base text-black-200 font-pmedium">{label}:</Text>
            <View className={`w-full h-16 px-4 bg-white-100 rounded-2xl mt-2 border-2 ${isFocused ? 'border-primary' : 'border-black-200'} items-center flex-row`}>
                <TextInput
                    className="flex-1 text-black-200 font-psemibold text-lg"
                    value={value}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    numberOfLines={numOfLines}
                    placeholderTextColor="#222"
                    onChangeText={handleChangeText}
                    secureTextEntry={keyboardType === 'visible-password' && !showPassword}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {keyboardType === 'visible-password' && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} activeOpacity={0.6}>
                        <Image source={!showPassword ? icons.eye : icons.eyeHide} className="size-6" resizeMode="contain" tintColor={'#222'} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormInput;
