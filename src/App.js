import React from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Introduce yourself here. Mention your interests, background, and any other information you want to share.</p>
        </section>
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
