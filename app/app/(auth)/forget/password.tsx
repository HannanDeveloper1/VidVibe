import {Image, ScrollView, Text, View} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import FormInput from "../../../components/FormInput";
import BtnPrimary from "../../../components/BtnPrimary";
import {Link} from "expo-router";
import ErrorAlert from "../../../components/ErrorAlert";
import icons from "../../../constants/icons";

export default function ForgetPassword() {
    const [formData, setFormData] = useState({
        email: "",
    })
    const [error, setError] = useState('');
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
                <BtnPrimary label={'Send Link'} loadingText={'Sending'} onPress={() => setError('The Server is not running or invalid API call!')} isLoading={error !== ""}/>
                <Text className="text-center my-4">OR</Text>
                <View className='flex flex-row justify-center items-center'>
                    <Text className='mr-1'>Remember your Password?</Text>
                    <Link href={'/logn'} className='link'>Log In</Link>
                </View>
            </ScrollView>
            <ErrorAlert message={error} showAlert={error} setShowAlert={setError} />
        </SafeAreaView>
    )
}
