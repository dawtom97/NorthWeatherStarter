import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from './src/constants/styles';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
      }}>
      <Icon name="polymer" size={45} color={COLORS.primary} />
      <Text style={{color: COLORS.primary}}>NORTH WEATHER</Text>
    </View>
  );
};

export default App;
