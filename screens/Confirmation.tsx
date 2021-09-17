import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useContext } from 'react';
import { Alert, Platform, StyleSheet } from 'react-native';

import Button from '../components/Button';
import { Text, View } from '../components/Themed';
import AuthContext from '../contexts/auth';

export default function Confirmation({ route }) {
  const { name } = route.params;

  const navigation = useNavigation();
  const { setSigned, setName } = useContext(AuthContext);

  async function handleConfirmation() {
    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
      setName(name);
      setSigned(true);

      navigation.navigate('Root');
    } catch {
      Alert.alert('Não foi possível salvar o seu nome.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Muito bem.</Text>
      <Text style={styles.title}>Agora vamos começar</Text>
      <View style={styles.footer}>
        <Button
          title="Começar"
          onPress={handleConfirmation}
        />
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 60,
  },
});
