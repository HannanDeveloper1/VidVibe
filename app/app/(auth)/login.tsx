import {ScrollView, Text, View} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import FormInput from "../../components/FormInput";
import BtnPrimary from "../../components/BtnPrimary";
import {Link} from "expo-router";
import ErrorAlert from "../../components/ErrorAlert";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState('');
    return (
        <SafeAreaView className={'flex-1'}>
            <ScrollView contentContainerClassName={'px-8 py-5 min-h-full justify-center'}>
            <Text className={'sub-heading'}>Welcome back,</Text>
            <Text className={'heading-1 text-primary'}>Log In</Text>
            <FormInput keyboardType={'email-address'} value={formData.email} handleChangeText={(e)=>setFormData({...formData, email: e})} label={'Enter your Email'} />
            <FormInput keyboardType={'default'} isPassword={true} value={formData.password} handleChangeText={(e)=>setFormData({...formData, password: e})} label={'Enter your Password'} />
            <BtnPrimary label={'Log In'} loadingText={'Logging In'} onPress={() => setError('The Server is not running or incorrect API')} isLoading={error !== ""}/>
            <Text className="text-center my-4">OR</Text>
            <View className='flex flex-row justify-center items-center'>
                <Text className='mr-1'>Don't have an account?</Text>
                    <Link href={'/signup'} className='link'>Sign Up</Link>
            </View>
            <View className='flex flex-row justify-center items-center mt-2'>
                <Text className='mr-1'>Help Sign In?</Text>
                <Link href={'/forget/password'} className={'link'}>Forget Password?</Link>
            </View>
            </ScrollView>
            <ErrorAlert message={error} showAlert={error} setShowAlert={setError} />
        </SafeAreaView>
    )
}
