export default function Projects() {
  const projects = [
    {
      title: "Stock Price Prediction using LSTM",
      description: "A deep learning project predicting stock prices based on historical data using LSTM networks.",
      tech: ["Python", "TensorFlow", "Keras"],
      link: "#"
    },
    {
      title: "Tweets Sentiment Analysis using LSTM",
      description: "An NLP project analyzing the sentiment of tweets using LSTM models for text classification.",
      tech: ["Python", "NLTK", "TensorFlow"],
      link: "#"
    },
    {
      title: "Transfer Learning with ResNet for Arabic Alphabet Sign Language",
      description: "A computer vision project leveraging ResNet for recognizing Arabic Alphabet Sign Language using transfer learning.",
      tech: ["Python", "PyTorch", "OpenCV"],
      link: "#"
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-blue-600 hover:text-blue-800">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}