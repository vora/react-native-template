import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export const AboutScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>About Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 28,
    fontWeight: 'bold',
  },
});
