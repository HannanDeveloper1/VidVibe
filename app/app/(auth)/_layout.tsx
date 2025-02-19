import React from 'react'
import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";

export default function _Layout() {
    return (
        <>
        <Stack screenOptions={{ headerShown: false }}/>
            <StatusBar style={'dark'}/>
        </>
    )
}
