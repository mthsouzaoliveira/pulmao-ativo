import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

import Colors from '../constants/Colors';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <Text style={styles.text}>
        { title }
      </Text>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: Colors.light.text,
  },
});
