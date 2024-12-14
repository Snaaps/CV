// saas/SaaS1.js
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { 
  SaaSContainer,
  SaaSTitle,
  SaaSDescription,
  InputContainer,
  DownloadButton,
  QrContainer
} from "../styles";

const SaaS1 = () => {
  const [text, setText] = useState("");
  const [qrValue, setQrValue] = useState("");

  const generateQRCode = () => {
    if (text.trim() === "") {
      alert("Monsieur, veuillez entrer un texte ou une URL valide.");
      return;
    }
    setQrValue(text);
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById("qrCodeCanvas");
    if (!canvas) {
      alert("Monsieur, veuillez d’abord générer un QR code.");
      return;
    }
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <SaaSContainer>
      <SaaSTitle>Générateur de QR Code</SaaSTitle>
      <SaaSDescription>Entrez une URL ou un texte pour générer et télécharger votre QR code.</SaaSDescription>
      <InputContainer>
        <input
          type="text"
          placeholder="URL ou texte ici"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={generateQRCode}>Générer</button>
      </InputContainer>
      {qrValue && (
        <QrContainer>
          <QRCodeCanvas id="qrCodeCanvas" value={qrValue} size={256} />
          <DownloadButton onClick={downloadQRCode}>Télécharger</DownloadButton>
        </QrContainer>
      )}
    </SaaSContainer>
  );
};

export default SaaS1;
