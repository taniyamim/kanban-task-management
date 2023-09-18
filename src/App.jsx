import React, { useState } from 'react';
import Header from './components/Header';
import Center from './components/Center';

function App() {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  return (
    <div>
      {/* Header section */}

      <Header
        setIsBoardModalOpen={setIsBoardModalOpen}
        isBoardModalOpen={isBoardModalOpen}
        ></Header>

      {/* center section */}
      <Center></Center>
    </div>
  );
}

export default App;