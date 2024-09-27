'use client'
// hooks/useWow.ts
import { useEffect } from "react";
import { WOW } from "wowjs";

const useWow = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
    return () => {
      wow  
    };
  }, []);
};

export default useWow;