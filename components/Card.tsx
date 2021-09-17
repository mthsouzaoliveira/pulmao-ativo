import React from 'react';
import {
  Image, StyleSheet,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { View, Text } from './Themed';

function Card({ item, ...rest }) {
  const { name, img } = item;
  return (
    <RectButton style={styles.item} {...rest}>
      <Image
        style={styles.thumb}
        source={{
          uri: img,
        }}
      />
      <Text style={styles.title}>
        {name}
      </Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  title: {
    marginLeft: 1,
    fontSize: 18,
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
});

export default Card;
