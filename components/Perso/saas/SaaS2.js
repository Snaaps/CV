// saas/SaaS2.js
import React, { useState } from "react";
import {
  SaaSContainer,
  SaaSTitle,
  SaaSDescription,
  InputContainer,
  DownloadButton
} from "../styles";

const SaaS2 = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [csvOutput, setCsvOutput] = useState("");

  const convertToCSV = () => {
    let parsed;
    try {
      parsed = JSON.parse(jsonInput);
    } catch (e) {
      alert("Monsieur, votre JSON est invalide. Veuillez corriger et réessayer.");
      return;
    }

    if (!Array.isArray(parsed) || parsed.length === 0 || typeof parsed[0] !== "object") {
      alert("Monsieur, veuillez fournir un tableau d'objets JSON non vide.");
      return;
    }

    const keys = Object.keys(parsed[0]);
    const header = keys.join(",");
    const rows = parsed.map(obj =>
      keys.map(k => (obj[k] !== undefined ? JSON.stringify(obj[k]) : "")).join(",")
    );
    const csv = [header, ...rows].join("\n");
    setCsvOutput(csv);
  };

  const downloadCSV = () => {
    if (!csvOutput) {
      alert("Monsieur, veuillez d’abord convertir du JSON en CSV.");
      return;
    }
    const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <SaaSContainer>
      <SaaSTitle>Convertisseur JSON → CSV</SaaSTitle>
      <SaaSDescription>
        Collez votre JSON ci-dessous. Assurez-vous qu'il s'agit d'un tableau d'objets.  
        Cliquez ensuite sur "Convertir" pour générer un CSV téléchargeable.
      </SaaSDescription>
      <InputContainer>
        <textarea
          placeholder='[{"name":"Jean","age":30},{"name":"Marie","age":25}]'
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
        />
        <button onClick={convertToCSV}>Convertir</button>
      </InputContainer>
      {csvOutput && (
        <div style={{ textAlign: 'center' }}>
          <DownloadButton onClick={downloadCSV}>Télécharger CSV</DownloadButton>
        </div>
      )}
    </SaaSContainer>
  );
};

export default SaaS2;
