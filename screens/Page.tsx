import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';

export default function Page({ route }) {
  const { title } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.about}> Saiba mais sobre</Text>
        </View>
        <View>
          <Text style={styles.title}>
            {' '}
            {title}
            {' '}
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
        Praesent dignissim ac diam sit amet suscipit. Morbi sagittis at est id imperdiet.
        Duis elementum pharetra elementum. Mauris accumsan pharetra dui, at dictum sem.
        Cras nec felis lectus.        Texto lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
        Praesent dignissim ac diam sit amet suscipit. Morbi sagittis at est id imperdiet.
        Duis elementum pharetra elementum. Mauris accumsan pharetra dui, at dictum sem.
        Cras nec felis lectus.        Texto lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
        Praesent dignissim ac diam sit amet suscipit. Morbi sagittis at est id imperdiet.
        Duis elementum pharetra elementum. Mauris accumsan pharetra dui, at dictum sem.
        Cras nec felis lectus.        Texto lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
        Praesent dignissim ac diam sit amet suscipit. Morbi sagittis at est id imperdiet.
        Duis elementum pharetra elementum. Mauris accumsan pharetra dui, at dictum sem.
        Cras nec felis lectus.        Texto lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
        Praesent dignissim ac diam sit amet suscipit. Morbi sagittis at est id imperdiet.
        Duis elementum pharetra elementum. Mauris accumsan pharetra dui, at dictum sem.
        Cras nec felis lectus.        Texto lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
        Praesent dignissim ac diam sit amet suscipit. Morbi sagittis at est id imperdiet.
        Duis elementum pharetra elementum. Mauris accumsan pharetra dui, at dictum sem.
        Cras nec felis lectus.        Texto lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
        Praesent dignissim ac diam sit amet suscipit. Morbi sagittis at est id imperdiet.
        Duis elementum pharetra elementum. Mauris accumsan pharetra dui, at dictum sem.
        Cras nec felis lectus.        Texto lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
        Praesent dignissim ac diam sit amet suscipit. Morbi sagittis at est id imperdiet.
        Duis elementum pharetra elementum. Mauris accumsan pharetra dui, at dictum sem.
        Cras nec felis lectus.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 20,
  },
  about: {
    fontSize: 26,
    paddingLeft: 20,
  },
  title: {
    lineHeight: 36,
    fontSize: 26,
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  text: {
    padding: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
