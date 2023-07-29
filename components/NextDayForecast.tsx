import React from 'react';
import {
    Image,
    Text,
    View,
} from 'react-native';
import { theme } from '../theme/theme';

type Props = {
    day: string;
    degree: number;
}

export default function NextDayForecast(info: Props) {
    return (
        <View
            className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
            style={{ backgroundColor: theme.bgWhite(0.15) }}
        >
            <Image
                source={require('../assets/images/heavyrain.png')}
                className='h-11 w-11'
            />
            <Text className=' text-white'>{info.day}</Text>
            <Text className=' text-white text-xl font-semibold'>
                {info.degree}&#176;
            </Text>
        </View>

    );
}