// saas/SaaS5.js
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  SaaSContainer,
  SaaSTitle,
  SaaSDescription,
  InputContainer
} from "../styles";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 20px;
`;

const LeftColumn = styled.div`
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Controls = styled.div`
  margin-top: 20px;
  background: #fff;
  border: 1px solid #bdc3c7;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.05);

  label {
    font-size: 14px;
    margin-bottom: 5px;
    color: #555;
    display: block;
  }

  input[type="range"] {
    width: 100%;
    margin-bottom: 15px;
  }

  select, input[type="number"] {
    margin-bottom: 15px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    padding: 5px;
    font-size: 14px;
    width: 100%;
  }

  .control-group {
    margin-bottom: 20px;
  }

  .quality-value {
    font-weight: bold;
    margin-left: 5px;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
`;

const ImageWrapper = styled.div`
  text-align: center;
`;

const ImageTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  color: #6f2cf7;
`;

const ImagePreview = styled.img`
  max-width: 200px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  font-size: 13px;
  color: #555;
  margin: 5px 0;
`;

const DownloadButton = styled.button`
  margin-top: 15px;
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

const SaaS5 = () => {
  const [originalFile, setOriginalFile] = useState(null);
  const [originalDataURL, setOriginalDataURL] = useState("");
  const [convertedDataURL, setConvertedDataURL] = useState("");
  const [format, setFormat] = useState("image/jpeg");
  const [quality, setQuality] = useState(0.8);
  const [targetWidth, setTargetWidth] = useState(800);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (originalFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setOriginalDataURL(e.target.result);
      };
      reader.readAsDataURL(originalFile);
    } else {
      setOriginalDataURL("");
      setConvertedDataURL("");
    }
  }, [originalFile]);

  useEffect(() => {
    if (originalDataURL) {
      convertImage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalDataURL, format, quality, targetWidth]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setOriginalFile(e.target.files[0]);
    }
  };

  const convertImage = () => {
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const ratio = img.height / img.width;
      const newWidth = targetWidth > 0 ? targetWidth : img.width;
      const newHeight = newWidth * ratio;

      canvas.width = newWidth;
      canvas.height = newHeight;
      ctx.clearRect(0, 0, newWidth, newHeight);
      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      const dataURL = canvas.toDataURL(format, quality);
      setConvertedDataURL(dataURL);
    };
    img.src = originalDataURL;
  };

  const downloadImage = () => {
    if (!convertedDataURL) return;
    const link = document.createElement("a");
    link.href = convertedDataURL;
    const ext = format === "image/jpeg" ? "jpg" : format === "image/webp" ? "webp" : "png";
    link.download = `optimized.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getSize = (dataURL) => {
    if (!dataURL) return 0;
    const base64String = dataURL.split(",")[1];
    return Math.round((base64String.length * 3) / 4);
  };

  const originalSize = getSize(originalDataURL);
  const convertedSize = getSize(convertedDataURL);

  const sizeReduction = originalSize > 0 && convertedSize > 0
    ? Math.round(((originalSize - convertedSize) / originalSize) * 100)
    : 0;

  return (
    <SaaSContainer>
      <SaaSTitle>Optimisation et Conversion d'Images</SaaSTitle>
      <SaaSDescription>
        Importez une image, ajustez la taille, la qualité, le format, puis téléchargez une version optimisée.
      </SaaSDescription>

      <LayoutContainer>
        <LeftColumn>
          <InputContainer>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </InputContainer>

          {originalDataURL && (
            <Controls>
              <div className="control-group">
                <label>Format de sortie :</label>
                <select value={format} onChange={(e) => setFormat(e.target.value)}>
                  <option value="image/jpeg">JPEG</option>
                  <option value="image/png">PNG</option>
                  <option value="image/webp">WebP</option>
                </select>
              </div>

              {(format === "image/jpeg" || format === "image/webp") && (
                <div className="control-group">
                  <label>Qualité :</label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={quality}
                    onChange={(e) => setQuality(parseFloat(e.target.value))}
                  />
                  <span className="quality-value">{quality}</span>
                </div>
              )}

              <div className="control-group">
                <label>Largeur cible (px) :</label>
                <input
                  type="number"
                  value={targetWidth}
                  onChange={(e) => setTargetWidth(parseInt(e.target.value, 10) || 0)}
                />
              </div>
            </Controls>
          )}
        </LeftColumn>

        <RightColumn>
          <ImagesContainer>
            {originalDataURL && (
              <ImageWrapper>
                <ImageTitle>Originale</ImageTitle>
                <ImagePreview src={originalDataURL} alt="Original" />
                <InfoText>Taille : {originalSize} octets</InfoText>
              </ImageWrapper>
            )}

            {convertedDataURL && (
              <ImageWrapper>
                <ImageTitle>Optimisée</ImageTitle>
                <ImagePreview src={convertedDataURL} alt="Optimized" />
                <InfoText>Taille : {convertedSize} octets</InfoText>
                {originalSize > 0 && (
                  <InfoText>Réduction : {sizeReduction}%</InfoText>
                )}
                <DownloadButton onClick={downloadImage}>Télécharger</DownloadButton>
              </ImageWrapper>
            )}
          </ImagesContainer>
        </RightColumn>
      </LayoutContainer>

      <canvas ref={canvasRef} style={{display:'none'}}></canvas>
    </SaaSContainer>
  );
};

export default SaaS5;
