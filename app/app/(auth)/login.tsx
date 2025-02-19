import {Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import FormInput from "../../components/FormInput";
import BtnPrimary from "../../components/BtnPrimary";
import {Router} from "expo-router/build/rsc/router/client";
import {Link, router} from "expo-router";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    return (
        <SafeAreaView className={'flex-1 px-8 justify-center'}>
            <Text className={'sub-heading'}>Welcome back,</Text>
            <Text className={'heading-1 text-primary'}>Login</Text>
            <FormInput keyboardType={'email-address'} value={formData.email} handleChangeText={(e)=>setFormData({...formData, email: e})} label={'Enter your Email'} />
            <FormInput keyboardType={'visible-password'} value={formData.password} handleChangeText={(e)=>setFormData({...formData, password: e})} label={'Enter your Password'} />
            <BtnPrimary label={'Login'}/>
            <Text className="text-center my-4">OR</Text>
            <View className='flex flex-row justify-center items-center'>
                <Text className='mr-1'>Don't have an account?</Text>
                    <Link href={'/signup'} className='link'>Signup</Link>
            </View>
            <View className='flex flex-row justify-center items-center mt-2'>
                <Text className='mr-1'>Help Sign In?</Text>
                <Link href={'/forget/password'} className={'link'}>Forget Password?</Link>
            </View>
        </SafeAreaView>
    )
}
