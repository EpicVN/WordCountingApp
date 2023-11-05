import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ArrowLongRightIcon } from 'react-native-heroicons/outline'

const WordInput = ({ onTextChange, onCountPress }) => {
  const [text, setText] = useState('');

  return (
    <View className='mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]'>
        <TextInput
            placeholder='Enter your text'
            onChangeText={(newText) => {
            setText(newText);
            onTextChange(newText);
            }}
            placeholderTextColor={'gray'}
            style={{fontSize: hp(1.7)}}
            className='flex-1 text-base mb-1 pl-3 tracking-wider'
        />

        <TouchableOpacity onPress={onCountPress} className='bg-white rounded-full p-3'>
            <ArrowLongRightIcon size={hp(2.5)} strokeWidth={3} color='gray' />
        </TouchableOpacity>
    </View>
    
  );
};

export default WordInput;
