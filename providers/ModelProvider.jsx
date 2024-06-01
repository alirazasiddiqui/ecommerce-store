"use client";
import PreviewModel from "@/components/ui/preview-model";
import { useState, useEffect } from "react";

const ModelProvider = () => {
  const [mount, setmount] = useState(false);
  useEffect(() => {
    setmount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <div>
      <PreviewModel />
    </div>
  );
};

export default ModelProvider;
