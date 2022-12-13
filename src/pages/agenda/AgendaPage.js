import React from "react";
import "../../build/styles.css";
import AppAgenda from "./AppAgenda";
import ContextWrapper from "../../contexts/ContextWrapper";

function AgendaPage() {
return(  

  <React.StrictMode>
    <ContextWrapper>
      <AppAgenda />
    </ContextWrapper>
  </React.StrictMode>
);
}

export default AgendaPage;