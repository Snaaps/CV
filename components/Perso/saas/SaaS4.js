// saas/SaaS4.js
import React, { useState, useEffect } from "react";
import chroma from "chroma-js";
import {
  SaaSContainer,
  SaaSTitle,
  SaaSDescription,
  InputContainer
} from "../styles";
import styled from "styled-components";

const ResultContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const PreviewBox = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  color: ${props => props.$textColor};
  background: ${props => props.$bgColor};
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
`;

const RatioResult = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const Suggestion = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #555;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  background: ${props => props.$color};
  color: #fff;
`;

// Fonction utilitaire pour vérifier si une couleur hex est valide
const isValidHex = (colorStr) => {
  const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
  return hexRegex.test(colorStr);
};

const SaaS4 = () => {
  const [textColor, setTextColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [ratio, setRatio] = useState(null);
  const [compliance, setCompliance] = useState("");

  const updateAccessibility = (tColor, bColor) => {
    if (!isValidHex(tColor) || !isValidHex(bColor)) {
      // Couleur invalide, on réinitialise
      setRatio(null);
      setCompliance("");
      return;
    }
    let ratioValue;
    try {
      ratioValue = chroma.contrast(tColor, bColor);
    } catch (e) {
      // Si chroma plante, on réinitialise
      setRatio(null);
      setCompliance("");
      return;
    }

    const roundedRatio = ratioValue.toFixed(2);
    setRatio(roundedRatio);

    let level = "";
    if (ratioValue >= 7) {
      level = "AAA";
    } else if (ratioValue >= 4.5) {
      level = "AA";
    } else if (ratioValue >= 3) {
      level = "AA (Large Text Only)";
    } else {
      level = "Non conforme";
    }
    setCompliance(level);
  };

  const getBadgeColor = () => {
    if (compliance === "AAA") return "#2ecc71";
    if (compliance === "AA") return "#3498db";
    if (compliance === "AA (Large Text Only)") return "#f1c40f";
    return "#e74c3c";
  };

  const suggestColors = () => {
    if (!ratio || !compliance) return null;
    if (!isValidHex(textColor) || !isValidHex(bgColor)) return null;

    try {
      const textLum = chroma(textColor).luminance();
      const bgLum = chroma(bgColor).luminance();
      const textIsLighter = textLum > bgLum;

      if (compliance === "Non conforme") {
        if (textIsLighter) {
          return "Le texte est plus clair que le fond, mais le contraste est insuffisant. Rendez le texte encore plus clair ou le fond plus sombre.";
        } else {
          return "Le texte est plus sombre que le fond, mais le contraste est insuffisant. Rendez le texte encore plus sombre ou le fond plus clair.";
        }
      } else if (compliance === "AA (Large Text Only)") {
        if (textIsLighter) {
          return "Pour atteindre le niveau AA normal, rendez le texte un peu plus clair, ou assombrissez un peu le fond.";
        } else {
          return "Pour atteindre le niveau AA normal, rendez le texte un peu plus sombre, ou éclaircissez un peu le fond.";
        }
      } else if (compliance === "AA") {
        if (textIsLighter) {
          return "Vous respectez AA, pour atteindre AAA, essayez d'éclaircir encore un peu le texte ou d'assombrir davantage le fond.";
        } else {
          return "Vous respectez AA, pour atteindre AAA, essayez d'assombrir encore un peu le texte ou d'éclaircir davantage le fond.";
        }
      } else if (compliance === "AAA") {
        return "Félicitations, votre contraste est excellent (AAA) !";
      }
    } catch (e) {
      return null; // Si une erreur survient dans le calcul, on ne suggère rien
    }

    return null;
  };

  // Mise à jour en temps réel lors d'un changement de couleur
  useEffect(() => {
    updateAccessibility(textColor, bgColor);
  }, [textColor, bgColor]);

  return (
    <SaaSContainer>
      <SaaSTitle>Vérification d'accessibilité des couleurs</SaaSTitle>
      <SaaSDescription>
        Entrez une couleur de texte et une couleur de fond (en hex). Le contraste sera vérifié automatiquement.
      </SaaSDescription>

      <InputContainer>
        <input
          type="text"
          placeholder="#000000 (Couleur du texte)"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="#ffffff (Couleur de fond)"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </InputContainer>

      {ratio && (
        <ResultContainer>
          <PreviewBox $textColor={textColor} $bgColor={bgColor}>
            Exemple de texte sur ce fond.
          </PreviewBox>
          <RatioResult>
            Ratio : {ratio}{" "}
            {compliance && <Badge $color={getBadgeColor()}>{compliance}</Badge>}
          </RatioResult>
          <Suggestion>{suggestColors()}</Suggestion>
        </ResultContainer>
      )}

      {!ratio && isValidHex(textColor) && isValidHex(bgColor) && (
        <ResultContainer>
          <PreviewBox $textColor={textColor} $bgColor={bgColor}>
            Exemple de texte sur ce fond.
          </PreviewBox>
          <RatioResult>
            Les couleurs sont valides, mais le ratio n'a pas pu être calculé.
          </RatioResult>
        </ResultContainer>
      )}
    </SaaSContainer>
  );
};

export default SaaS4;
