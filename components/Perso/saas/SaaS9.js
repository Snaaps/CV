// SaaS8.js
import React, { useState } from "react";
import { View, Text, Button, TextInput, ScrollView } from "react-native";
import * as WebBrowser from "expo-web-browser";
import {
  SaaSContainer,
  SaaSTitle,
  SaaSDescription
} from "../styles";

// On importe le hook custom
import { usePythonLogsWS } from "./facture/usePythonLogsWS";

WebBrowser.maybeCompleteAuthSession();

const SaaS8 = () => {
  // --- ÉTAT ---
  const [userId, setUserId] = useState("");
  const [linesJson, setLinesJson] = useState("");

  // --- HOOK usePythonLogsWS ---
  const {
    logs,
    payloads,
    error,
    clearLogs,
    clearPayloads
  } = usePythonLogsWS("ws://82.64.55.60:3000"); // ou ws://10.0.2.2:3000 si Android Emulator

  // --- FONCTIONS ---
  async function handleStartPython() {
    try {
      const response = await fetch("http://82.64.55.60:3000/start_python_process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          lines_json_str: linesJson,
        }),
      });
      const data = await response.json();
      console.log("start_python_process =>", data);
      // logs en direct via WS
    } catch (err) {
      console.error("Erreur handleStartPython:", err);
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await WebBrowser.openBrowserAsync("http://82.64.55.60:3000/auth/google");
    } catch (err) {
      console.error(err);
    }
  };

  // --- RENDER ---
  return (
    <SaaSContainer>
      {/* On peut réutiliser votre structure existante */}
      <SaaSTitle>Google OAuth + Logs Python en temps réel</SaaSTitle>
      <SaaSDescription>
        Ici, nous allons afficher le formulaire pour lancer le script Python
        et la liste des logs en direct via WebSocket.
      </SaaSDescription>

      <View style={{ marginVertical: 10 }}>
        <Button title="Se connecter via Google" onPress={handleGoogleLogin} />
      </View>

      <Text style={{ marginTop: 10, fontWeight: "bold" }}>userId :</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#aaa",
          padding: 8,
          marginVertical: 5
        }}
        value={userId}
        onChangeText={setUserId}
        placeholder="Saisir votre userId fourni par /callback"
      />

      <Text style={{ marginTop: 10, fontWeight: "bold" }}>lines_json_str :</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#aaa",
          padding: 8,
          marginVertical: 5,
          height: 80
        }}
        multiline
        value={linesJson}
        onChangeText={setLinesJson}
        placeholder='Ex: [["13/01/2025","PAIEMENT","-10.00"], [...]]'
      />

      <Button title="Lancer Script Python" onPress={handleStartPython} />

      {/* Erreur WebSocket ? */}
      {error && (
        <Text style={{ color: "red", marginTop: 10 }}>
          Erreur WebSocket: {error}
        </Text>
      )}

      {/* Logs bruts */}
      <Text style={{ marginTop: 20, fontWeight: "bold" }}>Logs reçus :</Text>
      <Button title="Clear logs" onPress={clearLogs} />
      <ScrollView
        style={{ marginTop: 10, maxHeight: 150, borderWidth: 1, borderColor: "gray" }}
      >
        {logs.map((line, i) => (
          <Text key={i} style={{ marginBottom: 4 }}>
            {line}
          </Text>
        ))}
      </ScrollView>

      {/* Affichage des payloads finaux */}
      <Text style={{ marginTop: 20, fontWeight: "bold" }}>
        Payload(s) Final(aux) :
      </Text>
      <Button title="Clear payloads" onPress={clearPayloads} />
      <ScrollView
        style={{
          marginVertical: 10,
          borderWidth: 1,
          borderColor: "gray",
          padding: 8
        }}
      >
        {payloads.length > 0 ? (
          payloads.map((item, index) => {
            const { transaction, best_email } = item;
            return (
              <View key={index} style={{ marginBottom: 10 }}>
                <Text style={{ fontWeight: "bold" }}>
                  Transaction #{index + 1}
                </Text>
                <View style={{ marginLeft: 10 }}>
                  <Text>Date : {transaction?.date || "N/A"}</Text>
                  <Text>Montant : {transaction?.montant || "N/A"}</Text>
                  <Text>Libellé : {transaction?.libelle || "N/A"}</Text>
                  <Text>Ligne brute : {transaction?.raw_line || "N/A"}</Text>
                </View>

                <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                  Email associé
                </Text>
                <View style={{ marginLeft: 10 }}>
                  <Text>Sujet : {best_email?.subject || "N/A"}</Text>
                  <Text>
                    Score :{" "}
                    {best_email?.score ? best_email.score.toFixed(2) : "N/A"}
                  </Text>
                  <Text>Expéditeur : {best_email?.from || "N/A"}</Text>
                  <Text>Date : {best_email?.date || "N/A"}</Text>
                  {best_email?.body ? (
                    <>
                      <Text>Corps complet :</Text>
                      <Text style={{ marginLeft: 10, color: "#666" }}>
                        {best_email.body}
                      </Text>
                    </>
                  ) : (
                    <Text>Corps complet : (aucun contenu)</Text>
                  )}
                </View>

                <View
                  style={{
                    height: 1,
                    backgroundColor: "#ccc",
                    marginVertical: 10
                  }}
                />
              </View>
            );
          })
        ) : (
          <Text>Aucun payload pour le moment.</Text>
        )}
      </ScrollView>
    </SaaSContainer>
  );
};

export default SaaS8;
