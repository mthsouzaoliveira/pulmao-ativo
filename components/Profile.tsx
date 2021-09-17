import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import Colors from '../constants/Colors';
import userState from '../hooks/userState';
import { Text } from './Themed';

export default function Profile() {
  const userName = userState();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>
          Olá,
          <Text style={styles.userName}>
            {userName}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight() + 20,
  },
  greeting: {
    fontSize: 36,
    color: Colors.light.text,
  },
  userName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.light.text,
    lineHeight: 40,
  },
});
