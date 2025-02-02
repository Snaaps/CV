// Perso.js
import React, { useState } from "react";
import { 
  PersoContainer, 
  TabsContainer, 
  Tab, 
  ContentArea 
} from "./styles";
import SaaS1 from "./saas/SaaS1";
import SaaS2 from "./saas/SaaS2";
import SaaS3 from "./saas/SaaS3";
import SaaS4 from "./saas/SaaS4";
import SaaS5 from "./saas/SaaS5";
import SaaS6 from "./saas/SaaS6";
import SaaS7 from "./saas/SaaS7";
import SaaS8 from "./saas/SaaS8";
import SaaS9 from "./saas/SaaS9";
import PowensScreen from "../../src/powens";

const Perso = () => {
  const [activeTab, setActiveTab] = useState("saas1");

  let contentToDisplay;
  if (activeTab === "saas1") {
    contentToDisplay = <SaaS1 />;
  } else if (activeTab === "saas2") {
    contentToDisplay = <SaaS2 />;
  } else if (activeTab === "saas3") {
    contentToDisplay = <SaaS3 />;
  } else if (activeTab === "saas4") {
    contentToDisplay = <SaaS4 />;
  } else if (activeTab === "saas5") {
    contentToDisplay = <SaaS5 />;
  } else if (activeTab === "saas6") {
    contentToDisplay = <SaaS6 />;
  } else if (activeTab === "saas7") {
    contentToDisplay = <SaaS7 />;
  } else if (activeTab === "saas8") {
    contentToDisplay = <SaaS8 />;
  } else if (activeTab === "saas9") {
    contentToDisplay = <SaaS9 />;
  }

  return (
    <PersoContainer>
      <TabsContainer>
        <Tab $active={activeTab === "saas1"} onClick={() => setActiveTab("saas1")}>
          QR Code
        </Tab>
        <Tab $active={activeTab === "saas2"} onClick={() => setActiveTab("saas2")}>
          JSON → CSV
        </Tab>
        <Tab $active={activeTab === "saas3"} onClick={() => setActiveTab("saas3")}>
          Couleur
        </Tab>
        <Tab $active={activeTab === "saas4"} onClick={() => setActiveTab("saas4")}>
          Couleur texte
        </Tab>
        <Tab $active={activeTab === "saas5"} onClick={() => setActiveTab("saas5")}>
          Opti Image
        </Tab>
        <Tab $active={activeTab === "saas6"} onClick={() => setActiveTab("saas6")}>
          Font
        </Tab>
        <Tab $active={activeTab === "saas7"} onClick={() => setActiveTab("saas7")}>
          Regex
        </Tab>
        <Tab $active={activeTab === "saas9"} onClick={() => setActiveTab("saas9")}>
          Factures
        </Tab>
      </TabsContainer>
      <ContentArea>{contentToDisplay}</ContentArea>
    </PersoContainer>
  );
};

export default Perso;
