import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';

import { Text } from '../components/Themed';

export default function Exercise({ route }) {
  const { name, youtube, stepbysteps } = route.params.item;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <YoutubePlayer
          height={250}
          videoId={youtube}
        />
        <View>
          <Text style={styles.title}>
            {name}
          </Text>
        </View>
      </View>

      <Text style={styles.text}>
        Texto lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Morbi porttitor ultrices laoreet. Donec facilisis malesuada massa vitae dignissim.
        Donec sed vulputate purus. Mauris pharetra felis in nulla venenatis, rhoncus
        tincidunt orci eleifend. Nunc porttitor et sem in gravida. Nam est odio,
        ultricies at eros sit amet, eleifend venenatis est.
        Nullam metus lorem, laoreet sed mi eu, iaculis molestie ex.
        Phasellus pellentesque orci at mi euismod fermentum. Duis eget gravida mauris.
        Maecenas sit amet velit in augue interdum blandit eget eu metus.
        Maecenas in imperdiet nibh. Etiam ex justo, pretium quis odio quis,
        viverra finibus tellus. Integer aliquam mi ac ante volutpat sagittis.
        Vivamus faucibus dui in accumsan rhoncus. Vestibulum a gravida augue.
        Nunc vehicula fringilla purus, eu fringilla enim. Duis nunc metus,
        fringilla id finibus nec, dictum ac risus.
      </Text>

      <View>
        {stepbysteps && stepbysteps.map((step) => (
          <View key={step.id} style={{ marginBottom: 25 }}>
            <View style={{ alignItems: 'center' }}>
              <Image
                style={styles.thumb}
                source={{
                  uri: step.imgStep,
                }}
              />
            </View>
            <Text style={styles.stepTitle}>
              {step.title}
            </Text>
            <Text style={styles.stepDesc}>
              {step.descStep}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  thumb: {
    width: 400,
    height: 400,
  },

  title: {
    lineHeight: 36,
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  text: {
    fontSize: 22,
    padding: 20,
    lineHeight: 28,
  },
  stepTitle: {
    fontSize: 28,
    padding: 20,
  },

  stepDesc: {
    fontSize: 22,
    paddingRight: 20,
    paddingLeft: 20,
  },
});
