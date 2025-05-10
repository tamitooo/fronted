import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Bienvenido a ConectaTec</h1>
        <p className="text-xl text-gray-600 mb-8">La plataforma de conexión estudiantil líder</p>
        
        <div className="flex justify-center gap-4">
          <Link 
            to="/login" 
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg"
          >
            Iniciar Sesión
          </Link>
          <Link 
            to="/register" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            Registrarse
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestras Características</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {title: "Conexiones", desc: "Conecta con compañeros", icon: "👥"},
            {title: "Proyectos", desc: "Colabora en equipo", icon: "👨‍💻"},
            {title: "Recursos", desc: "Accede a materiales", icon: "📚"}
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;