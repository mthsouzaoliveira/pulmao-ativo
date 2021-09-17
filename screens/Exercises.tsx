import * as React from 'react';
import { useState } from 'react';
import {
  FlatList, StyleSheet, Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import Card from '../components/Card';
import Profile from '../components/Profile';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Exercises({ navigation }: RootTabScreenProps<'Exercises'>) {
  const [state, setSate] = useState(
    {
      niveis: [
        {
          title: 'Nível 1',
          exercises: [
            {
              id: 85,
              name: 'Exercicio para ombro, costas e biceps e etc e mais testeee',
              img: 'https://physiotherapy-backend-ysuax.ondigitalocean.app/api/img/exercicio1-exercise-img613902ca2fed1.jpg',
              youtube: 'aCziptmEyL8',
              treatmentLevel: 't1',
              stepbysteps: [
                {
                  id: 130,
                  exercise_id: 86,
                  order: '1',
                  descStep: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                  imgStep: 'https://physiotherapy-backend-ysuax.ondigitalocean.app/api/img/passo1-desc-descstep-img613902ccdead7.jpg?w=240&h=240',
                  title: 'Passo 1',
                },
                {
                  id: 131,
                  exercise_id: 86,
                  order: '2',
                  descStep: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                  imgStep: 'https://physiotherapy-backend-ysuax.ondigitalocean.app/api/img/passo2-desc-descstep-img613902cd1d48c.jpg?w=240&h=240',
                  title: 'Passo 2',
                },
              ],
            },
            {
              id: 86,
              name: 'Exercicio para ombro, costas e biceps e etc e mais testeee',
              img: 'https://physiotherapy-backend-ysuax.ondigitalocean.app/api/img/exercicio1-exercise-img613902ca2fed1.jpg',
              youtube: 'aCziptmEyL8',
              treatmentLevel: 't1',
              stepbysteps: [
                {
                  id: 140,
                  exercise_id: 86,
                  order: '1',
                  descStep: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                  imgStep: 'https://physiotherapy-backend-ysuax.ondigitalocean.app/api/img/passo1-desc-descstep-img613902ccdead7.jpg?w=240&h=240',
                  title: 'Passo 1',
                },
                {
                  id: 141,
                  exercise_id: 86,
                  order: '2',
                  descStep: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                  imgStep: 'https://physiotherapy-backend-ysuax.ondigitalocean.app/api/img/passo2-desc-descstep-img613902cd1d48c.jpg?w=240&h=240',
                  title: 'Passo 2',
                },
              ],
            },
            {
              id: 92,
              name: 'Exercicio para ombro, costas e biceps e etc e mais testeee',
              img: 'https://physiotherapy-backend-ysuax.ondigitalocean.app/api/img/qw-exercise-img6139132514026.jpg',
              youtube: 'aCziptmEyL8',
              treatmentLevel: 't1',
              stepbysteps: [
                {
                  id: 148,
                  exercise_id: 92,
                  order: '1',
                  descStep: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  imgStep: 'https://physiotherapy-backend-ysuax.ondigitalocean.app/api/img/lorem-ipsu-descstep-img613913260f1f5.jpg?w=240&h=240',
                  title: 'Passo 1',
                },
                {
                  id: 149,
                  exercise_id: 92,
                  order: '2',
                  descStep: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  imgStep: 'https://physiotherapy-backend-ysuax.ondigitalocean.app/api/img/lorem-ipsu-descstep-img613915a08bd32.jpg?w=240&h=240',
                  title: 'Passo 2',
                },
              ],
            },
          ],
        },
      ],
    },
  );

  function handleExerciseSelect(item, title) {
    navigation.navigate('Exercise', { item, title });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={{ padding: 10, ...styles.bgTransparent }}>
        <View style={styles.bgTransparent}>
          <Text>
            <Profile />
          </Text>
          <Text style={styles.subtitle}>
            Verifique as suas atividades
          </Text>
        </View>

        <View style={{ marginTop: 20, marginBottom: 20, ...styles.bgTransparent }}>
          <Text style={{ fontSize: 26 }}>
            Para melhores resultados nos exercícios, siga corretamente por cada nível.
          </Text>
        </View>
      </View>

      { state.niveis && state.niveis.map((nivel, index) => (
        <View key={index} style={styles.list}>
          <Text style={styles.titleList}>
            {nivel.title}
          </Text>
          <FlatList
            data={nivel.exercises}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            numColumns={1}
            renderItem={({ item }) => (
              <Card
                onPress={() => handleExerciseSelect(item, nivel.title)}
                item={item}
              />
            )}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    padding: 10,
  },

  subtitle: {
    fontSize: 32,
    backgroundColor: 'transparent',
  },

  list: {
    height: 300,
    backgroundColor: 'transparent',
  },

  titleList: {
    padding: 10,
    fontSize: 22,
    fontWeight: '700',
  },

  item: {
    width: 200,
    margin: 5,
    borderRadius: 15,
    backgroundColor: 'transparent',
  },

  thumb: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },

  bgTransparent: {
    backgroundColor: 'transparent',
  },

  text: {
    color: '#333333',
  },
});
