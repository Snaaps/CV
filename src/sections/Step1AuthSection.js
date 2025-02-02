// sections/Step1AuthSection.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';


export function Step1AuthSection({
  powensToken,
  setPowensToken
}) {

  // Éventuellement, si vous voulez indiquer un état "en cours"
  const [loading, setLoading] = useState(false);

  const handleAuthAndUserCreation = async () => {
    setLoading(true);
    try {
      // 1) Google OAuth
      //    => vous ouvrez le navigateur pour "https://mon-serveur-node-143630968799.europe-west1.run.app/auth/google"
      //    => après la réussite, vous avez un user "firebase" ou session côté serveur, ...
      await WebBrowser.openBrowserAsync('https://mon-serveur-node-143630968799.europe-west1.run.app/auth/google');
      
      // 2) Création user Powens
      const response = await fetch('https://infinite-sandbox.biapi.pro/2.0/auth/init', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: '82059527',
          client_secret: '4K/jbgW/Y77ml/fdnK98MNWU4wGdl_lz'
        }),
      });
      if (!response.ok) {
        throw new Error(`Erreur création user Powens: code HTTP ${response.status}`);
      }
      const data = await response.json();
      setPowensToken(data.auth_token);
      console.log('Powens token =>', data.auth_token);

    } catch (err) {
      console.error('Erreur handleAuthAndUserCreation:', err);
    } finally {
      setLoading(false);
    }
  };

  // Si on a déjà un token, on affiche juste un message 
  if (powensToken) {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Étape 1 : Authentification déjà effectuée</Text>
        <Text style={styles.info}>
          Powens Token: {powensToken.slice(0,15)}...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Étape 1 : Auth Google + User Powens</Text>
      <Text style={styles.paragraph}>
        Un seul bouton pour lancer Google OAuth puis créer un user Powens.
      </Text>
      <TouchableOpacity 
        style={[styles.button, loading && { opacity:0.6 }]}
        onPress={handleAuthAndUserCreation}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'En cours...' : 'Se connecter Google + Créer user Powens'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor:'#fff', marginVertical:10, padding:15, borderRadius:8,
    shadowColor:'#000', shadowOffset:{ width:0, height:2 }, shadowOpacity:0.1, elevation:2
  },
  sectionTitle: { fontSize:16, fontWeight:'600', marginBottom:6 },
  paragraph: { fontSize:14, marginBottom:10, color:'#333' },
  button: { backgroundColor:'#2e86de', borderRadius:5, padding:10, marginVertical:5, alignItems:'center' },
  buttonText: { color:'#fff' },
  info: { marginTop:8, fontStyle:'italic', color:'#555' }
});
