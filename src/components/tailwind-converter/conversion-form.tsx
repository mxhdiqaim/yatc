interface Props {
  onSubmit: (classes: string) => void;
  inputClasses: string;
  setInputClasses: (classes: string) => void;
  handleClear: () => void;
}

const ConversionForm = ({ onSubmit, inputClasses, setInputClasses, handleClear }: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputClasses) return;
    // Trim and remove any extra whitespace
    const cleanedClasses = inputClasses.trim().replace(/\s+/g, " ");
    onSubmit(cleanedClasses);
  };

  const handlePasteExample = () => {
    setInputClasses("bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600");
  };

  return (
    <div className='max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='tailwind-classes' className='block text-sm font-medium text-gray-700 mb-2'>
            Enter Tailwind Classes
          </label>
          <textarea
            id='tailwind-classes'
            value={inputClasses}
            onChange={(e) => setInputClasses(e.target.value)}
            rows={4}
            className='w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Paste your Tailwind classes here (e.g., bg-blue-500 text-white p-4)'
            aria-describedby='classes-hint'
          />
          <p id='classes-hint' className='mt-2 text-sm text-gray-500'>
            Separate multiple classes with spaces
          </p>
        </div>
        <div className='flex space-x-4'>
          <button
            type='submit'
            className='flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          >
            Convert to CSS
          </button>
          <button
            type='button'
            onClick={handleClear}
            className='flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
          >
            Clear
          </button>
          <button
            type='button'
            onClick={handlePasteExample}
            className='flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500'
          >
            Example
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConversionForm;
