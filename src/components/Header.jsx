import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Ibrahem Elsherif</h1>
        <p className="text-xl text-gray-300 mb-6">Machine Learning Engineer</p>
        <div className="flex space-x-4">
          <a href="https://github.com" className="text-2xl hover:text-gray-300 transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" className="text-2xl hover:text-gray-300 transition-colors">
            <FaLinkedin />
          </a>
          <a href="mailto:ebrahem.hesham.ahmed@gmail.com" className="text-2xl hover:text-gray-300 transition-colors">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </header>
  );
}