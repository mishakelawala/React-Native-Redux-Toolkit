import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectCount } from '../store/counterSlice';

export default function ReduxDemo() {
    const count = useSelector(selectCount) 
    const dispatch = useDispatch(); 
    return (
        <View style={{ flex: 1 }}>
            <Text>Counter Value = {count}</Text>
            <TouchableOpacity style={{ backgroundColor: 'pink', marginTop: 20 }} onPress={() => dispatch(increment())} >
                <Text style={{ padding: 10, textAlign: 'center' }}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'pink', marginTop: 20 }} onPress={() => dispatch(decrement())} >
                <Text style={{ padding: 10, textAlign: 'center' }}>Decrement</Text>
            </TouchableOpacity>
        </View>
    );
}



