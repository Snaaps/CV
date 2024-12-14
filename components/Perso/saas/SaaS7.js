// saas/SaaS7.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  SaaSContainer,
  SaaSTitle,
  SaaSDescription,
} from "../styles";

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-size: 14px;
    margin-bottom: 5px;
    color: #555;
  }

  select, input[type="text"] {
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    padding: 8px;
    font-size: 14px;
    margin-bottom: 15px;
    width: 100%;
  }

  .options {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 15px;

    label {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 14px;
      margin: 0;
    }
  }
`;

const RegexDisplay = styled.div`
  background: #f0f2f5;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  font-family: "Courier New", monospace;
  font-size: 14px;
  color: #333;
  position: relative;
  word-break: break-all;
`;

const ErrorText = styled.div`
  color: #e74c3c;
  font-size: 14px;
  margin-bottom: 15px;
`;

const TestArea = styled.div`
  margin-top: 20px;
  label {
    font-size: 14px;
    margin-bottom: 5px;
    color: #555;
    display: block;
  }

  textarea {
    width: 100%;
    min-height: 100px;
    padding: 8px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    margin-bottom: 15px;
    font-size: 14px;
    resize: vertical;
  }
`;

const ResultArea = styled.div`
  margin-top: 10px;
  background: #ffffff;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  padding: 10px;
  min-height: 50px;
  white-space: pre-wrap;
  font-family: "Courier New", monospace;
  font-size: 14px;
  color: #333;

  .match {
    background: #6f2cf7;
    color: #fff;
    border-radius: 3px;
    padding: 0 2px;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }
`;

const AddBlockButton = styled(ActionButton)`
  background: #3498db;
  color: #ffffff;

  &:hover {
    background: #2980b9;
  }
`;

const CopyButton = styled(ActionButton)`
  background: #6f2cf7;
  color: #ffffff;

  &:hover {
    background: #5a23c4;
  }
`;

const ClearButton = styled(ActionButton)`
  background: #e74c3c;
  color: #ffffff;

  &:hover {
    background: #c0392b;
  }
`;

// Quelques segments de construction de regex populaires
const regexBlocks = [
  { label: "Lettres (a-z)", value: "[a-z]+" },
  { label: "Chiffres (0-9)", value: "\\d+" },
  { label: "Caractères alphanumériques", value: "[A-Za-z0-9]+" },
  { label: "Espace (\\s)", value: "\\s" },
  { label: "Caractère spécifique", value: "." },
  { label: "Début de ligne (^)", value: "^" },
  { label: "Fin de ligne ($)", value: "$" },
  { label: "Groupe optionnel ( )", value: "(  )" },
  { label: "Quantificateur {n,m}", value: "{1,3}" },
  { label: "Mot complet (\\b)", value: "\\b" }
];

const SaaS7 = () => {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState({ i: false, g: false, m: false });
  const [testText, setTestText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [highlightedText, setHighlightedText] = useState("");

  // Évaluer la regex et mettre à jour le texte mis en surbrillance
  useEffect(() => {
    if (!pattern) {
      setErrorMessage("");
      setHighlightedText(testText);
      return;
    }

    try {
      const finalFlags = Object.keys(flags).filter(f => flags[f]).join("");
      const regex = new RegExp(pattern, finalFlags);
      setErrorMessage("");

      if (testText) {
        const matches = [...testText.matchAll(regex)];
        if (matches.length > 0) {
          let lastIndex = 0;
          let highlighted = "";
          for (const match of matches) {
            const start = match.index;
            const end = start + match[0].length;
            highlighted += testText.slice(lastIndex, start);
            highlighted += `<span class="match">${testText.slice(start, end)}</span>`;
            lastIndex = end;
          }
          highlighted += testText.slice(lastIndex);
          setHighlightedText(highlighted);
        } else {
          setHighlightedText(testText);
        }
      } else {
        setHighlightedText("");
      }
    } catch (e) {
      setErrorMessage("Expression régulière invalide");
      setHighlightedText(testText);
    }
  }, [pattern, flags, testText]);

  const handleAddBlock = (block) => {
    setPattern(prev => prev + block);
  };

  const handleCopyRegex = async () => {
    const finalRegex = `/${pattern}/${Object.keys(flags).filter(f => flags[f]).join("")}`;
    try {
      await navigator.clipboard.writeText(finalRegex);
      alert("Regex copiée dans le presse-papiers !");
    } catch (e) {
      alert("Impossible de copier la regex. Copiez-la manuellement.");
    }
  };

  const handleClear = () => {
    setPattern("");
    setErrorMessage("");
    setHighlightedText("");
  };

  return (
    <SaaSContainer>
      <SaaSTitle>Générateur et Testeur de Regex</SaaSTitle>
      <SaaSDescription>
        Construisez votre regex en ajoutant des blocs, choisissez les options, puis testez-la sur un texte.  
        Vous pouvez ensuite copier la regex finale.
      </SaaSDescription>

      <Controls>
        <label>Construire la regex :</label>
        <RegexDisplay>{`/${pattern}/`}{Object.keys(flags).filter(f => flags[f]).join("")}</RegexDisplay>

        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

        <select onChange={(e) => {
          const value = e.target.value;
          if (value) {
            handleAddBlock(e.target.value);
          }
        }} value="">
          <option value="">Ajouter un bloc...</option>
          {regexBlocks.map((b) => (
            <option key={b.value} value={b.value}>{b.label}</option>
          ))}
        </select>

        <div className="options">
          <label>
            <input 
              type="checkbox"
              checked={flags.i}
              onChange={() => setFlags(prev => ({...prev, i: !prev.i}))}
            /> i (ignore case)
          </label>
          <label>
            <input 
              type="checkbox"
              checked={flags.g}
              onChange={() => setFlags(prev => ({...prev, g: !prev.g}))}
            /> g (global)
          </label>
          <label>
            <input 
              type="checkbox"
              checked={flags.m}
              onChange={() => setFlags(prev => ({...prev, m: !prev.m}))}
            /> m (multiline)
          </label>
        </div>

        <label>Regex personnalisée :</label>
        <input
          type="text"
          placeholder="Tapez ou modifiez votre regex ici"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
        />

        <ButtonsRow>
          <CopyButton onClick={handleCopyRegex}>Copier la regex</CopyButton>
          <ClearButton onClick={handleClear}>Clear</ClearButton>
        </ButtonsRow>
      </Controls>

      <TestArea>
        <label>Texte de test :</label>
        <textarea 
          placeholder="Collez ou tapez votre texte ici pour tester la regex."
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
        ></textarea>
      </TestArea>

      <ResultArea dangerouslySetInnerHTML={{ __html: highlightedText }}>
      </ResultArea>
    </SaaSContainer>
  );
};

export default SaaS7;
