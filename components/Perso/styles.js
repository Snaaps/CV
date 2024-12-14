// styles.js
import styled from "styled-components";

export const PersoContainer = styled.div`
  width: 100%;
  height: 100vh;
  border-radius: 20px;
  background: linear-gradient(to bottom right, #f0f2f5, #dcdcdc);
  display: flex;
  flex-direction: column;
  font-family: "Arial", sans-serif;
  color: #2c3e50;
  overflow: hidden; /* Gérer le défilement via ContentArea */
`;

export const TabsContainer = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 20px;
  border-bottom: 1px solid #bdc3c7;
  padding: 10px 20px;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  
  scrollbar-width: thin;
  scrollbar-color: #bdc3c7 transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #bdc3c7;
    border-radius: 3px;
  }
`;

export const Tab = styled.div`
  margin: 0 15px;
  padding: 10px 20px;
  display: inline-block;
  cursor: pointer;
  border-radius: 20px;
  background: ${(props) => (props.$active ? "#6f2cf7" : "transparent")};
  color: ${(props) => (props.$active ? "#ffffff" : "#2c3e50")};
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  font-weight: bold;
  white-space: nowrap;
  
  &:hover {
    background-color: #6f2cf7;
    color: #ffffff;
    box-shadow: 0px 4px 10px rgba(111, 44, 247, 0.3);
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto; 
  padding: 40px;
  /* Retirer display: flex et les propriétés de centrage pour permettre un défilement vertical correct */
`;

export const SaaSContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  padding: 30px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto; /* Centrer horizontalement */
`;

export const SaaSTitle = styled.h2`
  color: #6f2cf7;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

export const SaaSDescription = styled.p`
  margin-bottom: 30px;
  text-align: center;
  color: #555;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    min-height: 150px;
    padding: 10px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    resize: vertical;
    margin-bottom: 20px;
    font-size: 14px;
    font-family: "Courier New", monospace;
  }

  input {
    flex: 1;
    padding: 10px 15px;
    margin-right: 10px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  button {
    padding: 10px 20px;
    background: #6f2cf7;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    align-self: flex-start;
    transition: background 0.3s;

    &:hover {
      background: #5a23c4;
    }
  }
`;

export const DownloadButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #6f2cf7;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: #5a23c4;
  }
`;

export const QrContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
