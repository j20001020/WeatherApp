import React, { useCallback, useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { theme } from '../theme/theme';
import { debounce } from 'lodash';

import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { fetchLoctionInfo, fetchWeatherForecastInfo } from '../services/WeatherService';

export default function SearchSection() {
    const [showSearch, toggleSearch] = useState(false);
    const [locations, setLocations] = useState([]);
    const [weather, setWeather] = useState({});

    const handlerLocation = (loc: string) => {
        setLocations([]);
        toggleSearch(false);

        fetchWeatherForecastInfo(loc, 7).then(data => {
            setWeather(data);
            console.log(data);
        })
    }

    const handleSearch = (city: string) => {
        if (city.length > 2) {
            fetchLoctionInfo(city).then(data => {
                setLocations(data)
            })
        }
    }

    const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

    return (
        <View style={{ height: '7%' }} className='mx-4 relative z-50'>
            <View
                className='mt-4 flex-row justify-end items-center rounded-full'
                style={{ backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent' }}
            >
                {
                    showSearch ? (
                        <TextInput
                            onChangeText={handleTextDebounce}
                            placeholder='Search city'
                            placeholderTextColor={'lightgray'}
                            className='pl-6 h-10 flex-1 text-base text-white'
                        />
                    ) : null
                }
                <TouchableOpacity
                    onPress={() => toggleSearch(!showSearch)}
                    style={{ backgroundColor: theme.bgWhite(0.3) }}
                    className='flex rounded-full p-3 m-1'
                >
                    <MagnifyingGlassIcon size={25} color='white' />
                </TouchableOpacity>
            </View>
            {
                locations.length > 0 && showSearch ? (
                    <View className='absolute w-full bg-gray-300 top-20 rounded-3xl'>
                        {
                            locations.map((loc: any, index) => {
                                let showBorder = index + 1 != locations.length;
                                let borderClass = showBorder ? ' border-b-2 border-b-gray-400' : '';
                                return (
                                    <TouchableOpacity
                                        onPress={() => handlerLocation(loc.name)}
                                        key={index}
                                        className={'flex-row items-center py-3 px-4 mb-1' + borderClass}
                                    >
                                        <MapPinIcon size={20} color='gray' />
                                        <Text className='text-black text-lg ml-2'>{loc?.name}, {loc?.country}</Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
                ) : null
            }
        </View>
    );
}