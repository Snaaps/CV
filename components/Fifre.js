// Fifre.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getFirestore, collection, getDocs } from "firebase/firestore"; 

const FifreContainer = styled.div`
  padding: 20px;
  background: #ecf0f1;
  border-radius: 8px;
  border: 1px solid #bdc3c7;
  width: auto;
  min-width: 70vw;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
`;

const TitledText = styled.h2`
  color: #6f2cf7;
`;

const SearchInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  width: 100%;
`;

const PartitionsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const PartitionItem = styled.a`
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #bdc3c7;
  color: #2c3e50;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;
const Fifre = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [partitionsData, setPartitionsData] = useState([]); 
    const [filteredPartitions, setFilteredPartitions] = useState([]);
  
    useEffect(() => {
      const fetchPartitions = async () => {
        const db = getFirestore(); 
        const querySnapshot = await getDocs(collection(db, "partitions"));
        const partitions = [];
        querySnapshot.forEach((doc) => {
          partitions.push({ id: doc.id, ...doc.data() });
        });
        setPartitionsData(partitions);
        setFilteredPartitions(partitions); 
      };
  
      fetchPartitions();
    }, []);
  
    useEffect(() => {
      const results = partitionsData.filter(part =>
        part.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPartitions(results);
    }, [searchTerm, partitionsData]);
  
    return (
      <FifreContainer>
        <TitledText>Répertoire des Partitions de Fifre</TitledText>
        <SearchInput
          type="text"
          placeholder="Rechercher une partition..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <PartitionsList>
          {filteredPartitions.map((partition) => (
            <PartitionItem
              key={partition.id}
              href={`partition.html?id=${partition.id}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <h3>{partition.title}</h3>
              <p>Origine: {partition.origine}</p>
            </PartitionItem>
          ))}
        </PartitionsList>
      </FifreContainer>
    );
  };
  
  export default Fifre;