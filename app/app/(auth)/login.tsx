import {ScrollView, Text, View} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import FormInput from "../../components/FormInput";
import BtnPrimary from "../../components/BtnPrimary";
import {Link, router} from "expo-router";
import { VIDVIBE_API_ORIGIN } from '@env'
import ErrorAlert from "../../components/ErrorAlert";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const handleLogin = async () => {
        try {
            setIsSubmitting(true);
            if (!formData.email || !formData.password) {
                setError('Please fill all the required fields.');
            } else {
                const response = await fetch(`${VIDVIBE_API_ORIGIN}/api/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    })
                })
                const result:responseType = await response.json();

                if(!result.success) {
                    setError(result.message);
                } else {
                    setFormData({
                        email: "",
                        password: "",
                    })
                    router.replace('/')
                }
            }
        }
        catch
            (error)
        {
            setError(error.message);
        }
        finally
        {
            setIsSubmitting(false);
        }
    }
    return (
        <SafeAreaView className={'flex-1'}>
            <ScrollView contentContainerClassName={'px-8 py-5 min-h-full justify-center'}>
            <Text className={'sub-heading'}>Welcome back,</Text>
            <Text className={'heading-1 text-primary'}>Log In</Text>
            <FormInput keyboardType={'email-address'} value={formData.email} handleChangeText={(e)=>setFormData({...formData, email: e})} label={'Enter your Email'} />
            <FormInput keyboardType={'default'} isPassword={true} value={formData.password} handleChangeText={(e)=>setFormData({...formData, password: e})} label={'Enter your Password'} />
            <BtnPrimary label={'Log In'} loadingText={'Logging In'} isLoading={isSubmitting}
                        onPress={handleLogin}/>
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
