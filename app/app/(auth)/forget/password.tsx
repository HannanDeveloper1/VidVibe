import {Alert, Image, ScrollView, Text, View} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import FormInput from "../../../components/FormInput";
import BtnPrimary from "../../../components/BtnPrimary";
import {Link, router} from "expo-router";
import ErrorAlert from "../../../components/ErrorAlert";
import icons from "../../../constants/icons";
import { VIDVIBE_API_ORIGIN } from '@env'

export default function ForgetPassword() {
    const [formData, setFormData] = useState({
        email: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const handleForgetPassword = async () => {
        try {
            setIsSubmitting(true);
            if (!formData.email) {
                setError('Please enter the email');
            } else {
                const response = await fetch(`${VIDVIBE_API_ORIGIN}/api/auth/forget/password`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: formData.email,
                    })
                })
                const result:responseType = await response.json();

                if(!result.success) {
                    setError(result.message);
                } else {
                    setFormData({
                        email: "",
                    })
                    Alert.alert("Success", "Link sent")
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
                <Text className={'sub-heading'}>Really?</Text>
                <Text className={'heading-1 text-primary'} numberOfLines={1}>Forget Password</Text>
                <FormInput keyboardType={'email-address'} value={formData.email} handleChangeText={(e)=>setFormData({...formData, email: e})} label={'Enter your Email'} />
                <View className='informative flex-row items-start mt-3 gap-1 pr-6 bg-informative-bg py-2 pl-1 rounded-lg space-x-3 text-wrap'>
                    <Image source={icons.error} className='size-6' tintColor='#ff8800' />
                    <Text className='paragraph text-informative'>Enter your forgotten account email to send reset password link.</Text>
                </View>
                <BtnPrimary label={'Send Link'} loadingText={'Sending'} isLoading={isSubmitting}
                            onPress={handleForgetPassword} />
                <Text className="text-center my-4">OR</Text>
                <View className='flex flex-row justify-center items-center'>
                    <Text className='mr-1'>Remember your Password?</Text>
                    <Link href={'/login'} className='link'>Log In</Link>
                </View>
            </ScrollView>
            <ErrorAlert message={error} showAlert={error} setShowAlert={setError} />
        </SafeAreaView>
    )
}
