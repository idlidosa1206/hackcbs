import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "./pages/Popup";
// import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    {/* <ChakraProvider> */}
      <Popup />
    {/* </ChakraProvider> */}
  </React.StrictMode>
);
