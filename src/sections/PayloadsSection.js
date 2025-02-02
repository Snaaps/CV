// sections/PayloadsSection.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button
} from 'react-native';
import { PythonPayloadItem } from '../powens';


export function PayloadsSection({ payloads, clearPayloads }) {
  // États pour la modal
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');  

  const openModal = () => {
    setModalTitle(title);
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent('');
    setModalTitle('');
  };

  return (
    <View style={styles.section}>
      <View style={styles.logsHeader}>
        <Text style={styles.logsTitle}>Payload(s) final(aux) :</Text>
        <TouchableOpacity style={styles.smallButton} onPress={clearPayloads}>
          <Text style={styles.smallButtonText}>Clear payloads</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.logsContainer}>
        {payloads.length > 0 ? (
          payloads.map((item, index) => {
            const { transaction, best_email } = item;
            return (
              <View key={index} style={styles.payloadBlock}>
                <Text style={styles.payloadTitle}>Transaction #{index + 1}</Text>
                <View style={{ marginLeft: 10 }}>
                  <Text>Date : {transaction?.date || 'N/A'}</Text>
                  <Text>Montant : {transaction?.montant || 'N/A'}</Text>
                  <Text>Libellé : {transaction?.libelle || 'N/A'}</Text>
                  <Text>Ligne brute : {transaction?.raw_line || 'N/A'}</Text>
                </View>

                <Text style={[styles.payloadTitle, { marginTop: 5 }]}>Email associé</Text>
                <View style={{ marginLeft: 10 }}>
                  <Text>Sujet : {best_email?.subject || 'N/A'}</Text>
                  <Text>
                    Score :{' '}
                    {best_email?.score !== undefined
                      ? best_email.score.toFixed(2)
                      : 'N/A'}
                  </Text>
                  <Text>Amount dans le mail : {best_email?.amount || 'N/A'}</Text>
                  <Text>Expéditeur : {best_email?.from || 'N/A'}</Text>
                  <Text>Date : {best_email?.date || 'N/A'}</Text>
                  <View style={styles.buttonRow}>
                    {best_email?.body ? (
                      <TouchableOpacity
                        style={styles.viewButton}
                        onPress={() => openModal("Corps complet", best_email.body)}
                      >
                        <Text style={styles.viewButtonText}>Voir le corps complet</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text>Corps complet : (aucun contenu)</Text>
                    )}
                    {best_email?.pdf_attachment ? (
                      <TouchableOpacity
                        style={[styles.viewButton, { backgroundColor: '#c0392b' }]}
                        onPress={() =>
                          openModal("Facture PDF", `La facture est disponible dans le fichier : ${best_email.pdf_attachment}`)
                        }
                      >
                        <Text style={styles.viewButtonText}>Voir la facture PDF</Text>
                      </TouchableOpacity>
                    ) : null}
                  </View>
                </View>

                <View style={styles.separator} />
              </View>
            );
          })
        ) : (
          <Text style={{ fontStyle: 'italic' }}>
            Aucun payload pour le moment.
          </Text>
        )}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{modalTitle}</Text>
          <ScrollView style={styles.modalContent}>
            <Text style={styles.modalText}>{modalContent}</Text>
          </ScrollView>
          <Button title="Fermer" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2
  },
  logsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 },
  logsTitle: { fontWeight: '600', fontSize: 15 },
  smallButton: { backgroundColor: '#777', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 4 },
  smallButtonText: { color: '#fff', fontSize: 12 },
  logsContainer: {
    maxHeight: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 5,
    marginBottom: 10,
    borderRadius: 4
  },
  payloadBlock: { marginBottom: 15 },
  payloadTitle: { fontWeight: 'bold', marginVertical: 3 },
  separator: { height: 1, backgroundColor: '#ccc', marginVertical: 10 },
  buttonRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  viewButton: {
    backgroundColor: '#2e86de',
    borderRadius: 5,
    padding: 8,
    marginRight: 10
  },
  viewButtonText: { color: '#fff', fontSize: 14 },
  modalContainer: { flex: 1, padding: 20, backgroundColor: '#fff' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  modalContent: { flex: 1, marginBottom: 20 },
  modalText: { fontSize: 14, color: '#333' }
});
