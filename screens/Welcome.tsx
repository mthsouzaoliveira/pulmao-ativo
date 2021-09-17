import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import {
  Dimensions, SafeAreaView, TouchableOpacity, StyleSheet, Image,
} from 'react-native';

import main from '../assets/images/main.png';
import { View, Text } from '../components/Themed';
import Colors from '../constants/Colors';
import AuthContext from '../contexts/auth';
import userState from '../hooks/userState';

export default function Welcome() {
  const { signed, name } = useContext(AuthContext);
  const navigation = useNavigation();

  function handleStart() {
    if (signed) {
      return navigation.navigate('Root');
    }

    return navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <View>
            {!signed ? (<Text style={styles.title}>Bem-vindo ao</Text>)
              : (<Text style={styles.title}>Bem-vindo de volta ao</Text>)}

          </View>
          <View>
            {!signed ? (
              <Text style={styles.titleBold}>
                Pulmão Ativo
              </Text>
            )
              : (
                <Text style={styles.titleBold}>
                  Pulmão Ativo,
                  {' '}
                  {name}
                </Text>
              )}
          </View>
        </View>

        <Image
          source={main}
          style={styles.image}
          resizeMode="contain"
        />

        {!signed ? (
          <Text style={styles.subtitle}>
            Um guia completo para Reabilitação Cardiopulmonar
          </Text>
        ) : (
          <Text style={styles.subtitle}>
            Vamos dar continuidade aos seus exercícios!!!
          </Text>
        )}

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Feather
            name="chevron-right"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    lineHeight: 34,
  },
  titleBold: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 34,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 26,
    color: '#828282',
    paddingHorizontal: 20,
    lineHeight: 38,
    width: '80%',
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  button: {
    backgroundColor: Colors.light.tint,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    fontSize: 32,
    color: '#fff',
  },
});
