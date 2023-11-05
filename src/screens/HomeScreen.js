import { View, Text, ScrollView, Image, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BellIcon } from 'react-native-heroicons/outline'
import Animated, { FadeInDown } from 'react-native-reanimated';
import WordCount from '../components/WordCount';
import WordInput from '../components/WordInput';

export default function HomeScreen() {
  const [inputText, setInputText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const countWordsAndChars = () => {
    const words = inputText.split(/\s+/);
    setWordCount(words.length);
    setCharCount(inputText.length);
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style='dark' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className='space-y-6 pt-14'
      >
        {/*Avatar and info icon*/}
        <View className='mx-4 flex-row justify-between items-center mb-2'>
          <Image source={require('../../assets/images/avatar.jpg')} style={{height: hp(5.5), width: hp(5.5)}}/>
          <BellIcon size={hp(4)} color="gray" />
        </View>

        {/*Title*/}
        <Animated.View entering={FadeInDown.delay(400).duration(700).springify().damping(12)} className="mx-4 space-y-2 mb-2">
          <Text style={{fontSize: hp(1.7)}} className='text-neutral-600'>Hello, User!</Text>
          <View>
            <Text style={{fontSize: hp(3.8)}} className='font-semibold text-neutral-600'>Type your text,</Text>
          </View>
          <Text style={{fontSize: hp(3.8)}} className='font-semibold text-neutral-600'>
            count the <Text className='text-amber-400'>word</Text>
          </Text>
        </Animated.View>

        {/*count word*/}
        <Animated.View entering={FadeInDown.delay(400).duration(700).springify().damping(12)} className='flex-1 justify-center items-center'>
          <WordInput onTextChange={setInputText} onCountPress={countWordsAndChars} />
          <WordCount wordCount={wordCount} charCount={charCount}/>
        </Animated.View>
        
      </ScrollView>
    </View>
  )
}