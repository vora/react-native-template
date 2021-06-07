// Sample Component
// Delete this component if you do not need i
import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
  label: string;
}

export const Header: React.FC<Props> = ({ label }) => {
  return <Text style={styles.text}>{label}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 32,
  },
});
