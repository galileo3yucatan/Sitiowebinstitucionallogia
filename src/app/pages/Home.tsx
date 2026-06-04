import { MessageSquare, Calendar, Users, BookOpen, Facebook, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import FacebookPostsCarousel from '../components/FacebookPostsCarousel';

export default function Home() {
  // Rutas de las imágenes locales
  const logoGalileo = '/src/assets/207f63723d2cae9a48995db2e974c005a0ad8f00.png';
  const victorRendon = '/src/assets/79c93fea4f8c1801b2e1ca110e18f26bccc265e3.png';
  const davidVivas = '/src/assets/5cd884a7bc4504f8cf6049c4054a373c7f18cb13.png';
  const enriqueAznar = '/src/assets/d8efea198c25a0cc4c0fd397c9db9d2bb75cd8a6.png';

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/529618009942?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20la%20Logia%20Galileo%20Nº%203', '_blank');
  };

  const handleFacebook = () => {
    window.open('https://www.facebook.com/Galileo03', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
              <img src={logoGalileo} alt="Logo" className="w-12 h-12 object-contain" />
              <span 
                className="text-lg"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  color: '#2B2F9E',
                  fontWeight: 600
                }}
              >
                R∴ L∴ S∴ Galileo Nº 3
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="transition-colors hover:opacity-70"
                style={{ color: '#2B2F9E' }}
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('quienes-somos')}
                className="transition-colors hover:opacity-70"
                style={{ color: '#2B2F9E' }}
              >
                Quiénes Somos
              </button>
              <button
                onClick={() => scrollToSection('historia')}
                className="transition-colors hover:opacity-70"
                style={{ color: '#2B2F9E' }}
              >
                Historia
              </button>
              <button
                onClick={() => scrollToSection('publicaciones')}
                className="transition-colors hover:opacity-70"
                style={{ color: '#2B2F9E' }}
              >
                Publicaciones
              </button>
              <button
                onClick={() => scrollToSection('personajes')}
                className="transition-colors hover:opacity-70"
                style={{ color: '#2B2F9E' }}
              >
                Personajes
              </button>
              <button
                onClick={() => scrollToSection('ingreso')}
                className="transition-colors hover:opacity-70"
                style={{ color: '#2B2F9E' }}
              >
                Ingreso
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="px-6 py-2 transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#FFE31A',
                  color: '#2B2F9E',
                  fontWeight: 600
                }}
              >
                Contacto
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: '#2B2F9E' }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4" style={{ borderColor: '#E63946' }}>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-left py-2 transition-colors hover:opacity-70"
                  style={{ color: '#2B2F9E' }}
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection('quienes-somos')}
                  className="text-left py-2 transition-colors hover:opacity-70"
                  style={{ color: '#2B2F9E' }}
                >
                  Quiénes Somos
                </button>
                <button
                  onClick={() => scrollToSection('historia')}
                  className="text-left py-2 transition-colors hover:opacity-70"
                  style={{ color: '#2B2F9E' }}
                >
                  Historia
                </button>
                <button
                  onClick={() => scrollToSection('publicaciones')}
                  className="text-left py-2 transition-colors hover:opacity-70"
                  style={{ color: '#2B2F9E' }}
                >
                  Publicaciones
                </button>
                <button
                  onClick={() => scrollToSection('personajes')}
                  className="text-left py-2 transition-colors hover:opacity-70"
                  style={{ color: '#2B2F9E' }}
                >
                  Personajes
                </button>
                <button
                  onClick={() => scrollToSection('ingreso')}
                  className="text-left py-2 transition-colors hover:opacity-70"
                  style={{ color: '#2B2F9E' }}
                >
                  Ingreso
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-left py-2 transition-colors hover:opacity-70"
                  style={{ color: '#2B2F9E' }}
                >
                  Contacto
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="inicio"
        className="min-h-screen flex flex-col items-center justify-center px-8 py-20 text-white relative"
        style={{ 
          background: 'linear-gradient(135deg, #1a1d5e 0%, #2B2F9E 50%, #3d42b8 100%)',
          paddingTop: '120px'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo real */}
          <div className="w-64 h-64 mx-auto mb-12">
            <img src={logoGalileo} alt="Logo Galileo Nº 3" className="w-full h-full object-contain drop-shadow-2xl" />
          </div>
          
          <h1 
            className="mb-6 tracking-wide"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '3.5rem',
              lineHeight: '1.2',
              fontWeight: 600
            }}
          >
            R∴ L∴ S∴ Galileo Nº 3
          </h1>
          
          <p className="mb-4 text-xl tracking-wide opacity-90">
            Mérida, Yucatán — Rito Escocés Antiguo y Aceptado
          </p>
          
          <p 
            className="mb-16 text-lg italic tracking-wider opacity-90"
            style={{ color: '#FFE31A' }}
          >
            "Eppur si muove"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleWhatsApp}
              className="px-10 py-4 rounded-none border-2 transition-all duration-300 flex items-center gap-3 hover:bg-white min-w-[240px] justify-center"
              style={{ borderColor: '#FFE31A', color: 'white' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#2B2F9E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
              }}
            >
              <MessageSquare className="w-5 h-5" />
              <span className="tracking-wide">WhatsApp</span>
            </button>
            
            <button
              onClick={handleFacebook}
              className="px-10 py-4 rounded-none transition-all duration-300 flex items-center gap-3 min-w-[240px] justify-center hover:opacity-90"
              style={{ 
                backgroundColor: '#FFE31A', 
                color: '#2B2F9E',
                border: '2px solid #FFE31A',
                fontWeight: 600
              }}
            >
              <Facebook className="w-5 h-5" />
              <span className="tracking-wide">Facebook</span>
            </button>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 border-2 rotate-45" style={{ borderColor: '#FFE31A', opacity: 0.3 }}></div>
        </div>
      </section>

      {/* Quiénes Somos Section */}
      <section id="quienes-somos" className="py-24 px-8 bg-white" style={{ scrollMarginTop: '80px' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="mb-12 text-black"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '3rem',
              fontWeight: 600
            }}
          >
            Quiénes Somos
          </h2>
          
          <div className="w-24 h-1 mx-auto mb-12" style={{ backgroundColor: '#E63946' }}></div>
          
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#333' }}>
            La Respetable Logia Simbólica Galileo Nº 3 es un Taller masónico dedicado al perfeccionamiento moral, 
            intelectual y espiritual de sus miembros. Trabajamos bajo los principios universales de Libertad, 
            Igualdad y Fraternidad, cultivando las virtudes y el conocimiento.
          </p>
          
          <p className="text-lg leading-relaxed" style={{ color: '#333' }}>
            Nuestra labor se fundamenta en la búsqueda de la verdad, el respeto a la diversidad de pensamiento 
            y el compromiso con el desarrollo de la sociedad yucateca y mexicana.
          </p>
        </div>
      </section>

      {/* Historia Section */}
      <section id="historia" className="py-24 px-8" style={{ backgroundColor: '#f8f9fa', scrollMarginTop: '80px' }}>
        <div className="max-w-6xl mx-auto">
          <h2 
            className="mb-12 text-center text-black"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '3rem',
              fontWeight: 600
            }}
          >
            Historia
          </h2>
          
          <div className="w-24 h-1 mx-auto mb-20" style={{ backgroundColor: '#E63946' }}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="bg-white p-10 text-center border-t-4" style={{ borderColor: '#E63946' }}>
              <div className="mb-6">
                <Calendar className="w-12 h-12 mx-auto" style={{ color: '#2B2F9E' }} />
              </div>
              <h3 
                className="mb-6 text-black"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.75rem',
                  fontWeight: 600
                }}
              >
                Fundación 1912–1913
              </h3>
              <p className="leading-relaxed" style={{ color: '#555' }}>
                Nuestra Logia fue fundada en los albores del siglo XX, durante un periodo de transformación 
                social en Yucatán. Desde entonces, hemos sido testigos y participantes activos de la historia regional.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 text-center border-t-4" style={{ borderColor: '#E63946' }}>
              <div className="mb-6">
                <BookOpen className="w-12 h-12 mx-auto" style={{ color: '#2B2F9E' }} />
              </div>
              <h3 
                className="mb-6 text-black"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.75rem',
                  fontWeight: 600
                }}
              >
                Proyección Intelectual
              </h3>
              <p className="leading-relaxed" style={{ color: '#555' }}>
                A lo largo de las décadas, la Logia Galileo ha sido un faro de pensamiento libre y progresista, 
                acogiendo a intelectuales, profesionales y librepensadores comprometidos con el bien común.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 text-center border-t-4" style={{ borderColor: '#E63946' }}>
              <div className="mb-6">
                <Users className="w-12 h-12 mx-auto" style={{ color: '#2B2F9E' }} />
              </div>
              <h3 
                className="mb-6 text-black"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.75rem',
                  fontWeight: 600
                }}
              >
                Reactivación 2023
              </h3>
              <p className="leading-relaxed" style={{ color: '#555' }}>
                Tras un periodo de receso, la Logia Galileo retoma sus trabajos con renovado vigor, 
                manteniendo viva la tradición masónica y adaptándose a los desafíos del siglo XXI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personajes Destacados Section */}
      <section id="personajes" className="py-24 px-8 bg-white" style={{ scrollMarginTop: '80px' }}>
        <div className="max-w-5xl mx-auto">
          <h2 
            className="mb-12 text-center text-black"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '3rem',
              fontWeight: 600
            }}
          >
            Personajes Destacados
          </h2>
          
          <div className="w-24 h-1 mx-auto mb-20" style={{ backgroundColor: '#E63946' }}></div>
          
          <div className="space-y-12">
            {/* Personaje 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 border-l-4" style={{ borderColor: '#FFE31A' }}>
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-40 h-52 overflow-hidden rounded-full">
                  <img src={victorRendon} alt="Víctor A. Rendón" className="w-full h-full object-cover" style={{ filter: 'sepia(20%)' }} />
                </div>
              </div>
              <div className="flex-1">
                <h3 
                  className="mb-4 text-black"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.75rem',
                    fontWeight: 600
                  }}
                >
                  Víctor A. Rendón
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                  Médico yucateco comprometido con la transformación social durante el periodo revolucionario. 
                  Fue Venerable Maestro de la Logia Galileo Nº 3 en 1912 y Primer Gran Maestro de la Gran Logia 
                  "La Oriental" en 1913. Participó en movimientos antirreeleccionistas y, en 1915, asumió la 
                  Secretaría de Gobierno bajo el general Salvador Alvarado, impulsando la modernización de Yucatán.
                </p>
              </div>
            </div>

            {/* Personaje 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 border-l-4" style={{ borderColor: '#FFE31A' }}>
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-40 h-52 overflow-hidden rounded-full">
                  <img src={davidVivas} alt="David Vivas Romero" className="w-full h-full object-cover" style={{ filter: 'sepia(20%)' }} />
                </div>
              </div>
              <div className="flex-1">
                <h3 
                  className="mb-4 text-black"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.75rem',
                    fontWeight: 600
                  }}
                >
                  David Vivas Romero
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                  Educador notable nacido en Tizimín en 1878. Impulsó la formación de docentes y la expansión 
                  educativa en Yucatán. En 1921 ingresó a la Logia Galileo Nº 3 y colaboró en la visita de José 
                  Vasconcelos, evento que culminó con la fundación de la Universidad Nacional del Sureste en 1922, 
                  donde fue su primer Secretario. Falleció en 1935.
                </p>
              </div>
            </div>

            {/* Personaje 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 border-l-4" style={{ borderColor: '#FFE31A' }}>
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-40 h-52 overflow-hidden rounded-full">
                  <img src={enriqueAznar} alt="Enrique Aznar Mendoza" className="w-full h-full object-cover" style={{ filter: 'sepia(20%)' }} />
                </div>
              </div>
              <div className="flex-1">
                <h3 
                  className="mb-4 text-black"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.75rem',
                    fontWeight: 600
                  }}
                >
                  Enrique Aznar Mendoza
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                  Abogado y poeta yucateco, rector de la Universidad de Yucatán entre 1942 y 1946. Autor y periodista 
                  cultural, escribió sobre la industria henequenera y publicó poesía bajo el seudónimo "Serafín Blanco". 
                  En 1912 ingresó a la Masonería y fue Venerable Maestro de la Logia Galileo Nº 3 en 1914, manteniéndose 
                  activo hasta alcanzar el Supremo Consejo del Grado 33.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Quieres ingresar a la masonería? Section */}
      <section id="ingreso" className="py-24 px-8" style={{ backgroundColor: '#f8f9fa', scrollMarginTop: '80px' }}>
        <div className="max-w-6xl mx-auto">
          <h2 
            className="mb-12 text-center text-black"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '3rem',
              fontWeight: 600
            }}
          >
            ¿Quieres ingresar a la masonería?
          </h2>
          
          <div className="w-24 h-1 mx-auto mb-16" style={{ backgroundColor: '#E63946' }}></div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg leading-relaxed text-center" style={{ color: '#333' }}>
              Antes de decidir unirse a la masonería, una persona debe considerar varios factores para asegurarse 
              de que esta organización y sus principios se alinean con sus propios valores y expectativas. 
              Aquí hay algunas consideraciones clave:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Consideración 1 */}
            <div className="bg-white p-8 border-l-4" style={{ borderColor: '#2B2F9E' }}>
              <h3 
                className="mb-4 text-black"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Comprender los principios y valores masónicos
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                Investigar y entender los principios fundamentales de la masonería, tales como la fraternidad, 
                la moralidad, la caridad, y la búsqueda de la verdad. Asegurarse de que estos valores resuenan 
                con sus propias creencias y ética personal.
              </p>
            </div>

            {/* Consideración 2 */}
            <div className="bg-white p-8 border-l-4" style={{ borderColor: '#2B2F9E' }}>
              <h3 
                className="mb-4 text-black"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Investigación personal
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                Leer libros, artículos y recursos en línea sobre la historia, filosofía y prácticas de la masonería. 
                Comprender los rituales, símbolos y grados masónicos puede proporcionar una visión más clara de lo 
                que implica ser un masón.
              </p>
            </div>

            {/* Consideración 3 */}
            <div className="bg-white p-8 border-l-4" style={{ borderColor: '#2B2F9E' }}>
              <h3 
                className="mb-4 text-black"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Creencia en un Ser Supremo
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                La mayoría de las logias masónicas requieren una creencia en un Ser Supremo o en un principio creador, 
                aunque no se especifica una religión particular. Evaluar si esta creencia se alinea con sus propias 
                convicciones espirituales.
              </p>
            </div>

            {/* Consideración 4 */}
            <div className="bg-white p-8 border-l-4" style={{ borderColor: '#2B2F9E' }}>
              <h3 
                className="mb-4 text-black"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Tiempo y compromiso
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                Considerar el tiempo necesario para participar activamente en una logia masónica, que incluye asistir 
                a reuniones regulares, eventos y estudios masónicos. Asegurarse de poder cumplir con estos compromisos 
                sin que interfieran negativamente con sus responsabilidades personales y profesionales.
              </p>
            </div>

            {/* Consideración 5 */}
            <div className="bg-white p-8 border-l-4" style={{ borderColor: '#2B2F9E' }}>
              <h3 
                className="mb-4 text-black"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Motivaciones personales
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                Reflexionar sobre sus razones para unirse a la masonería. La masonería debe ser vista como una oportunidad 
                para el crecimiento personal y el servicio a la comunidad, no como un medio para obtener beneficios 
                materiales o profesionales.
              </p>
            </div>

            {/* Consideración 6 */}
            <div className="bg-white p-8 border-l-4" style={{ borderColor: '#2B2F9E' }}>
              <h3 
                className="mb-4 text-black"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Proceso de ingreso
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                Informarse sobre el proceso de solicitud, que incluye presentar una solicitud formal, someterse a 
                entrevistas y una investigación de antecedentes, y participar en una ceremonia de iniciación.
              </p>
            </div>

            {/* Consideración 7 */}
            <div className="bg-white p-8 border-l-4" style={{ borderColor: '#2B2F9E' }}>
              <h3 
                className="mb-4 text-black"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Expectativas de la logia
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                Entender las expectativas que la logia tiene de sus miembros en términos de participación, conducta 
                y contribuciones. Cada logia puede tener requisitos específicos que los aspirantes deben conocer y 
                estar dispuestos a cumplir.
              </p>
            </div>

            {/* Consideración 8 */}
            <div className="bg-white p-8 border-l-4" style={{ borderColor: '#2B2F9E' }}>
              <h3 
                className="mb-4 text-black"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Compatibilidad con valores personales
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                Evaluar si los principios y prácticas de la masonería son compatibles con sus propios valores y creencias. 
                La masonería enfatiza la moralidad, la ética y el desarrollo personal.
              </p>
            </div>

            {/* Consideración 9 */}
            <div className="bg-white p-8 border-l-4" style={{ borderColor: '#2B2F9E' }}>
              <h3 
                className="mb-4 text-black"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Impacto en la vida personal y familiar
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                Considerar cómo la membresía masónica podría afectar su vida personal y familiar. Es importante tener 
                el apoyo de su familia y asegurarse de que el compromiso con la logia no cause conflictos significativos 
                con sus responsabilidades personales y profesionales.
              </p>
            </div>

            {/* Consideración 10 */}
            <div className="bg-white p-8 border-l-4" style={{ borderColor: '#2B2F9E' }}>
              <h3 
                className="mb-4 text-black"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Hablar con miembros actuales
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                Conversar con masones actuales puede proporcionar una perspectiva más realista sobre la vida dentro de 
                la masonería. Los miembros pueden compartir sus experiencias personales y responder preguntas específicas 
                sobre la organización.
              </p>
            </div>

            {/* Consideración 11 */}
            <div className="bg-white p-8 border-l-4" style={{ borderColor: '#2B2F9E' }}>
              <h3 
                className="mb-4 text-black"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Finanzas
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                Considerar los costos asociados con la membresía, que pueden incluir cuotas de iniciación, cuotas anuales 
                y otros gastos relacionados con la participación en actividades y eventos de la logia.
              </p>
            </div>

            {/* Consideración 12 */}
            <div className="bg-white p-8 border-l-4" style={{ borderColor: '#2B2F9E' }}>
              <h3 
                className="mb-4 text-black"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Confidencialidad y secretismo
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                Entender la importancia de la confidencialidad y el secreto dentro de la masonería. Los masones están 
                comprometidos a mantener ciertos aspectos de sus prácticas y rituales en privado.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#333' }}>
              Evaluar estas consideraciones puede ayudar a una persona a tomar una decisión informada y consciente 
              sobre su deseo de unirse a la masonería. Es un compromiso significativo que debe ser abordado con 
              seriedad y reflexión.
            </p>
            
            <p className="text-lg leading-relaxed text-center" style={{ color: '#2B2F9E', fontWeight: 600 }}>
              Tras haber evaluado los puntos anteriores y pensando que no tienes ningún inconveniente con lo que vives 
              actualmente en tu vida, piensa que el siguiente paso es revisar los requisitos necesarios para poder 
              ingresar a la masonería.
            </p>
          </div>
        </div>
      </section>

      {/* Publicaciones Recientes Section */}
      <FacebookPostsCarousel />

      {/* Contacto Section */}
      <section id="contacto" className="py-24 px-8" style={{ backgroundColor: '#f8f9fa', scrollMarginTop: '80px' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="mb-12 text-black"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '3rem',
              fontWeight: 600
            }}
          >
            Contacto
          </h2>
          
          <div className="w-24 h-1 mx-auto mb-16" style={{ backgroundColor: '#E63946' }}></div>
          
          <p className="text-lg leading-relaxed mb-12" style={{ color: '#333' }}>
            Para conocer más sobre la Logia Galileo Nº 3 y nuestras actividades, 
            contáctanos a través de nuestras redes sociales.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleWhatsApp}
              className="px-10 py-4 rounded-none border-2 transition-all duration-300 flex items-center gap-3 min-w-[240px] justify-center"
              style={{ borderColor: '#2B2F9E', color: '#2B2F9E', backgroundColor: 'white' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2B2F9E';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#2B2F9E';
              }}
            >
              <MessageSquare className="w-5 h-5" />
              <span className="tracking-wide">WhatsApp</span>
            </button>
            
            <button
              onClick={handleFacebook}
              className="px-10 py-4 rounded-none transition-all duration-300 flex items-center gap-3 min-w-[240px] justify-center hover:opacity-90"
              style={{ 
                backgroundColor: '#2B2F9E', 
                color: 'white',
                border: '2px solid #2B2F9E',
                fontWeight: 600
              }}
            >
              <Facebook className="w-5 h-5" />
              <span className="tracking-wide">Facebook</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 text-white text-center" style={{ backgroundColor: '#2B2F9E' }}>
        <div className="max-w-4xl mx-auto">
          <p className="mb-4 opacity-90">
            © {new Date().getFullYear()} R∴ L∴ S∴ Galileo Nº 3 — Todos los derechos reservados
          </p>
          <Link 
            to="/aviso-privacidad" 
            className="opacity-80 hover:opacity-100 transition-opacity underline"
            style={{ color: '#FFE31A' }}
          >
            Aviso de Privacidad
          </Link>
        </div>
      </footer>
    </div>
  );
}
