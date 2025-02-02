
// src/CallbackPage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function CallbackPage() {
  const location = useLocation();
  const [content, setContent] = useState("Chargement du callback...");

  useEffect(() => {
    // 1) Récupérer le "code" dans l’URL : .../callback?code=XYZ
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    if (!code) {
      setContent("Erreur : aucun code reçu.");
      return;
    }

    // 2) Appeler votre serveur Node, sur la route existante "/callback"
    //    Pour transmettre ce code, on peut le faire de plusieurs façons :
    //    a) Soit vous laissez votre Node faire l’échange en direct (dans ce cas, cette page affiche un message).
    //    b) Soit vous envoyez ce code manuellement en POST vers /tokenExchange.
    //    Ici on illustre un GET direct :
    fetch(`http://82.64.55.60:3000/callback?code=${code}`)
      .then(response => response.text())
      .then(txt => {
        setContent(txt);
      })
      .catch(err => {
        console.error(err);
        setContent("Erreur lors de l'appel du callback sur le serveur Node.");
      });
  }, [location]);

  return (
    <div>
      <h1>Callback</h1>
      <p>{content}</p>
    </div>
  );
}

export default CallbackPage;
