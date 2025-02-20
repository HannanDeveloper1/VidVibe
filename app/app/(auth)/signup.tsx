import { Alert, Image, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormInput from '../../components/FormInput';
import BtnPrimary from '../../components/BtnPrimary';
import { Link } from 'expo-router';
import ErrorAlert from '../../components/ErrorAlert';
import { StatusBar } from 'expo-status-bar';
import icons from '../../constants/icons';

export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    return (
        <SafeAreaView className='flex-1'>
            <ScrollView contentContainerClassName='px-8 py-5 min-h-full justify-center'>
                <Text className='sub-heading'>Get Started,</Text>
                <Text className='heading-1 text-primary'>Sign Up</Text>
                <FormInput
                    keyboardType='default'
                    value={formData.name}
                    handleChangeText={(e) => setFormData({ ...formData, name: e })}
                    label='Enter your Full Name'
                />
                <FormInput
                    keyboardType='default'
                    value={formData.username}
                    handleChangeText={(e) => setFormData({ ...formData, username: e })}
                    label='Enter your Username'
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
                    isLoading={error !== ""}
                    onPress={() => setError('The Server is not running or incorrect API')}
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