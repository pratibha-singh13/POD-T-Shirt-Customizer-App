import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ImageUpload from './components/ImageUpload';
import TextEditor from './components/TextEditor';
import ThemeSwitcher from './components/ThemeSwitcher';
import TShirtPreview from './components/TShirtPreview';
import CustomizationForm from './components/CustomizationForm';

import { computeScaleFromBMI } from './utils/bmiUtils';
import { getOverlayStyles } from './utils/overlayUtils';

function AppContent() {
  const { theme } = useTheme();
  const [designImage, setDesignImage] = useState(null);
  const [customText, setCustomText] = useState('');
  const [build, setBuild] = useState('athletic');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(80);

  const scale = computeScaleFromBMI(height, weight);
  const overlayStyles = getOverlayStyles(build);

  return (
    <div className={`min-h-screen p-4 md:p-10 transition-all duration-300 ${theme.className}`}>
      <div className="max-w-4xl mx-auto space-y-6">


        <h1 className="text-center text-2xl font-bold text-gray-700">
          POD T-Shirt Customizer
        </h1>

        <TShirtPreview
          gender={gender}
          build={build}
          height={height}
          weight={weight}
          designImage={designImage}
          customText={customText}
          scale={scale}
          overlayStyles={overlayStyles}
        />

        <p className="text-center text-sm text-gray-500">
          BMI: {(weight / ((height / 100) ** 2)).toFixed(1)}
        </p>

        <ThemeSwitcher />
        <ImageUpload onUpload={setDesignImage} />

        <CustomizationForm
          gender={gender}
          setGender={setGender}
          height={height}
          setHeight={setHeight}
          weight={weight}
          setWeight={setWeight}
          build={build}
          setBuild={setBuild}
        />

        <TextEditor onTextChange={setCustomText} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
