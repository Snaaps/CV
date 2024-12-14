// saas/SaaS6.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  SaaSContainer,
  SaaSTitle,
  SaaSDescription
} from "../styles";

// Liste de polices et suggestions
const availableFonts = [
    // Sans-serif classiques
    { name: "Roboto", importUrl: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" },
    { name: "Open Sans", importUrl: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" },
    { name: "Lato", importUrl: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" },
    { name: "Montserrat", importUrl: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" },
    { name: "Poppins", importUrl: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" },
    { name: "Nunito", importUrl: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" },
    { name: "Source Sans Pro", importUrl: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" },
    { name: "Mulish", importUrl: "https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap" },
    { name: "Ubuntu", importUrl: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" },
    { name: "Raleway", importUrl: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" },
  
    // Serif
    { name: "Merriweather", importUrl: "https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" },
    { name: "Lora", importUrl: "https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" },
    { name: "Playfair Display", importUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" },
    { name: "PT Serif", importUrl: "https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap" },
    { name: "Crimson Pro", importUrl: "https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&display=swap" },
    { name: "IBM Plex Serif", importUrl: "https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;700&display=swap" },
  
    // Condensed / Slab
    { name: "Roboto Slab", importUrl: "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap" },
    { name: "Oswald", importUrl: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" },
    { name: "Rokkitt", importUrl: "https://fonts.googleapis.com/css2?family=Rokkitt:wght@400;700&display=swap" },
    
    // Autres styles
    { name: "Muli (Mulish)", importUrl: "https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap" }, // déjà présent sous le nom Mulish
    { name: "Quicksand", importUrl: "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" },
    { name: "Josefin Sans", importUrl: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" },
    { name: "PT Sans", importUrl: "https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" },
  ];
  
  // Suggestions de polices secondaires par police principale
  // Les associations suivantes sont basées sur des combinaisons courantes et harmonieuses,
  // avec des mélanges de sans-serif/serif, etc.
  const fontSuggestions = {
    "Roboto": ["Open Sans", "Lora", "Montserrat", "Merriweather", "Poppins", "Source Sans Pro", "Crimson Pro", "Raleway"],
    "Open Sans": ["Roboto", "Lora", "Playfair Display", "Poppins", "Montserrat", "PT Serif", "Nunito"],
    "Lato": ["Merriweather", "Playfair Display", "Roboto Slab", "Open Sans", "Montserrat", "Source Sans Pro"],
    "Montserrat": ["Lora", "Merriweather", "Crimson Pro", "Nunito", "Raleway", "Poppins", "PT Serif"],
    "Poppins": ["Merriweather", "Lora", "Roboto Slab", "Crimson Pro", "Mulish", "Ubuntu"],
    "Nunito": ["Playfair Display", "Lora", "Roboto", "PT Serif", "Raleway", "Poppins"],
    "Source Sans Pro": ["Lora", "Merriweather", "Crimson Pro", "Open Sans", "Raleway", "IBM Plex Serif"],
    "Mulish": ["Lora", "Merriweather", "Crimson Pro", "Poppins", "Playfair Display", "PT Serif"],
    "Ubuntu": ["Lora", "Merriweather", "PT Serif", "Roboto Slab", "Raleway", "Open Sans"],
    "Raleway": ["Merriweather", "Lora", "Crimson Pro", "Poppins", "Source Sans Pro", "Ubuntu"],
    "Merriweather": ["Open Sans", "Lato", "Montserrat", "Poppins", "Raleway", "Josefin Sans", "PT Sans"],
    "Lora": ["Montserrat", "Open Sans", "Merriweather", "Roboto", "Raleway", "Ubuntu"],
    "Playfair Display": ["Open Sans", "Lato", "Source Sans Pro", "Nunito", "Poppins", "Mulish"],
    "PT Serif": ["Open Sans", "Lato", "Mulish", "Poppins", "Nunito", "Josefin Sans"],
    "Crimson Pro": ["Roboto", "Open Sans", "Poppins", "Raleway", "Lato", "Source Sans Pro"],
    "IBM Plex Serif": ["Roboto", "Open Sans", "Montserrat", "Lato", "Nunito", "Raleway"],
    "Roboto Slab": ["Lato", "Poppins", "Nunito", "Quicksand", "Ubuntu", "PT Sans"],
    "Oswald": ["Open Sans", "Lora", "Merriweather", "Roboto", "Poppins", "Nunito"],
    "Rokkitt": ["Lato", "Open Sans", "Poppins", "Raleway", "Merriweather", "Mulish"],
    "Quicksand": ["Merriweather", "Lora", "Roboto", "Nunito", "Mulish", "PT Serif"],
    "Josefin Sans": ["Merriweather", "Crimson Pro", "Poppins", "Open Sans", "Raleway", "Lato"],
    "PT Sans": ["Playfair Display", "Merriweather", "Crimson Pro", "Open Sans", "Poppins", "Lato"]
  };
  

// Styles internes
const ControlsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background: ${props => props.$darkMode ? "#2c3e50" : "#ffffff"};
  color: ${props => props.$darkMode ? "#ecf0f1" : "#2c3e50"};
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  margin-bottom: 20px;

  label {
    font-size: 14px;
    margin-bottom: 5px;
    display: block;
  }

  select, input[type="number"], button {
    margin-bottom: 15px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    padding: 5px;
    font-size: 14px;
    background: ${props => props.$darkMode ? "#34495e" : "#ffffff"};
    color: ${props => props.$darkMode ? "#ecf0f1" : "#2c3e50"};
  }

  input[type="range"] {
    width: 100%;
    margin-bottom: 15px;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  span {
    margin-right: 10px;
    font-size: 14px;
  }
`;

const PreviewContainer = styled.div`
  flex: 1;
  background: ${props => props.$darkMode ? "#34495e" : "#ffffff"};
  color: ${props => props.$darkMode ? "#ecf0f1" : "#2c3e50"};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 600px;
  font-family: ${props => props.$primaryFont}, ${props => props.$secondaryFont}, sans-serif;
  line-height: ${props => props.$lineHeight};

  h1, h2, p {
    margin-bottom: 20px;
  }

  h1 {
    font-family: ${props => props.$primaryFont}, sans-serif;
    font-size: ${props => props.$titleSize}px;
    font-weight: 700;
  }

  h2 {
    font-family: ${props => props.$secondaryFont}, sans-serif;
    font-size: ${props => props.$subtitleSize}px;
    font-weight: 700;
  }

  p {
    font-family: ${props => props.$secondaryFont}, sans-serif;
    font-size: ${props => props.$bodySize}px;
    font-weight: 400;
  }
`;

const CssSnippet = styled.pre`
  background: ${props => props.$darkMode ? "#2c3e50" : "#f0f2f5"};
  padding: 20px;
  border-radius: 10px;
  font-size: 13px;
  overflow-x: auto;
  margin-top: 20px;
  color: ${props => props.$darkMode ? "#ecf0f1" : "#2c3e50"};
`;

const CopyButton = styled.button`
  margin-top: 10px;
  padding: 8px 15px;
  background: #6f2cf7;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: background 0.3s;

  &:hover {
    background: #5a23c4;
  }
`;

const SaaS6 = () => {
  const [primaryFont, setPrimaryFont] = useState("Roboto");
  const [secondaryFont, setSecondaryFont] = useState("Open Sans");
  const [titleSize, setTitleSize] = useState(36);
  const [subtitleSize, setSubtitleSize] = useState(24);
  const [bodySize, setBodySize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [darkMode, setDarkMode] = useState(false);

  // Charger les polices dynamiquement
  useEffect(() => {
    const primary = availableFonts.find(f => f.name === primaryFont);
    const secondary = availableFonts.find(f => f.name === secondaryFont);

    // On insère ou met à jour les <link> pour importer les polices
    const head = document.head;

    // Supprimer anciens liens si existants
    const oldLinks = document.querySelectorAll("link[data-font='saas6']");
    oldLinks.forEach(l => l.remove());

    // Ajouter le lien pour la police primaire
    if (primary && primary.importUrl) {
      const linkPrimary = document.createElement('link');
      linkPrimary.setAttribute('rel', 'stylesheet');
      linkPrimary.setAttribute('href', primary.importUrl);
      linkPrimary.setAttribute('data-font', 'saas6');
      head.appendChild(linkPrimary);
    }

    // Ajouter le lien pour la police secondaire
    if (secondary && secondary.importUrl) {
      const linkSecondary = document.createElement('link');
      linkSecondary.setAttribute('rel', 'stylesheet');
      linkSecondary.setAttribute('href', secondary.importUrl);
      linkSecondary.setAttribute('data-font', 'saas6');
      head.appendChild(linkSecondary);
    }
  }, [primaryFont, secondaryFont]);

  // Suggestions en fonction de la police principale
  const suggestions = fontSuggestions[primaryFont] || [];
  
  // S'assurer que la secondaryFont choisie est bien dans les suggestions
  useEffect(() => {
    if (!suggestions.includes(secondaryFont)) {
      setSecondaryFont(suggestions[0]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primaryFont]);

  const copyCSS = async () => {
    const primary = availableFonts.find(f => f.name === primaryFont);
    const secondary = availableFonts.find(f => f.name === secondaryFont);

    const css = `
@import url('${primary ? primary.importUrl : ''}');
@import url('${secondary ? secondary.importUrl : ''}');

body {
  font-family: '${secondaryFont}', sans-serif;
  line-height: ${lineHeight};
}

h1 {
  font-family: '${primaryFont}', sans-serif;
  font-size: ${titleSize}px;
  font-weight: 700;
}

h2 {
  font-family: '${secondaryFont}', sans-serif;
  font-size: ${subtitleSize}px;
  font-weight: 700;
}

p {
  font-family: '${secondaryFont}', sans-serif;
  font-size: ${bodySize}px;
  font-weight: 400;
}
`.trim();

    try {
      await navigator.clipboard.writeText(css);
      alert("CSS copié dans le presse-papiers !");
    } catch(e) {
      alert("Impossible de copier le CSS. Veuillez le copier manuellement.");
    }
  };

  return (
    <SaaSContainer>
      <SaaSTitle>Conseiller d'Associations de Polices</SaaSTitle>
      <SaaSDescription>
        Choisissez une police principale, obtenez des suggestions de polices secondaires harmonieuses, ajustez le style et copiez le code CSS.
      </SaaSDescription>

      <ControlsContainer $darkMode={darkMode}>
        <ToggleContainer>
          <span>Mode {darkMode ? "Sombre" : "Clair"} :</span>
          <input 
            type="checkbox" 
            checked={darkMode} 
            onChange={() => setDarkMode(!darkMode)} 
          />
        </ToggleContainer>

        <label>Police Principale :</label>
        <select value={primaryFont} onChange={(e) => setPrimaryFont(e.target.value)}>
          {availableFonts.map(font => (
            <option key={font.name} value={font.name}>{font.name}</option>
          ))}
        </select>

        <label>Police Secondaire :</label>
        <select value={secondaryFont} onChange={(e) => setSecondaryFont(e.target.value)}>
          {suggestions.map(font => (
            <option key={font} value={font}>{font}</option>
          ))}
        </select>

        <label>Taille du Titre (px) : {titleSize}</label>
        <input 
          type="range" 
          min="24" 
          max="72" 
          step="1" 
          value={titleSize} 
          onChange={(e) => setTitleSize(parseInt(e.target.value,10))}
        />

        <label>Taille du Sous-titre (px) : {subtitleSize}</label>
        <input 
          type="range" 
          min="16" 
          max="48" 
          step="1" 
          value={subtitleSize} 
          onChange={(e) => setSubtitleSize(parseInt(e.target.value,10))}
        />

        <label>Taille du corps (px) : {bodySize}</label>
        <input 
          type="range" 
          min="12" 
          max="24" 
          step="1" 
          value={bodySize} 
          onChange={(e) => setBodySize(parseInt(e.target.value,10))}
        />

        <label>Line-height : {lineHeight}</label>
        <input 
          type="range" 
          min="1" 
          max="2" 
          step="0.1" 
          value={lineHeight} 
          onChange={(e) => setLineHeight(parseFloat(e.target.value))}
        />
      </ControlsContainer>

      <PreviewContainer 
        $darkMode={darkMode} 
        $primaryFont={primaryFont} 
        $secondaryFont={secondaryFont} 
        $titleSize={titleSize}
        $subtitleSize={subtitleSize}
        $bodySize={bodySize}
        $lineHeight={lineHeight}
      >
        <h1>Titre Principal</h1>
        <h2>Sous-titre d'exemple</h2>
        <p>
          Ceci est un paragraphe d'exemple pour prévisualiser la combinaison des polices.  
          Ajustez le style, la taille, et la line-height pour obtenir le rendu désiré.
        </p>
      </PreviewContainer>

      <CssSnippet $darkMode={darkMode}>
        {`@import url('${availableFonts.find(f => f.name === primaryFont)?.importUrl}');
@import url('${availableFonts.find(f => f.name === secondaryFont)?.importUrl}');

body {
  font-family: '${secondaryFont}', sans-serif;
  line-height: ${lineHeight};
}

h1 {
  font-family: '${primaryFont}', sans-serif;
  font-size: ${titleSize}px;
  font-weight: 700;
}

h2 {
  font-family: '${secondaryFont}', sans-serif;
  font-size: ${subtitleSize}px;
  font-weight: 700;
}

p {
  font-family: '${secondaryFont}', sans-serif;
  font-size: ${bodySize}px;
  font-weight: 400;
}`}
      </CssSnippet>

      <CopyButton onClick={copyCSS}>Copier le CSS</CopyButton>
    </SaaSContainer>
  );
};

export default SaaS6;
