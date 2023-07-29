import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { CalendarDaysIcon } from 'react-native-heroicons/solid';

import NextDayForecast from '../components/NextDayForecast';

export default function WeekForecastSection() {
    return (
        <View className=' mb-2 space-y-3'>
            <View className='flex-row items-center mx-5 space-x-2'>
                <CalendarDaysIcon size={22} color='white' />
                <Text className=' text-white text-base'>Daily forecast</Text>
            </View>
            <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 15 }}
                showsHorizontalScrollIndicator={false}
            >
                <NextDayForecast day='Monday' degree={23} />
                <NextDayForecast day='Tuesday' degree={25} />
                <NextDayForecast day='Wednesday' degree={26} />
                <NextDayForecast day='Thursday' degree={24} />
                <NextDayForecast day='Friday' degree={23} />
                <NextDayForecast day='Saturday' degree={23} />
                <NextDayForecast day='Sunday' degree={24} />
            </ScrollView>
        </View>
    );
}