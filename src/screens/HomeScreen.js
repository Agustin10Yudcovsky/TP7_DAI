import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ route }) => {
  const { name, lastname } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido {name} {lastname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
  },
});

export default HomeScreen;
