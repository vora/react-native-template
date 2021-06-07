import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export const App: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>React Native Starter Kit</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 28,
    fontWeight: 'bold',
  },
});
