// sections/PythonSection.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export function PythonSection({
  userId,
  setUserId,
  linesJson,
  priceStr
}) {

  const handleStartPython = async () => {
    console.log("Will POST to /start_python_process with:", {
    userId,
    lines_json_str: linesJson,
    priceStr
  });
  
    try {
      const response = await fetch('http://82.64.55.60:3000/start_python_process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          lines_json_str: linesJson,
          priceStr
        }),
      });
      const data = await response.json();
      console.log('start_python_process =>', data);
    } catch (err) {
      console.error('Erreur handleStartPython:', err);
    }
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>5. Lancer le script Python</Text>
      <TouchableOpacity style={styles.button} onPress={handleStartPython}>
        <Text style={styles.buttonText}>Exécuter le script Python</Text>
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
  label: { fontWeight:'bold', marginTop:8, marginBottom:4 },
  input: { borderWidth:1, borderColor:'#bbb', padding:8, borderRadius:4, backgroundColor:'#fff' },
  button: { backgroundColor:'#2e86de', borderRadius:5, padding:10, marginVertical:5, alignItems:'center' },
  buttonText: { color:'#fff' }
});
