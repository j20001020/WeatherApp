import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { theme } from '../theme/theme';

import SearchSection from '../components/SearchSection';
import ForecastSection from '../components/ForecastSection';
import WeekForecastSection from '../components/WeekForecastSection';

export default function HomeScreen() {

    return (
        <View className='flex-1 relative'>
            <StatusBar barStyle={'light-content'} />
            <Image
                source={require('../assets/images/bg.png')}
                className='absolute h-full w-full'
                blurRadius={70}
            />
            <SafeAreaView className='flex flex-1'>
                {/* search section */}
                <SearchSection />
                {/* forecast section */}
                <ForecastSection />
                {/* forecast for a week */}
                <WeekForecastSection />
            </SafeAreaView>
        </View>
    );
}