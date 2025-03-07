import { Image, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormInput from '../../components/FormInput';
import BtnPrimary from '../../components/BtnPrimary';
import {Link, router} from 'expo-router';
import ErrorAlert from '../../components/ErrorAlert';
import icons from '../../constants/icons';
import { VIDVIBE_API_ORIGIN } from '@env'

export default function Signup() {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSignup = async () => {
        try {
            setIsSubmitting(true);
            if (!formData.fName || !formData.email || !formData.password) {
                setError('Please fill all the required fields.');
            } else {
                const response = await fetch(`${VIDVIBE_API_ORIGIN}/api/auth/signup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        fName: formData.fName,
                        lName: formData.lName,
                        email: formData.email,
                        password: formData.password,
                    })
                })
                const result:responseType = await response.json();

                if(!result.success) {
                    setError(result.message);
                } else {
                setFormData({
                    fName: "",
                    lName: "",
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
        <SafeAreaView className='flex-1'>
            <ScrollView contentContainerClassName='px-8 py-5 min-h-full justify-center'>
                <Text className='sub-heading'>Get Started,</Text>
                <Text className='heading-1 text-primary'>Sign Up</Text>
                <FormInput
                    keyboardType='default'
                    value={formData.fName}
                    handleChangeText={(e) => setFormData({ ...formData, fName: e })}
                    label='Enter your First Name'
                />
                <FormInput
                    keyboardType='default'
                    value={formData.lName}
                    handleChangeText={(e) => setFormData({ ...formData, lName: e })}
                    label='Enter your Last Name (Optional)'
                />
                <FormInput
                    keyboardType='email-address'
                    value={formData.email}
                    handleChangeText={(e) => setFormData({ ...formData, email: e })}
                    label='Enter your Email'
                />
                <FormInput
                    keyboardType='default'
                    isPassword={true}
                    value={formData.password}
                    handleChangeText={(e) => setFormData({ ...formData, password: e })}
                    label='Enter your Password'
                />
                <View className='informative flex-row items-start mt-3 gap-1 pr-6 bg-informative-bg py-2 pl-0.5 rounded-lg space-x-3 text-wrap'>
                    <Image source={icons.error} className='size-6' tintColor='#ff8800' />
                    <Text className='paragraph text-informative'>Please enter a strong password that is at least 8 characters long and includes a lowercase character, an uppercase character, a number, and a special character.</Text>
                </View>
                <BtnPrimary
                    label='Sign Up'
                    loadingText='Signing Up'
                    isLoading={isSubmitting}
                    onPress={handleSignup}
                />
                <Text className='text-center my-4'>OR</Text>
                <View className='flex flex-row justify-center items-center'>
                    <Text className='mr-1'>Already have an account?</Text>
                    <Link href='/login' className='link'>Log In</Link>
                </View>
            </ScrollView>
            <ErrorAlert message={error} showAlert={error} setShowAlert={setError} />
        </SafeAreaView>
    );
}