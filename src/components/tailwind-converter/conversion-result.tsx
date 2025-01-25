import { useEffect, useState } from "react";

interface Props {
  result: {
    css: string;
    unknownClasses: string[];
  };
}

const ConversionResult = ({ result }: Props) => {
  const [copied, setCopied] = useState(false);
  const [previousCSS, setPreviousCSS] = useState("");

  const handleCopyCSS = () => {
    navigator.clipboard.writeText(result.css).then(() => {
      setCopied(true);
    });
  };

  useEffect(() => {
    if (result.css !== previousCSS) {
      setCopied(false);
      setPreviousCSS(result.css);
    }
  }, [result.css, previousCSS]);

  return (
    <div className='max-w-xl mx-auto mt-6 bg-white p-6 rounded-lg shadow-md'>
      <div className='mb-4'>
        <h2 className='text-xl font-semibold mb-2 text-black'>Conversion Result</h2>
        {result.unknownClasses.length > 0 && (
          <div className='bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4'>
            <p className='font-medium text-yellow-700'>Warning: Some classes could not be converted:</p>
            <ul className='list-disc list-inside text-yellow-700'>
              {result.unknownClasses.map((cls, index) => (
                <li key={index}>{cls}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className='relative'>
        <pre className='bg-gray-100 text-black p-4 rounded-md overflow-x-auto text-sm min-h-[20px] w-full text-wrap'>
          <code lang='css'>{result.css}</code>
        </pre>
        <button
          onClick={handleCopyCSS}
          className='absolute top-2 right-2 bg-blue-500 opacity-30 hover:opacity-90 transition-opacity text-white py-1 px-2 rounded-md text-xs hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          {copied ? "Copied!" : "Copy CSS"}
        </button>
      </div>
    </div>
  );
};

export default ConversionResult;
