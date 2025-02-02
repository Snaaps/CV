// sections/PowensTransactionsSection.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { PowensTransaction } from '../powens'; // ou recréez une interface locale
import { setParams } from 'expo-router/build/global-state/routing';


export function PowensTransactionsSection({
  powensToken,
  transactions,
  setTransactions,
  selectedTransactionId,
  setSelectedTransactionId,
  linesJson,
  setLinesJson,
  priceStr,
  setPriceStr,
  showDropdown,
  setShowDropdown
}) {

  const handleLoadTransactions = async () => {
    if (!powensToken) {
      console.warn("Pas de token => impossible de charger les transactions");
      return;
    }
    try {
      const resp = await fetch(
        'https://infinite-sandbox.biapi.pro/2.0/users/me/transactions?limit=50',
        { headers: { Authorization: `Bearer ${powensToken}` } }
      );
      if (!resp.ok) {
        throw new Error(`Erreur HTTP transactions: ${resp.status}`);
      }
      const data = await resp.json();
      const arrTx = data.transactions || [];
      const newTxs = arrTx.map(tx => ({
        id: String(tx.id),
        date: tx.date || tx.application_date || '',
        description: tx.wording || tx.simplified_wording || 'N/A',
        amount: tx.value || 0
      }));
      setTransactions(newTxs);
      console.log("setTransactions : "+JSON.stringify(transactions))
      // Montre le second dropdown
      setShowDropdown(true);
    } catch (err) {
      console.error('Erreur load transactions:', err);
    }
  };

  const handleUseTransaction = () => {
    if (!selectedTransactionId) return;
    const tx = transactions.find(t => t.id === selectedTransactionId);
    if (!tx) return;

    // Convert "YYYY-MM-DD" => "DD/MM/YYYY"
    const isoDate = tx.date;
    let dateFr = isoDate;
    if (isoDate.includes('-')) {
      const [y, m, d] = isoDate.split('-');
      dateFr = `${d}/${m}/${y}`;
    }

    const arr = [[dateFr, tx.description, String(tx.amount)]];
    setLinesJson(JSON.stringify(tx));
    setPriceStr(JSON.stringify(tx.amount));
    console.log("lineJson : "+JSON.stringify(linesJson))
    setShowDropdown(false);
  };

  if (!powensToken) {
    return null; // On n'affiche rien si pas de token
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>4. Transactions</Text>
      <TouchableOpacity style={styles.button} onPress={handleLoadTransactions}>
        <Text style={styles.buttonText}>Charger les transactions</Text>
      </TouchableOpacity>

      {transactions.length > 0 && (
        <View style={styles.pickerContainer}>
          <Text style={styles.paragraph}>Sélectionner une transaction :</Text>
          <Picker
            selectedValue={selectedTransactionId || ''}
            onValueChange={(val) => val ? setSelectedTransactionId(val) : undefined}
            style={styles.picker}
          >
            <Picker.Item label="-- Sélectionnez une transaction --" value="" />
            {transactions.map((tx) => (
              <Picker.Item
                key={tx.id}
                label={`${tx.date} - ${tx.description} (${tx.amount})`}
                value={tx.id}
              />
            ))}
          </Picker>

          <TouchableOpacity
            style={[styles.button, { marginTop: 10 }]}
            onPress={handleUseTransaction}
            disabled={!selectedTransactionId}
          >
            <Text style={styles.buttonText}>Utiliser la transaction</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Ancien dropdown conditionnel */}
      {showDropdown && transactions.length > 0 && (
        <View style={styles.oldDropdown}>
          <Text style={styles.oldDropdownLabel}>
            (Picker supplémentaire, affichage conditionnel)
          </Text>
          <Picker
            selectedValue={selectedTransactionId || ''}
            onValueChange={(val) => val ? setSelectedTransactionId(val) : undefined}
            style={styles.picker}
          >
            <Picker.Item label="-- Sélectionnez une transaction --" value="" />
            {transactions.map((tx) => (
              <Picker.Item
                key={tx.id}
                label={`${tx.date} - ${tx.description} (${tx.amount}€)`}
                value={tx.id}
              />
            ))}
          </Picker>
          <TouchableOpacity
            style={[styles.button, { marginTop: 5 }]}
            onPress={handleUseTransaction}
            disabled={!selectedTransactionId}
          >
            <Text style={styles.buttonText}>Utiliser cette transaction</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* lines_json_str peut être géré ici ou plus haut */}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff', marginVertical: 10, padding: 15, borderRadius: 8,
    shadowColor: '#000', shadowOffset: { width:0, height:2 }, shadowOpacity:0.1, elevation:2
  },
  sectionTitle: { fontSize:16, fontWeight:'600', marginBottom:6 },
  paragraph: { fontSize:14, marginBottom:10, color:'#333' },
  button: { backgroundColor:'#2e86de', borderRadius:5, padding:10, marginVertical:5, alignItems:'center' },
  buttonText: { color:'#fff' },
  pickerContainer: { marginVertical:10 },
  picker: { backgroundColor:'#eee', marginVertical:5 },
  oldDropdown: { marginTop:10, padding:10, backgroundColor:'#f2f2f2' },
  oldDropdownLabel: { fontSize:12, marginBottom:5, color:'#999' }
});
