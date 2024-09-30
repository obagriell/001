import React from 'react';
import { View, Text, Image, Button, Linking, StyleSheet } from 'react-native';

const App = () => {
  const openGitHub = () => {
    Linking.openURL('https://github.com/seu-repositorio');
  };

  return (
    <View style={styles.container}>
       <Image
        source={{ uri: 'https://i.pinimg.com/550x/ab/40/50/ab4050989f2f49f42d460bc0fb8c1a77.jpg' }}
        style={styles.image}
        resizeMode="contain" 
      />
      <Text style={styles.text}>
        chupa corinthians
      </Text>
      <Button title="Ver Imagens no GitHub" onPress={openGitHub} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
   image: {
    width: '100%', // Mude para 100% da largura do container
    height: undefined, // Mantenha a altura indefinida
    aspectRatio: 1, // Use a proporção para garantir que a imagem mantenha suas proporções
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    
  },
});

export default App;

