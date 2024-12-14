// saas/SaaS3.js
import React, { useState, useEffect } from "react";
import chroma from "chroma-js";
import {
  SaaSContainer,
  SaaSTitle,
  SaaSDescription,
  InputContainer
} from "../styles";
import styled, { keyframes } from "styled-components";

// Animation pour le message de copie
const fadeInOut = keyframes`
  0% {opacity:0; transform:translateY(-10px)}
  10% {opacity:1; transform:translateY(0)}
  90% {opacity:1; transform:translateY(0)}
  100% {opacity:0; transform:translateY(-10px)}
`;

const Notification = styled.div`
  position: absolute;
  top: 20px;
  background: #6f2cf7;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  animation: ${fadeInOut} 2s ease-in-out forwards;
  font-size: 14px;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const OptionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;

  select, input[type="number"] {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
  }
`;

const PaletteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  position: relative;
  min-height: 200px;
`;

const ColorBox = styled.div`
  width: 80px;
  height: 80px;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 12px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 12px rgba(0,0,0,0.2);
  }

  &:active {
    transform: scale(0.98);
  }

  span {
    background: rgba(0,0,0,0.4);
    border-radius: 4px;
    padding: 2px 4px;
    margin-bottom: 5px;
    opacity: 0.8;
  }
`;

const SaaS3 = () => {
  const [baseColor, setBaseColor] = useState("#6f2cf7");
  const [palette, setPalette] = useState([]);
  const [mode, setMode] = useState("analogous");
  const [numColors, setNumColors] = useState(5);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    // On génère une palette par défaut au chargement
    generatePalette();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generatePalette = () => {
    // Vérification de la couleur
    let color;
    try {
      color = chroma(baseColor);
    } catch (e) {
      alert("Monsieur, veuillez entrer une couleur hex valide (ex: #6f2cf7).");
      return;
    }

    let generatedColors = [];

    switch (mode) {
      case "analogous":
        // Génère une palette analogue
        generatedColors = chroma.scale([color.brighten(1), color, color.darken(1)]).colors(numColors);
        break;
      case "complementary":
        // Couleur de base + sa complémentaire
        const complementary = color.set('hsl.h', '+180').hex();
        generatedColors = chroma.scale([color.hex(), complementary]).colors(numColors);
        break;
      case "triadic":
        // Triade : 3 couleurs espacées de 120°
        // On utilise numColors pour interpoler entre elles
        const hsl = color.hsl();
        const triad1 = chroma.hsl((hsl[0] + 120) % 360, hsl[1], hsl[2]).hex();
        const triad2 = chroma.hsl((hsl[0] + 240) % 360, hsl[1], hsl[2]).hex();
        generatedColors = chroma.scale([color.hex(), triad1, triad2]).colors(numColors);
        break;
      case "tetradic":
        // Tétradique : 4 couleurs espacées de 90°
        const hsl2 = color.hsl();
        const t2 = chroma.hsl((hsl2[0] + 90) % 360, hsl2[1], hsl2[2]).hex();
        const t3 = chroma.hsl((hsl2[0] + 180) % 360, hsl2[1], hsl2[2]).hex();
        const t4 = chroma.hsl((hsl2[0] + 270) % 360, hsl2[1], hsl2[2]).hex();
        generatedColors = chroma.scale([color.hex(), t2, t3, t4]).colors(numColors);
        break;
      case "monochromatic":
        // Monochromatique : variations autour de la même teinte
        generatedColors = chroma.scale([color.brighten(1.5), color, color.darken(1.5)]).colors(numColors);
        break;
      default:
        generatedColors = [baseColor];
    }

    setPalette(generatedColors);
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color).then(() => {
      setNotification(`La couleur ${color.toUpperCase()} a été copiée.`);
      setTimeout(() => setNotification(""), 2000);
    }, () => {
      alert("Impossible de copier la couleur.");
    });
  };

  return (
    <SaaSContainer>
      <SaaSTitle>Générateur de Palette de Couleurs</SaaSTitle>
      <SaaSDescription>
        Entrez une couleur de base (hex) et sélectionnez un mode pour générer une palette harmonieuse.  
        Ajustez le nombre de couleurs, puis cliquez sur "Générer".  
        Cliquez sur une couleur pour la copier.
      </SaaSDescription>
      <InputContainer>
        <input
          type="text"
          placeholder="#6f2cf7"
          value={baseColor}
          onChange={(e) => setBaseColor(e.target.value)}
        />
        <button onClick={generatePalette}>Générer</button>
      </InputContainer>
      <ControlsContainer>
        <OptionsRow>
          <span>Mode :</span>
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="analogous">Analogous</option>
            <option value="complementary">Complémentaire</option>
            <option value="triadic">Triadique</option>
            <option value="tetradic">Tétradique</option>
            <option value="monochromatic">Monochromatique</option>
          </select>
          <span>Couleurs :</span>
          <input
            type="number"
            min="3"
            max="8"
            value={numColors}
            onChange={(e) => setNumColors(parseInt(e.target.value, 10))}
          />
        </OptionsRow>
      </ControlsContainer>
      <PaletteContainer>
        {notification && <Notification>{notification}</Notification>}
        {palette.map((c) => (
          <ColorBox
            key={c}
            style={{ background: c }}
            onClick={() => copyToClipboard(c)}
          >
            <span>{c.toUpperCase()}</span>
          </ColorBox>
        ))}
      </PaletteContainer>
    </SaaSContainer>
  );
};

export default SaaS3;
