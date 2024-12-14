// PartitionPage.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 20px;
  background: #ecf0f1;
  min-height: 100vh;
  border: 1px solid #bdc3c7;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const BackLink = styled.a`
  color: #6f2cf7;
  text-decoration: none;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h2`
  color: #6f2cf7;
  margin-top: 0;
`;

const PartitionContainer = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #bdc3c7;
  margin-bottom: 20px;
`;

const ErrorButton = styled.button`
  padding: 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }
`;

const Player = styled.audio`
  width: 100%;
  margin-top: 20px;
`;

const PdfContainer = styled.iframe`
  width: 100%;
  height: 500px;
  border: none;
  margin-top: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  border: 1px solid #bdc3c7;
  padding: 20px;
  width: 300px;
  text-align: center;
`;

const ModalTitle = styled.h3`
  margin-top: 0;
  color: #6f2cf7;
  margin-bottom: 15px;
`;

const ModalInput = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #bdc3c7;
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 10px;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalButton = styled.button`
  flex: 1;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: ${(props) => (props.noMargin ? "0px" : "10px")};

  &:hover {
    background-color: #2980b9;
  }
`;

const CancelButton = styled.button`
  flex: 1;
  padding: 10px;
  background-color: #95a5a6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #7f8c8d;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  margin-top: 100px;
  font-size: 18px;
  color: #34495e;
`;

const PartitionInfo = styled.p`
  margin: 0;
`;

const PartitionPage = () => {
  const [partitionData, setPartitionData] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Récupérer l'id depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    // Simulation de fetch de données (vous remplacerez par un fetch réel)
    const partitionsData = [
      { id: "1", title: "Marche du XV", origine: "Gemenos", audio: "/assets/marche_xv.mp3", pdf: "/assets/marche_xv.pdf" },
      { id: "2", title: "La Brise de Signe", origine: "Signe", audio: "/assets/brise_signe.mp3", pdf: "/assets/brise_signe.pdf" },
      { id: "3", title: "Fifrelude", origine: "Gemenos", audio: "/assets/fifrelude.mp3", pdf: "/assets/fifrelude.pdf" },
    ];

    setTimeout(() => {
      const part = partitionsData.find(p => p.id === id);
      setPartitionData(part || null);
      setLoading(false);
    }, 1000); // Simuler un délai de chargement
  }, []);

  const handleSendError = () => {
    console.log("Erreur signalée:", errorText);
    // Ici vous pourriez envoyer errorText à votre backend (functions Firebase)
    setShowErrorModal(false);
    setErrorText("");
  };

  if (loading) {
    return (
      <PageContainer>
        <LoadingMessage>Chargement de la partition...</LoadingMessage>
      </PageContainer>
    );
  }

  if (!partitionData) {
    return (
      <PageContainer>
        <BackLink href="#" onClick={() => window.history.back()}>
          ← Retour
        </BackLink>
        <Title>Partition introuvable</Title>
        <p>La partition demandée n’existe pas ou a été supprimée.</p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <BackLink href="#" onClick={() => window.history.back()}>
        ← Retour
      </BackLink>
      <Title>{partitionData.title}</Title>
      <PartitionContainer>
        <PartitionInfo><strong>Origine:</strong> {partitionData.origine}</PartitionInfo>
        <PdfContainer src={partitionData.pdf} title="Partition PDF" />

        <Player controls src={partitionData.audio}>
          Votre navigateur ne supporte pas l'élément audio.
        </Player>
        <p style={{fontStyle:'italic', color:'#7f8c8d', marginTop:'10px'}}>Si vous rencontrez des difficultés avec le son, vérifiez le volume ou contactez-nous.</p>

        <ErrorButton onClick={() => setShowErrorModal(true)}>Il y a une erreur</ErrorButton>
      </PartitionContainer>

      <ModalOverlay show={showErrorModal}>
        <ModalContent>
          <ModalTitle>Décrire l'erreur</ModalTitle>
          <ModalInput 
            placeholder="Décrivez le problème..."
            value={errorText}
            onChange={(e) => setErrorText(e.target.value)}
          />
          <ModalButtons>
            <ModalButton onClick={handleSendError}>Envoyer</ModalButton>
            <CancelButton onClick={() => setShowErrorModal(false)}>Annuler</CancelButton>
          </ModalButtons>
        </ModalContent>
      </ModalOverlay>
    </PageContainer>
  );
};

export default PartitionPage;
