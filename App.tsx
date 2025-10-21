
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-secondary">
      <Header />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
