import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Square3Stack3DIcon, ArchiveBoxIcon } from 'react-native-heroicons/solid';
import Animated, { FadeInRight, FadeInLeft, FadeInDown } from 'react-native-reanimated';

const WordCount = ({ wordCount, charCount }) => {
    return (
        <View className="flex-1 bg-white relative">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 30}}
            >
                <Animated.View entering={FadeInDown.delay(400).duration(700).springify().damping(12)} className="flex-row justify-center">
                    <Image 
                        style={{width: wp(100), height: hp(25),borderBottomLeftRadius: 40, borderBottomRightRadius: 40}}
                        source={require('../../assets/images/bear.gif')}
                        className='mt-12'
                    />
                </Animated.View>

                <View className="px-4 flex justify-between space-y-4 pt-8">
                    <View className='flex-row justify-around'>
                        <Animated.View 
                            entering={FadeInRight.delay(400).duration(700).springify().damping(12)} 
                            className='flex rounded-full bg-amber-300 p-2'
                        >
                            <View
                                style={{height: hp(8.5), width: hp(8.5)}}
                                className='bg-white rounded-full flex items-center justify-center'
                            >
                                <Square3Stack3DIcon size={hp(4)} strokeWidth={2.5} color='#525252'/>
                            </View>
                            
                            <View className='flex items-center py-4 space-y-2'>
                                <Text style={{fontSize: hp(2.5)}} className='font-semibold'>Word</Text>
                                <Text style={{fontSize: hp(2.5)}} className='font-medium'>{wordCount}</Text>
                            </View>
                        </Animated.View>

                        <Animated.View 
                            entering={FadeInLeft.delay(400).duration(700).springify().damping(12)} 
                            className='flex rounded-full bg-amber-300 p-2'
                        >
                            <View
                                style={{height: hp(8.5), width: hp(8.5)}}
                                className='bg-white rounded-full flex items-center justify-center'
                            >
                                <ArchiveBoxIcon size={hp(4)} strokeWidth={2.5} color='#525252'/>
                            </View>
                            
                            <View className='flex items-center py-4 space-y-2'>
                                <Text style={{fontSize: hp(2.5)}} className='font-semibold'>Char</Text>
                                <Text style={{fontSize: hp(2.5)}} className='font-medium'>{charCount}</Text>
                            </View>
                        </Animated.View>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default WordCount;
