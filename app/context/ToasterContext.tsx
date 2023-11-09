"use client";

import { Toaster } from "react-hot-toast";

const ToasterContext = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: "",
        duration: 5000,
        style: {
          background: "#363636",
          color: "#fff",
        },
      }}
    />
  );
};

export default ToasterContext;
