// sections/PowensUserSection.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export function PowensUserSection({
  powensToken,
  setPowensToken
}) {

  const handleGetPowensToken = async () => {
    try {
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
    } catch (err) {
      console.error('Erreur init user Powens:', err);
    }
  };

  // On peut conditionner si on veut éviter de recréer un user Powens
  // si on a déjà un token :
  if (powensToken) {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Utilisateur Powens déjà créé</Text>
        <Text style={styles.info}>
          Token: {powensToken.slice(0, 15)}...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>2. Utilisateur Powens</Text>
      <Text style={styles.paragraph}>
        Créer un utilisateur (token) pour relier des banques et accéder à leurs données.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGetPowensToken}>
        <Text style={styles.buttonText}>Créer un user Powens & Obtenir le Token</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff', marginVertical: 10, padding: 15, borderRadius: 8,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, elevation: 2
  },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
  paragraph: { fontSize: 14, marginBottom: 10, color: '#333' },
  button: { backgroundColor: '#2e86de', borderRadius: 5, padding: 10, marginVertical: 5, alignItems:'center' },
  buttonText: { color: '#fff' },
  info: { marginTop:5, fontStyle:'italic', color:'#555' }
});
