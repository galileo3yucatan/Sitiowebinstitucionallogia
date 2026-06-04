import { ArrowLeft, Mail, Shield, Lock, FileText, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';

export default function AvisoPrivacidad() {
  const logoGalileo = '/assets/207f63723d2cae9a48995db2e974c005a0ad8f00.png';

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Header */}
      <header className="py-8 px-8 bg-white shadow-md">
        <div className="max-w-5xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 transition-colors hover:opacity-70"
            style={{ color: '#2B2F9E' }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-8" style={{ backgroundColor: '#2B2F9E' }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6">
            <img src={logoGalileo} alt="Logo Galileo Nº 3" className="w-full h-full object-contain" />
          </div>
          <h1 
            className="mb-4 text-white"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              fontWeight: 600
            }}
          >
            Aviso de Privacidad Integral
          </h1>
          <p className="text-white opacity-90 text-lg">
            Respetable Logia Simbólica Galileo No. 3
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 p-8 bg-gray-50 border-l-4" style={{ borderColor: '#FFE31A' }}>
            <p className="text-lg leading-relaxed" style={{ color: '#333' }}>
              En cumplimiento con la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>, 
              la Respetable Logia Simbólica Galileo No. 3, con sede en Mérida, Yucatán, México, es responsable del uso y 
              protección de sus datos personales.
            </p>
            <div className="mt-6 flex items-center gap-3" style={{ color: '#2B2F9E' }}>
              <Mail className="w-5 h-5" />
              <a href="mailto:galileo3yucatan@gmail.com" className="hover:underline font-semibold">
                galileo3yucatan@gmail.com
              </a>
            </div>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2B2F9E' }}>
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: '#2B2F9E'
                }}
              >
                1. Datos personales que se recaban
              </h2>
            </div>
            <div className="pl-16">
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#333' }}>
                A través de nuestro sitio web, correo electrónico, WhatsApp o Facebook, podemos recabar:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4" style={{ color: '#555' }}>
                <li>Nombre completo</li>
                <li>Número telefónico</li>
                <li>Correo electrónico</li>
                <li>Información que usted proporcione voluntariamente en mensajes</li>
              </ul>
              <p className="text-lg font-semibold" style={{ color: '#2B2F9E' }}>
                No recabamos datos personales sensibles.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2B2F9E' }}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: '#2B2F9E'
                }}
              >
                2. Finalidades del tratamiento
              </h2>
            </div>
            <div className="pl-16">
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#333' }}>
                Sus datos serán utilizados para:
              </p>
              
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2B2F9E' }}>
                Finalidades primarias:
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-6" style={{ color: '#555' }}>
                <li>Atender solicitudes de información</li>
                <li>Establecer contacto institucional</li>
                <li>Dar seguimiento a procesos administrativos internos</li>
                <li>Informar sobre actividades culturales o públicas</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2B2F9E' }}>
                Finalidades secundarias:
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4" style={{ color: '#555' }}>
                <li>Envío de invitaciones a eventos públicos</li>
                <li>Información histórica o cultural relacionada con la masonería</li>
              </ul>

              <div className="mt-6 p-4 bg-yellow-50 border-l-4" style={{ borderColor: '#FFE31A' }}>
                <p className="text-base" style={{ color: '#333' }}>
                  Si no desea que sus datos sean utilizados para finalidades secundarias, puede solicitarlo al correo antes indicado.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2B2F9E' }}>
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h2 
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: '#2B2F9E'
                }}
              >
                3. Uso de WhatsApp y Facebook
              </h2>
            </div>
            <div className="pl-16">
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#333' }}>
                La Logia puede utilizar:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4" style={{ color: '#555' }}>
                <li><strong>WhatsApp</strong> como medio de comunicación directa.</li>
                <li><strong>Facebook</strong> para atención a mensajes enviados por medio de su página oficial.</li>
              </ul>
              <div className="p-4 bg-red-50 border-l-4" style={{ borderColor: '#E63946' }}>
                <p className="text-base leading-relaxed" style={{ color: '#333' }}>
                  Al contactarnos por estos medios, usted acepta que sus datos sean tratados conforme a este Aviso y también 
                  conforme a las políticas de privacidad de Meta Platforms, Inc.
                </p>
                <p className="text-base leading-relaxed mt-2" style={{ color: '#333' }}>
                  Estos servicios pueden implicar transferencia internacional de datos, conforme a sus propios términos y condiciones.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2B2F9E' }}>
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: '#2B2F9E'
                }}
              >
                4. Transferencia de datos
              </h2>
            </div>
            <div className="pl-16">
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#333' }}>
                La Logia no vende ni comparte datos personales con terceros, salvo:
              </p>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#555' }}>
                <li>Cuando sea requerido por autoridad competente.</li>
                <li>Cuando el titular lo autorice expresamente.</li>
              </ul>
            </div>
          </div>

          {/* Section 5 - Derechos ARCO */}
          <div className="mb-12 p-8" style={{ backgroundColor: '#f8f9fa' }}>
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.75rem',
                fontWeight: 600,
                color: '#2B2F9E'
              }}
            >
              5. Derechos ARCO
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#333' }}>
              Usted tiene derecho a:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white border-l-4" style={{ borderColor: '#FFE31A' }}>
                <strong style={{ color: '#2B2F9E' }}>Acceder</strong> a sus datos
              </div>
              <div className="p-4 bg-white border-l-4" style={{ borderColor: '#FFE31A' }}>
                <strong style={{ color: '#2B2F9E' }}>Rectificarlos</strong>
              </div>
              <div className="p-4 bg-white border-l-4" style={{ borderColor: '#FFE31A' }}>
                <strong style={{ color: '#2B2F9E' }}>Cancelarlos</strong>
              </div>
              <div className="p-4 bg-white border-l-4" style={{ borderColor: '#FFE31A' }}>
                <strong style={{ color: '#2B2F9E' }}>Oponerse</strong> a su uso
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#333' }}>
              Para ejercer estos derechos, envíe una solicitud a:
            </p>
            <div className="flex items-center gap-3 mb-6" style={{ color: '#2B2F9E' }}>
              <Mail className="w-5 h-5" />
              <a href="mailto:galileo3yucatan@gmail.com" className="hover:underline font-semibold text-lg">
                galileo3yucatan@gmail.com
              </a>
            </div>
            <p className="text-lg leading-relaxed mb-2" style={{ color: '#333' }}>
              La solicitud debe incluir:
            </p>
            <ul className="list-disc pl-6 space-y-2" style={{ color: '#555' }}>
              <li>Nombre completo</li>
              <li>Derecho que desea ejercer</li>
              <li>Medio para recibir respuesta</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.75rem',
                fontWeight: 600,
                color: '#2B2F9E'
              }}
            >
              6. Cookies 
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#333' }}>
              Aunque este sitio web no utiliza intencionalmente cookies para recopilar información personal 
              de sus visitantes, algunos servicios o componentes proporcionados por terceros podrían emplear 
              tecnologías similares necesarias para su funcionamiento.El usuario puede consultar y administrar dichas 
              configuraciones desde su navegador de Internet.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.75rem',
                fontWeight: 600,
                color: '#2B2F9E'
              }}
            >
              7. Cambios al aviso
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#333' }}>
              Este Aviso puede modificarse en cualquier momento y será publicado en el sitio web oficial.
            </p>
          </div>

          {/* Footer Note */}
          <div className="mt-16 p-8 text-center border-t-2" style={{ borderColor: '#E63946' }}>
            <p className="text-base opacity-70" style={{ color: '#333' }}>
              Última actualización: Febrero 2026
            </p>
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
            to="/" 
            className="opacity-80 hover:opacity-100 transition-opacity underline"
            style={{ color: '#FFE31A' }}
          >
            Volver al inicio
          </Link>
        </div>
      </footer>
    </div>
  );
}
