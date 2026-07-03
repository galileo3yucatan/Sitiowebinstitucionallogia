import { MessageSquare, Calendar, Users, BookOpen, Facebook, Menu, X, Compass, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import FacebookPostsCarousel from '../components/FacebookPostsCarousel';

export default function Home() {
  // Rutas de las imágenes locales
  const logoGalileo = '/assets/new_galileo_logo.png';
  const emblemaGalileo = "/assets/EMBLEMA_GALILEO.png"; // Hero
  const victorRendon = '/assets/79c93fea4f8c1801b2e1ca110e18f26bccc265e3.png';
  const davidVivas = '/assets/5cd884a7bc4504f8cf6049c4054a373c7f18cb13.png';
  const enriqueAznar = '/assets/d8efea198c25a0cc4c0fd397c9db9d2bb75cd8a6.png';

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Colores del nuevo diseño premium
  const colors = {
    darkBg: '#0a0e27',
    darkerBg: '#050714',
    gold: '#D4AF37',
    goldLight: '#E5C158',
    goldDark: '#B8960F',
    textLight: '#e5e5e5',
    textGold: '#C9A961'
  };

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
    <div className="min-h-screen" style={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: colors.darkerBg }}>
      {/* Navigation Menu - Premium Dark */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(10, 14, 39, 0.95)' }}>
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
              <img src={logoGalileo} alt="Logo" className="w-12 h-12 object-contain" style={{ filter: 'brightness(1.15) contrast(1.05)' }} />
              <span
                className="text-sm tracking-wider"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  color: colors.gold,
                  fontWeight: 400,
                  letterSpacing: '0.1em'
                }}
              >
                LOGIA GALILEO
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-xs tracking-widest transition-colors hover:opacity-100"
                style={{ color: colors.textLight, opacity: 0.8, letterSpacing: '0.15em' }}
              >
                INICIO
              </button>
              <button
                onClick={() => scrollToSection('quienes-somos')}
                className="text-xs tracking-widest transition-colors hover:opacity-100"
                style={{ color: colors.textLight, opacity: 0.8, letterSpacing: '0.15em' }}
              >
                NOSOTROS
              </button>
              <button
                onClick={() => scrollToSection('historia')}
                className="text-xs tracking-widest transition-colors hover:opacity-100"
                style={{ color: colors.textLight, opacity: 0.8, letterSpacing: '0.15em' }}
              >
                HISTORIA
              </button>
              <button
                onClick={() => scrollToSection('publicaciones')}
                className="text-xs tracking-widest transition-colors hover:opacity-100"
                style={{ color: colors.textLight, opacity: 0.8, letterSpacing: '0.15em' }}
              >
                PUBLICACIONES
              </button>
              <button
                onClick={() => scrollToSection('personajes')}
                className="text-xs tracking-widest transition-colors hover:opacity-100"
                style={{ color: colors.textLight, opacity: 0.8, letterSpacing: '0.15em' }}
              >
                PERSONAJES
              </button>
              <button
                onClick={() => scrollToSection('ingreso')}
                className="text-xs tracking-widest transition-colors hover:opacity-100"
                style={{ color: colors.textLight, opacity: 0.8, letterSpacing: '0.15em' }}
              >
                INGRESO
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-xs tracking-widest transition-colors hover:opacity-100"
                style={{ color: colors.textLight, opacity: 0.8, letterSpacing: '0.15em' }}
              >
                CONTACTO
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: colors.gold }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4" style={{ borderColor: colors.gold, borderOpacity: 0.3 }}>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-left py-2 text-xs tracking-widest transition-colors"
                  style={{ color: colors.textLight, opacity: 0.8 }}
                >
                  INICIO
                </button>
                <button
                  onClick={() => scrollToSection('quienes-somos')}
                  className="text-left py-2 text-xs tracking-widest transition-colors"
                  style={{ color: colors.textLight, opacity: 0.8 }}
                >
                  NOSOTROS
                </button>
                <button
                  onClick={() => scrollToSection('historia')}
                  className="text-left py-2 text-xs tracking-widest transition-colors"
                  style={{ color: colors.textLight, opacity: 0.8 }}
                >
                  HISTORIA
                </button>
                <button
                  onClick={() => scrollToSection('publicaciones')}
                  className="text-left py-2 text-xs tracking-widest transition-colors"
                  style={{ color: colors.textLight, opacity: 0.8 }}
                >
                  PUBLICACIONES
                </button>
                <button
                  onClick={() => scrollToSection('personajes')}
                  className="text-left py-2 text-xs tracking-widest transition-colors"
                  style={{ color: colors.textLight, opacity: 0.8 }}
                >
                  PERSONAJES
                </button>
                <button
                  onClick={() => scrollToSection('ingreso')}
                  className="text-left py-2 text-xs tracking-widest transition-colors"
                  style={{ color: colors.textLight, opacity: 0.8 }}
                >
                  INGRESO
                </button>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-left py-2 text-xs tracking-widest transition-colors"
                  style={{ color: colors.textLight, opacity: 0.8 }}
                >
                  CONTACTO
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Premium Dark with Stars */}
      <section
        id="inicio"
        className="hero-galileo min-h-screen flex flex-col items-center justify-center px-8 pt-28 pb-32 md:pb-20 relative overflow-hidden"
        style={{
          backgroundColor: colors.darkerBg,
          paddingTop: '100px',
        }}
      >
    <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        {/* Símbolo masónico flotante superior */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 opacity-20">

        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Logo sutil arriba */}
{/* Emblema principal */}
        <div className="mx-auto mb-2 flex justify-center">
          <img
            src={emblemaGalileo}
            alt="Emblema Galileo 3"
            className="
              w-64
              md:w-80
              lg:w-[360px]
              xl:w-[400px]
              h-auto
              object-contain
              transition-all
              duration-500
              hover:scale-[1.02]
            "
            style={{
              filter: `
                drop-shadow(0 0 18px rgba(201,164,76,.30))
                drop-shadow(0 0 45px rgba(201,164,76,.18))
              `,
            }}
          />
        </div>

          {/* Título principal grande y dorado */}
          <h1
            className="mb-4 tracking-wider"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: '1.1',
              fontWeight: 400,
              color: colors.gold,
              letterSpacing: '0.1em',
              textShadow: `0 0 30px ${colors.goldDark}40`
            }}
          >
            R∴ L∴ S∴<br />
            GALILEO
          </h1>

          <p
            className="mb-8 tracking-widest"
            style={{
              fontSize: '1.5rem',
              color: colors.gold,
              opacity: 0.9,
              fontWeight: 300,
              letterSpacing: '0.3em'
            }}
          >
            No. 3
          </p>

          {/* Separador decorativo */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px" style={{ backgroundColor: colors.gold, opacity: 0.5 }}></div>
            <div className="w-2 h-2 rotate-45" style={{ border: `1px solid ${colors.gold}`, opacity: 0.7 }}></div>
            <div className="w-12 h-px" style={{ backgroundColor: colors.gold, opacity: 0.5 }}></div>
          </div>

          <p
            className="mb-4 tracking-widest uppercase text-sm"
            style={{
              color: colors.textLight,
              opacity: 0.8,
              letterSpacing: '0.2em'
            }}
          >
            Libertad • Igualdad • Fraternidad
          </p>

          <p
            className="mb-12 italic max-w-2xl mx-auto leading-relaxed"
            style={{
              fontSize: '1.1rem',
              color: colors.textLight,
              opacity: 0.7
            }}
          >
            Desde la búsqueda de la Luz, centinelas con la observación.
          </p>

          <p
            className="mb-16 text-lg italic tracking-wide"
            style={{ color: colors.goldLight, opacity: 0.9 }}
          >
            "Eppur si muove"
          </p>

          {/* Botones elegantes */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button
              onClick={handleWhatsApp}
              className="px-8 py-3 border transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center hover:bg-opacity-10"
              style={{
                borderColor: colors.gold,
                color: colors.gold,
                backgroundColor: 'transparent',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                fontWeight: 400
              }}
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP</span>
            </button>

            <button
              onClick={handleFacebook}
              className="px-8 py-3 transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center hover:opacity-90"
              style={{
                backgroundColor: colors.gold,
                color: colors.darkBg,
                border: 'none',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                fontWeight: 500
              }}
            >
              <Facebook className="w-4 h-4" />
              <span>FACEBOOK</span>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6" style={{ color: colors.gold, opacity: 0.5 }} />
          </div>
        </div>
      </section>

      {/* Quiénes Somos Section - Dark Premium */}
      <section
        id="quienes-somos"
        className="py-24 px-8"
        style={{
          backgroundColor: colors.darkBg,
          scrollMarginTop: '80px',
          borderTop: `1px solid ${colors.gold}20`
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Ícono decorativo */}
          <div className="mb-8">
            <Compass className="w-12 h-12 mx-auto" style={{ color: colors.gold, opacity: 0.7 }} />
          </div>

          <h2
            className="mb-8 tracking-wider uppercase"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              fontWeight: 400,
              color: colors.gold,
              letterSpacing: '0.15em'
            }}
          >
            Quiénes Somos
          </h2>

          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-16 h-px" style={{ backgroundColor: colors.gold, opacity: 0.4 }}></div>
            <div className="w-1.5 h-1.5 rotate-45" style={{ border: `1px solid ${colors.gold}`, opacity: 0.6 }}></div>
            <div className="w-16 h-px" style={{ backgroundColor: colors.gold, opacity: 0.4 }}></div>
          </div>

          <p
            className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto"
            style={{ color: colors.textLight, opacity: 0.85, lineHeight: '1.8' }}
          >
            La Respetable Logia Simbólica Galileo Nº 3 es un Taller masónico dedicado al perfeccionamiento moral,
            intelectual y espiritual de sus miembros. Trabajamos bajo los principios universales de Libertad,
            Igualdad y Fraternidad, cultivando las virtudes y el conocimiento.
          </p>

          <p
            className="text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: colors.textLight, opacity: 0.75, lineHeight: '1.8' }}
          >
            Nuestra labor se fundamenta en la búsqueda de la verdad, el respeto a la diversidad de pensamiento
            y el compromiso con el desarrollo de la sociedad yucateca y mexicana.
          </p>
        </div>
      </section>

      {/* Historia Section - Dark Premium with Cards */}
      <section
        id="historia"
        className="py-24 px-8"
        style={{
          backgroundColor: colors.darkerBg,
          scrollMarginTop: '80px',
          borderTop: `1px solid ${colors.gold}15`
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="mb-8 text-center tracking-wider uppercase"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              fontWeight: 400,
              color: colors.gold,
              letterSpacing: '0.15em'
            }}
          >
            Historia
          </h2>

          <div className="flex items-center justify-center gap-3 mb-20">
            <div className="w-16 h-px" style={{ backgroundColor: colors.gold, opacity: 0.4 }}></div>
            <div className="w-1.5 h-1.5 rotate-45" style={{ border: `1px solid ${colors.gold}`, opacity: 0.6 }}></div>
            <div className="w-16 h-px" style={{ backgroundColor: colors.gold, opacity: 0.4 }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="p-8 text-center border transition-all duration-300 hover:border-opacity-60"
              style={{
                backgroundColor: `${colors.darkBg}dd`,
                borderColor: `${colors.gold}30`,
                borderWidth: '1px'
              }}
            >
              <div className="mb-6">
                <Calendar className="w-10 h-10 mx-auto" style={{ color: colors.gold, opacity: 0.8 }} />
              </div>
              <h3
                className="mb-6 tracking-wide"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: colors.goldLight
                }}
              >
                Fundación 1912–1913
              </h3>
              <p className="leading-relaxed text-sm" style={{ color: colors.textLight, opacity: 0.75 }}>
                Nuestra Logia fue fundada en los albores del siglo XX, durante un periodo de transformación
                social en Yucatán. Desde entonces, hemos sido testigos y participantes activos de la historia regional.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="p-8 text-center border transition-all duration-300 hover:border-opacity-60"
              style={{
                backgroundColor: `${colors.darkBg}dd`,
                borderColor: `${colors.gold}30`,
                borderWidth: '1px'
              }}
            >
              <div className="mb-6">
                <BookOpen className="w-10 h-10 mx-auto" style={{ color: colors.gold, opacity: 0.8 }} />
              </div>
              <h3
                className="mb-6 tracking-wide"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: colors.goldLight
                }}
              >
                Proyección Intelectual
              </h3>
              <p className="leading-relaxed text-sm" style={{ color: colors.textLight, opacity: 0.75 }}>
                A lo largo de las décadas, la Logia Galileo ha sido un faro de pensamiento libre y progresista,
                acogiendo a intelectuales, profesionales y librepensadores comprometidos con el bien común.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="p-8 text-center border transition-all duration-300 hover:border-opacity-60"
              style={{
                backgroundColor: `${colors.darkBg}dd`,
                borderColor: `${colors.gold}30`,
                borderWidth: '1px'
              }}
            >
              <div className="mb-6">
                <Users className="w-10 h-10 mx-auto" style={{ color: colors.gold, opacity: 0.8 }} />
              </div>
              <h3
                className="mb-6 tracking-wide"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: colors.goldLight
                }}
              >
                Reactivación 2023
              </h3>
              <p className="leading-relaxed text-sm" style={{ color: colors.textLight, opacity: 0.75 }}>
                Tras un periodo de receso, la Logia Galileo retoma sus trabajos con renovado vigor,
                manteniendo viva la tradición masónica y adaptándose a los desafíos del siglo XXI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personajes Destacados Section - Dark Premium */}
      <section
        id="personajes"
        className="py-24 px-8"
        style={{
          backgroundColor: colors.darkBg,
          scrollMarginTop: '80px',
          borderTop: `1px solid ${colors.gold}15`
        }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="mb-8 text-center tracking-wider uppercase"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              fontWeight: 400,
              color: colors.gold,
              letterSpacing: '0.15em'
            }}
          >
            Personajes Destacados
          </h2>

          <div className="flex items-center justify-center gap-3 mb-20">
            <div className="w-16 h-px" style={{ backgroundColor: colors.gold, opacity: 0.4 }}></div>
            <div className="w-1.5 h-1.5 rotate-45" style={{ border: `1px solid ${colors.gold}`, opacity: 0.6 }}></div>
            <div className="w-16 h-px" style={{ backgroundColor: colors.gold, opacity: 0.4 }}></div>
          </div>

          <div className="space-y-12">
            {/* Personaje 1 */}
            <div
              className="flex flex-col md:flex-row gap-8 items-start p-8 border-l-2"
              style={{
                backgroundColor: `${colors.darkerBg}cc`,
                borderColor: colors.gold
              }}
            >
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-40 h-52 overflow-hidden rounded-sm border" style={{ borderColor: `${colors.gold}40` }}>
                  <img
                    src={victorRendon}
                    alt="Víctor A. Rendón"
                    className="w-full h-full object-cover"
                    style={{ filter: 'sepia(40%) brightness(0.9) contrast(1.1)' }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className="mb-4 tracking-wide"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.75rem',
                    fontWeight: 400,
                    color: colors.goldLight
                  }}
                >
                  Víctor A. Rendón
                </h3>
                <p className="text-base leading-relaxed" style={{ color: colors.textLight, opacity: 0.8 }}>
                  Médico yucateco comprometido con la transformación social durante el periodo revolucionario.
                  Fue Venerable Maestro de la Logia Galileo Nº 3 en 1912 y Primer Gran Maestro de la Gran Logia
                  "La Oriental" en 1913. Participó en movimientos antirreeleccionistas y, en 1915, asumió la
                  Secretaría de Gobierno bajo el general Salvador Alvarado, impulsando la modernización de Yucatán.
                </p>
              </div>
            </div>

            {/* Personaje 2 */}
            <div
              className="flex flex-col md:flex-row gap-8 items-start p-8 border-l-2"
              style={{
                backgroundColor: `${colors.darkerBg}cc`,
                borderColor: colors.gold
              }}
            >
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-40 h-52 overflow-hidden rounded-sm border" style={{ borderColor: `${colors.gold}40` }}>
                  <img
                    src={davidVivas}
                    alt="David Vivas Romero"
                    className="w-full h-full object-cover"
                    style={{ filter: 'sepia(40%) brightness(0.9) contrast(1.1)' }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className="mb-4 tracking-wide"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.75rem',
                    fontWeight: 400,
                    color: colors.goldLight
                  }}
                >
                  David Vivas Romero
                </h3>
                <p className="text-base leading-relaxed" style={{ color: colors.textLight, opacity: 0.8 }}>
                  Educador notable nacido en Tizimín en 1878. Impulsó la formación de docentes y la expansión
                  educativa en Yucatán. En 1921 ingresó a la Logia Galileo Nº 3 y colaboró en la visita de José
                  Vasconcelos, evento que culminó con la fundación de la Universidad Nacional del Sureste en 1922,
                  donde fue su primer Secretario. Falleció en 1935.
                </p>
              </div>
            </div>

            {/* Personaje 3 */}
            <div
              className="flex flex-col md:flex-row gap-8 items-start p-8 border-l-2"
              style={{
                backgroundColor: `${colors.darkerBg}cc`,
                borderColor: colors.gold
              }}
            >
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-40 h-52 overflow-hidden rounded-sm border" style={{ borderColor: `${colors.gold}40` }}>
                  <img
                    src={enriqueAznar}
                    alt="Enrique Aznar Mendoza"
                    className="w-full h-full object-cover"
                    style={{ filter: 'sepia(40%) brightness(0.9) contrast(1.1)' }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3
                  className="mb-4 tracking-wide"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.75rem',
                    fontWeight: 400,
                    color: colors.goldLight
                  }}
                >
                  Enrique Aznar Mendoza
                </h3>
                <p className="text-base leading-relaxed" style={{ color: colors.textLight, opacity: 0.8 }}>
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

      {/* ¿Quieres ingresar a la masonería? Section - Dark Premium */}
      <section
        id="ingreso"
        className="py-24 px-8"
        style={{
          backgroundColor: colors.darkerBg,
          scrollMarginTop: '80px',
          borderTop: `1px solid ${colors.gold}15`
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="mb-8 text-center tracking-wider uppercase"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              fontWeight: 400,
              color: colors.gold,
              letterSpacing: '0.15em'
            }}
          >
            ¿Quieres ingresar a la masonería?
          </h2>

          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="w-16 h-px" style={{ backgroundColor: colors.gold, opacity: 0.4 }}></div>
            <div className="w-1.5 h-1.5 rotate-45" style={{ border: `1px solid ${colors.gold}`, opacity: 0.6 }}></div>
            <div className="w-16 h-px" style={{ backgroundColor: colors.gold, opacity: 0.4 }}></div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <p
              className="text-lg leading-relaxed text-center"
              style={{ color: colors.textLight, opacity: 0.8 }}
            >
              Antes de decidir unirse a la masonería, una persona debe considerar varios factores para asegurarse
              de que esta organización y sus principios se alinean con sus propios valores y expectativas.
              Aquí hay algunas consideraciones clave:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Consideración 1 */}
            <div
              className="p-8 border-l-2"
              style={{
                backgroundColor: `${colors.darkBg}dd`,
                borderColor: colors.gold
              }}
            >
              <h3
                className="mb-4 tracking-wide"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: colors.goldLight
                }}
              >
                Comprender los principios y valores masónicos
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: colors.textLight, opacity: 0.8 }}>
                Investigar y entender los principios fundamentales de la masonería, tales como la fraternidad,
                la moralidad, la caridad, y la búsqueda de la verdad. Asegurarse de que estos valores resuenan
                con sus propias creencias y ética personal.
              </p>
            </div>

            {/* Consideración 2 */}
            <div
              className="p-8 border-l-2"
              style={{
                backgroundColor: `${colors.darkBg}dd`,
                borderColor: colors.gold
              }}
            >
              <h3
                className="mb-4 tracking-wide"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: colors.goldLight
                }}
              >
                Investigación personal
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: colors.textLight, opacity: 0.8 }}>
                Leer libros, artículos y recursos en línea sobre la historia, filosofía y prácticas de la masonería.
                Comprender los rituales, símbolos y grados masónicos puede proporcionar una visión más clara de lo
                que implica ser un masón.
              </p>
            </div>

            {/* Consideración 3 */}
            <div
              className="p-8 border-l-2"
              style={{
                backgroundColor: `${colors.darkBg}dd`,
                borderColor: colors.gold
              }}
            >
              <h3
                className="mb-4 tracking-wide"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: colors.goldLight
                }}
              >
                Creencia en un Ser Supremo
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: colors.textLight, opacity: 0.8 }}>
                La mayoría de las logias masónicas requieren una creencia en un Ser Supremo o en un principio creador,
                aunque no se especifica una religión particular. Evaluar si esta creencia se alinea con sus propias
                convicciones espirituales.
              </p>
            </div>

            {/* Consideración 4 */}
            <div
              className="p-8 border-l-2"
              style={{
                backgroundColor: `${colors.darkBg}dd`,
                borderColor: colors.gold
              }}
            >
              <h3
                className="mb-4 tracking-wide"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: colors.goldLight
                }}
              >
                Tiempo y compromiso
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: colors.textLight, opacity: 0.8 }}>
                Considerar el tiempo necesario para participar activamente en una logia masónica, que incluye asistir
                a reuniones regulares, eventos y estudios masónicos. Asegurarse de poder cumplir con estos compromisos
                sin que interfieran negativamente con sus responsabilidades personales y profesionales.
              </p>
            </div>

            {/* Consideración 5 */}
            <div
              className="p-8 border-l-2"
              style={{
                backgroundColor: `${colors.darkBg}dd`,
                borderColor: colors.gold
              }}
            >
              <h3
                className="mb-4 tracking-wide"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: colors.goldLight
                }}
              >
                Motivaciones personales
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: colors.textLight, opacity: 0.8 }}>
                Reflexionar sobre sus razones para unirse a la masonería. La masonería debe ser vista como una oportunidad
                para el crecimiento personal y el servicio a la comunidad, no como un medio para obtener beneficios
                materiales o profesionales.
              </p>
            </div>

            {/* Consideración 6 */}
            <div
              className="p-8 border-l-2"
              style={{
                backgroundColor: `${colors.darkBg}dd`,
                borderColor: colors.gold
              }}
            >
              <h3
                className="mb-4 tracking-wide"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: colors.goldLight
                }}
              >
                Proceso de ingreso
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: colors.textLight, opacity: 0.8 }}>
                Informarse sobre el proceso de solicitud, que incluye presentar una solicitud formal, someterse a
                entrevistas y una investigación de antecedentes, y participar en una ceremonia de iniciación.
              </p>
            </div>

            {/* Consideración 7 */}
            <div
              className="p-8 border-l-2"
              style={{
                backgroundColor: `${colors.darkBg}dd`,
                borderColor: colors.gold
              }}
            >
              <h3
                className="mb-4 tracking-wide"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: colors.goldLight
                }}
              >
                Expectativas de la logia
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: colors.textLight, opacity: 0.8 }}>
                Entender las expectativas que la logia tiene de sus miembros en términos de participación, conducta
                y contribuciones. Cada logia puede tener requisitos específicos que los aspirantes deben conocer y
                estar dispuestos a cumplir.
              </p>
            </div>

            {/* Consideración 8 */}
            <div
              className="p-8 border-l-2"
              style={{
                backgroundColor: `${colors.darkBg}dd`,
                borderColor: colors.gold
              }}
            >
              <h3
                className="mb-4 tracking-wide"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: colors.goldLight
                }}
              >
                Compatibilidad con valores personales
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: colors.textLight, opacity: 0.8 }}>
                Evaluar si los principios y prácticas de la masonería son compatibles con sus propios valores y creencias.
                La masonería enfatiza la moralidad, la ética y el desarrollo personal.
              </p>
            </div>

            {/* Consideración 9 */}
            <div
              className="p-8 border-l-2"
              style={{
                backgroundColor: `${colors.darkBg}dd`,
                borderColor: colors.gold
              }}
            >
              <h3
                className="mb-4 tracking-wide"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: colors.goldLight
                }}
              >
                Impacto en la vida personal y familiar
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: colors.textLight, opacity: 0.8 }}>
                Considerar cómo la membresía masónica podría afectar su vida personal y familiar. Es importante tener
                el apoyo de su familia y asegurarse de que el compromiso con la logia no cause conflictos significativos
                con sus responsabilidades personales y profesionales.
              </p>
            </div>

            {/* Consideración 10 */}
            <div
              className="p-8 border-l-2"
              style={{
                backgroundColor: `${colors.darkBg}dd`,
                borderColor: colors.gold
              }}
            >
              <h3
                className="mb-4 tracking-wide"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: colors.goldLight
                }}
              >
                Hablar con miembros actuales
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: colors.textLight, opacity: 0.8 }}>
                Conversar con masones actuales puede proporcionar una perspectiva más realista sobre la vida dentro de
                la masonería. Los miembros pueden compartir sus experiencias personales y responder preguntas específicas
                sobre la organización.
              </p>
            </div>

            {/* Consideración 11 */}
            <div
              className="p-8 border-l-2"
              style={{
                backgroundColor: `${colors.darkBg}dd`,
                borderColor: colors.gold
              }}
            >
              <h3
                className="mb-4 tracking-wide"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: colors.goldLight
                }}
              >
                Finanzas
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: colors.textLight, opacity: 0.8 }}>
                Considerar los costos asociados con la membresía, que pueden incluir cuotas de iniciación, cuotas anuales
                y otros gastos relacionados con la participación en actividades y eventos de la logia.
              </p>
            </div>

            {/* Consideración 12 */}
            <div
              className="p-8 border-l-2"
              style={{
                backgroundColor: `${colors.darkBg}dd`,
                borderColor: colors.gold
              }}
            >
              <h3
                className="mb-4 tracking-wide"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  color: colors.goldLight
                }}
              >
                Confidencialidad y secretismo
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: colors.textLight, opacity: 0.8 }}>
                Entender la importancia de la confidencialidad y el secreto dentro de la masonería. Los masones están
                comprometidos a mantener ciertos aspectos de sus prácticas y rituales en privado.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8" style={{ color: colors.textLight, opacity: 0.8 }}>
              Evaluar estas consideraciones puede ayudar a una persona a tomar una decisión informada y consciente
              sobre su deseo de unirse a la masonería. Es un compromiso significativo que debe ser abordado con
              seriedad y reflexión.
            </p>

            <p className="text-lg leading-relaxed text-center" style={{ color: colors.goldLight, fontWeight: 500 }}>
              Tras haber evaluado los puntos anteriores y pensando que no tienes ningún inconveniente con lo que vives
              actualmente en tu vida, piensa que el siguiente paso es revisar los requisitos necesarios para poder
              ingresar a la masonería.
            </p>
          </div>
        </div>
      </section>

      {/* Publicaciones Recientes Section */}
      <FacebookPostsCarousel />

      {/* Contacto Section - Dark Premium */}
      <section
        id="contacto"
        className="py-24 px-8"
        style={{
          backgroundColor: colors.darkBg,
          scrollMarginTop: '80px',
          borderTop: `1px solid ${colors.gold}15`
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="mb-8 tracking-wider uppercase"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              fontWeight: 400,
              color: colors.gold,
              letterSpacing: '0.15em'
            }}
          >
            Contacto
          </h2>

          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="w-16 h-px" style={{ backgroundColor: colors.gold, opacity: 0.4 }}></div>
            <div className="w-1.5 h-1.5 rotate-45" style={{ border: `1px solid ${colors.gold}`, opacity: 0.6 }}></div>
            <div className="w-16 h-px" style={{ backgroundColor: colors.gold, opacity: 0.4 }}></div>
          </div>

          <p
            className="text-lg leading-relaxed mb-12"
            style={{ color: colors.textLight, opacity: 0.8 }}
          >
            Para conocer más sobre la Logia Galileo Nº 3 y nuestras actividades,
            contáctanos a través de nuestras redes sociales.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleWhatsApp}
              className="px-10 py-3 border transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center hover:bg-opacity-10"
              style={{
                borderColor: colors.gold,
                color: colors.gold,
                backgroundColor: 'transparent',
                fontSize: '0.85rem',
                letterSpacing: '0.1em'
              }}
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP</span>
            </button>

            <button
              onClick={handleFacebook}
              className="px-10 py-3 transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center hover:opacity-90"
              style={{
                backgroundColor: colors.gold,
                color: colors.darkBg,
                border: 'none',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                fontWeight: 500
              }}
            >
              <Facebook className="w-4 h-4" />
              <span>FACEBOOK</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Dark Premium */}
      <footer
        className="py-12 px-8 text-center border-t"
        style={{
          backgroundColor: colors.darkerBg,
          borderColor: `${colors.gold}20`
        }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="mb-4 text-sm tracking-wide"
            style={{ color: colors.textLight, opacity: 0.6 }}
          >
            © {new Date().getFullYear()} R∴ L∴ S∴ Galileo Nº 3 — Todos los derechos reservados
          </p>
          <Link
            to="/aviso-privacidad"
            className="text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity underline"
            style={{ color: colors.gold }}
          >
            Aviso de Privacidad
          </Link>
        </div>
      </footer>
    </div>
  );
}