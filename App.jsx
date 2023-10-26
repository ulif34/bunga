import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Home from './src/components/Home';
import Foto from './src/components/Flower';
import Profile from './src/components/Profile';
import Flower from './src/components/Flower';
const App = () => {
  const [activeMenu, setActiveMenu] = useState('Home');

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: 20,
          borderWidth: 1,
          borderColor: '#bdbdbd',
          paddingVertical: 5,
          paddingHorizontal: 5,
          borderRadius: 9,
          backgroundColor: '#FFFFFF',
          elevation: 2,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Home' ? '#FA8072' : '#FFFFFF',
            elevation: activeMenu == 'Home' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
          }}
          onPress={() => setActiveMenu('Home')}>
          <Text style={{color: activeMenu == 'Home' ? '#FFFFFF' : '#9ea3b0'}}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Flower' ? '#FA8072' : '#FFFFFF',
            elevation: activeMenu == 'Flower' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
          }}
          onPress={() => setActiveMenu('Flower')}>
          <Text style={{color: activeMenu == 'Flower' ? '#FFFFFF' : '#9ea3b0'}}>
            Flower
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Profile' ? '#FA8072' : '#FFFFFF',
            elevation: activeMenu == 'Profile' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
          }}
          onPress={() => setActiveMenu('Profile')}>
          <Text
            style={{color: activeMenu == 'Profile' ? '#FFFFFF' : '#9ea3b0'}}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
      {activeMenu == 'Home' && <Home />}
      {activeMenu == 'Flower' && <Flower />}
      {activeMenu == 'Profile' && <Profile />}
    </View>
  );
};

export default App;
