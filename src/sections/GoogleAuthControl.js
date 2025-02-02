// components/GoogleAuthControl.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';


export function GoogleAuthControl({ googleToken, setGoogleToken, setUserId }) {
  const handleGoogleLogin = async () => {
    try {
      // Lance le flow OAuth Google côté serveur
      const result = await WebBrowser.openBrowserAsync('https://mon-serveur-node-143630968799.europe-west1.run.app/auth/google');
      // Lorsque l'utilisateur termine l'authentification, le serveur redirige vers une URL de deep linking (ex: myapp://callback?userId=xxx)
      if (result.type === 'success' && result.url) {
        // Extraire les query parameters de l'URL
        const parsed = Linking.parse(result.url);
        if (parsed.queryParams && parsed.queryParams.userId) {
          // Mettre à jour automatiquement le userId dans l'état
          setUserId(parsed.queryParams.userId);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGoogleLogout = async () => {
    try {
      await WebBrowser.openBrowserAsync('https://mon-serveur-node-143630968799.europe-west1.run.app/auth/logout');
      setGoogleToken(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      {googleToken ? (
        <>
          <Text style={styles.infoText}>Connecté à Google</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#c0392b' }]}
            onPress={handleGoogleLogout}
          >
            <Text style={styles.buttonText}>Se déconnecter de Google</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
          <Text style={styles.buttonText}>Se connecter via Google</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  infoText: {
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2e86de',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginVertical: 5,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
  },
});
