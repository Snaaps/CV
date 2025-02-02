// sections/LogsSection.tsx
import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  ScrollViewProps,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export function LogsSection({ error, logs, clearLogs }) {
  // Référence typée vers le ScrollView
  const scrollViewRef = useRef(null);

  // autoScroll = true => on scroll automatiquement en bas
  //                   tant que l’utilisateur n’a pas “pris la main”
  const [autoScroll, setAutoScroll] = useState(true);

  // Appelé à chaque changement de taille du contenu (nouveau log, etc.)
  const onContentSizeChange = () => {
    if (autoScroll && scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  // Quand l’utilisateur scrolle, on vérifie s’il est toujours en bas
  const onScroll = () => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    setAutoScroll(isCloseToBottom);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Logs Python (WebSocket)</Text>
      {error && <Text style={styles.error}>Erreur WebSocket: {error}</Text>}

      <View style={styles.logsHeader}>
        <Text style={styles.logsTitle}>Logs reçus :</Text>
        <TouchableOpacity style={styles.smallButton} onPress={clearLogs}>
          <Text style={styles.smallButtonText}>Clear logs</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        onContentSizeChange={onContentSizeChange}
        scrollEventThrottle={1} // Fréquence de déclenchement du onScroll
        style={styles.logsContainer}
      >
        {logs.map((line, i) => (
          <Text key={i} style={styles.logLine}>
            {line}
          </Text>
        ))}
      </ScrollView>
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
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  logsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  logsTitle: {
    fontWeight: '600',
    fontSize: 15,
  },
  smallButton: {
    backgroundColor: '#777',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  smallButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  logsContainer: {
    maxHeight: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 5,
    marginBottom: 10,
    borderRadius: 4,
  },
  logLine: {
    marginBottom: 4,
    fontSize: 12,
    color: '#444',
  },
});
