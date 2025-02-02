// app/PowensScreen.js
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import MySwiper from '../components/MySwiper';
import Cookies from 'js-cookie';
import * as WebBrowser from 'expo-web-browser';

// Hooks et composants
import { usePythonLogsWS } from './usePythonLogsWS';
import { Step1AuthSection } from './sections/Step1AuthSection';
import { PowensConnectionsSection } from './sections/PowensConnectionsSection';
import { PythonSection } from './sections/PythonSection';
import { PowensTransactionsSection } from './sections/PowensTransactionsSection';
import { LogsSection } from './sections/LogsSection';
import { PayloadsSection } from './sections/PayloadsSection';
import { GoogleAuthControl } from './sections/GoogleAuthControl';

export default function PowensScreen() {
  // -----------------------------------------------------------
  // ÉTATS ET COOKIES
  // -----------------------------------------------------------
  const [powensToken, setPowensToken] = useState(Cookies.get('powensToken') || null);
  const [googleToken, setGoogleToken] = useState(Cookies.get('googleToken') || null);
  const [userId, setUserId] = useState(Cookies.get('userId') || '');
  const [linesJson, setLinesJson] = useState(Cookies.get('linesJson') || '');

  const [transactions, setTransactions] = useState([]);
  const [selectedTransactionId, setSelectedTransactionId] = useState(null);
  const [priceStr, setPriceStr] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const { logs, payloads, error, clearLogs, clearPayloads } = usePythonLogsWS('wss://mon-serveur-node-143630968799.europe-west1.run.app');


  // Sauvegarde des tokens et autres dans les cookies
  useEffect(() => {
    if (powensToken) {
      Cookies.set('powensToken', powensToken, { expires: 7 });
    } else {
      Cookies.remove('powensToken');
    }
  }, [powensToken]);

  useEffect(() => {
    if (userId) {
      Cookies.set('userId', userId, { expires: 7 });
    } else {
      Cookies.remove('userId');
    }
  }, [userId]);

  useEffect(() => {
    if (linesJson) {
      Cookies.set('linesJson', linesJson, { expires: 7 });
    } else {
      Cookies.remove('linesJson');
    }
  }, [linesJson]);

  useEffect(() => {
    if (googleToken) {
      Cookies.set('googleToken', googleToken, { expires: 7 });
    } else {
      Cookies.remove('googleToken');
    }
  }, [googleToken]);

  // -----------------------------------------------------------
  // SWIPER : Contrôle via ref
  // -----------------------------------------------------------
  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
    }
  };
  const goBack = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(-1);
    }
  };

  // Si on a déjà un token Powens, on saute directement le slide 1
  useEffect(() => {
    if (powensToken) {
      setTimeout(() => {
        if (swiperRef.current) {
          swiperRef.current.scrollBy(1);
        }
      }, 0);
    }
  }, [powensToken]);

  return (
    <View style={styles.container}>
      <MySwiper
        ref={swiperRef}
        loop={false}
        showsPagination
        style={{ flex: 1 }}
        scrollEnabled={true}
      >
        {/* -----------------------------------------------------
           SLIDE 1 : Authentification
        ----------------------------------------------------- */}
        <View style={styles.slide}>
          {powensToken ? (
            <>
              <Text style={{ marginBottom: 10 }}>
                Vous êtes déjà authentifié avec Powens.
              </Text>
              <GoogleAuthControl
                googleToken={googleToken}
                setGoogleToken={setGoogleToken}
                setUserId={setUserId}
              />
              <Button title="Continuer" onPress={goNext} />
            </>
          ) : (
            <>
              <Step1AuthSection
  powensToken={powensToken}
  setPowensToken={setPowensToken}
  userId={userId}
  setUserId={setUserId}
/>

              <Button title="Suivant" onPress={goNext} />
            </>
          )}
        </View>

        {/* -----------------------------------------------------
           SLIDE 2 : Connexions
        ----------------------------------------------------- */}
        <View style={styles.slide}>
          <PowensConnectionsSection powensToken={powensToken} />
          <View style={styles.navButtons}>
            <Button title="Précédent" onPress={goBack} />
            <Button title="Suivant" onPress={goNext} />
          </View>
        </View>

        {/* -----------------------------------------------------
           SLIDE 3 : Transactions
        ----------------------------------------------------- */}
        <View style={styles.slide}>
          <PowensTransactionsSection
            powensToken={powensToken}
            transactions={transactions}
            setTransactions={setTransactions}
            selectedTransactionId={selectedTransactionId}
            setSelectedTransactionId={setSelectedTransactionId}
            linesJson={linesJson}
            setLinesJson={setLinesJson}
            setPriceStr={setPriceStr}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
          <View style={styles.navButtons}>
            <Button title="Précédent" onPress={goBack} />
            <Button title="Suivant" onPress={goNext} />
          </View>
        </View>

        {/* -----------------------------------------------------
           SLIDE 4 : PythonSection, Logs, Payloads
        ----------------------------------------------------- */}
        <View style={styles.slide}>
          <PythonSection
            error={error}
            logs={logs}
            userId={userId}
            linesJson={linesJson}
            setUserId={setUserId}
            priceStr={priceStr}
            clearLogs={clearLogs}
          />
          <LogsSection
            error={error}
            logs={logs}
            clearLogs={clearLogs}
          />
          <PayloadsSection
            payloads={payloads}
            clearPayloads={clearPayloads}
          />
          <View style={styles.navButtons}>
            <Button title="Précédent" onPress={goBack} />
            <Button
              title="Terminer"
              onPress={() => alert('Fin de l’assistant !')}
            />
          </View>
        </View>
      </MySwiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    marginTop: 40,
  },
  slide: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
    justifyContent: 'flex-start',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
