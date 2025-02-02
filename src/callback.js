// CallbackPage.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Cookies from 'js-cookie';

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useLocalSearchParams();

  useEffect(() => {
    let mounted = true;
    const userId = searchParams.userId;
    if (userId) {
      Cookies.set('userId', userId, { expires: 7 });
      const timer = setTimeout(() => {
        if (mounted) {
          router.push('/powens');
        }
      }, 100);
      return () => {
        mounted = false;
        clearTimeout(timer);
      };
    }
  }, [searchParams, router]);

  return (
    <View style={{ padding: 20, alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text>Authentification réussie. Veuillez patienter...</Text>
    </View>
  );
}
