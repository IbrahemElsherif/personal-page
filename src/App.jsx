import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Projects />
      <Contact />
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Ibrahem elsherif. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;