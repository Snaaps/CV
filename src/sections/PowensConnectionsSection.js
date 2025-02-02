// sections/PowensConnectionsSection.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';


export function PowensConnectionsSection({ powensToken }) {

  const openPowensConnectWebview = async () => {
    if (!powensToken) {
      console.warn("Pas de token => impossible d'ouvrir la webview connect");
      return;
    }
    try {
      const codeResp = await fetch(
        'https://infinite-sandbox.biapi.pro/2.0/auth/token/code?type=singleAccess',
        { headers: { Authorization: `Bearer ${powensToken}` } }
      );
      if (!codeResp.ok) throw new Error('Erreur récupération code webview');
      const { code } = await codeResp.json();

      const connectUrl =
        'https://webview.powens.com/fr/connect' +
        '?domain=infinite-sandbox.biapi.pro' +
        `&client_id=82059527` +
        `&code=${encodeURIComponent(code)}` +
        `&redirect_uri=${encodeURIComponent('http://localhost:3000/powens/callback')}`;

      await WebBrowser.openBrowserAsync(connectUrl);
    } catch (err) {
      console.error('Erreur openPowensConnectWebview:', err);
    }
  };

  const openPowensManageWebview = async () => {
    if (!powensToken) return;
    try {
      const codeResp = await fetch(
        'https://infinite-sandbox.biapi.pro/2.0/auth/token/code?type=singleAccess',
        { headers: { Authorization: `Bearer ${powensToken}` } }
      );
      if (!codeResp.ok) throw new Error('Erreur récupération code manage');
      const { code } = await codeResp.json();

      const manageUrl =
        'https://webview.powens.com/fr/manage' +
        '?domain=infinite-sandbox.biapi.pro' +
        `&client_id=82059527` +
        `&code=${encodeURIComponent(code)}` +
        `&redirect_uri=${encodeURIComponent('http://localhost:3000/powens/callback')}`;

      await WebBrowser.openBrowserAsync(manageUrl);
    } catch (err) {
      console.error('Erreur openPowensManageWebview:', err);
    }
  };

  if (!powensToken) {
    return null; // Si pas de token, on n'affiche rien
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>3. Connexions bancaires</Text>
      <Text style={styles.paragraph}>
        Ajoutez une connexion (“connect”) puis activez un compte (“manage”) pour récupérer des transactions.
      </Text>
      <TouchableOpacity style={styles.button} onPress={openPowensConnectWebview}>
        <Text style={styles.buttonText}>Ajouter une connexion (Webview Connect)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openPowensManageWebview}>
        <Text style={styles.buttonText}>Gérer les comptes (Webview Manage)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff', marginVertical: 10, padding: 15, borderRadius: 8,
    shadowColor: '#000', shadowOffset: { width:0, height:2 }, shadowOpacity: 0.1, elevation:2
  },
  sectionTitle: { fontSize:16, fontWeight:'600', marginBottom:6 },
  paragraph: { fontSize:14, marginBottom:10, color:'#333' },
  button: { backgroundColor:'#2e86de', borderRadius:5, padding:10, marginVertical:5, alignItems:'center' },
  buttonText: { color:'#fff' }
});
