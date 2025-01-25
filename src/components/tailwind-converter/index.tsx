"use client";

import { convertTailwindToCSS } from "@/lib/tailwind";
import { useState } from "react";
import ConversionForm from "./conversion-form";
import ConversionResult from "./conversion-result";

interface ResultI {
  css: string;
  unknownClasses: string[];
}

const TailwindConverter = () => {
  const [result, setResult] = useState<ResultI | null>(null);
  const [inputClasses, setInputClasses] = useState("");

  const handleConversion = (classes: string) => {
    const converted = convertTailwindToCSS(classes);

    setResult(converted);
  };

  const handleClear = () => {
    // if (!inputClasses) return;

    setResult(null);
    setInputClasses("");
  };

  return (
    <div className='container mx-auto p-4'>
      <ConversionForm {...{ handleClear, inputClasses, setInputClasses, onSubmit: handleConversion }} />
      {result && <ConversionResult result={result} />}
    </div>
  );
};

export default TailwindConverter;
