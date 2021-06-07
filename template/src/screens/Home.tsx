import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { NavigationProp } from '../model/Navigation';

interface Props {
  navigation: NavigationProp;
}

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('About');
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header label="React Native Starter Kit" />
        <Text style={styles.text}>Home Screen</Text>
        <Button onPress={handlePress}>Go to About Screen</Button>
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
