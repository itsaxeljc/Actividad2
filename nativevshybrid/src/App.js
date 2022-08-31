import './App.scss';
import COVER from './assets/cover.png';
import { motion } from "framer-motion";

function App() {
  return (
    <div className="wrapper">
      <div className="ctn1">
        <motion.div
        initial={{
            opacity: 0
      }}
      whileInView = {{
          opacity:1
      }} transition = {{
          delay: 0.5,
          default: { ease: "linear" }
      }}>
        <span>
          <h1>
            Aplicaciones Híbridas VS Aplicaciones Nativas
          </h1>
        </span>
        <hr></hr>
        <p>
        Instituto Tecnológico de Tepic, ISC<br></br>Redactado el 30 de agosto de 2022
        </p>
        <img src={COVER} alt="Cover"></img>
        </motion.div>
      </div>
      <div className="ctn2">
        <div>
          <span>Actividad 2, Desarrollo de Aplicaciones Híbridas</span>
          <span>Por Juan Axel Jacobo Covarrubias</span>
          <div className="content">
            <motion.h1
            initial={{
                opacity: 0
          }}
          whileInView = {{
              opacity:1
          }} transition = {{
              delay: 0.5,
              default: { ease: "linear" }
          }}>Aplicaciones Híbridas</motion.h1>
            <motion.p
            initial={{
                opacity: 0
          }}
          whileInView = {{
              opacity:1
          }} transition = {{
              delay: 0.5,
              default: { ease: "linear" }
          }}>Una aplicación híbrida es esencialmente una aplicación web, pero en un shell (contenedor) de aplicación nativa permitiendo aprovechar las funcionalidades y hardware del dispositivo en el que se instala (por ejemplo, la cámara, el acelerómetro, el calendario, notificaciones push, entre otras) a las cuales una aplicación web no puede acceder. Las aplicaciones híbridas se desarrollan con tecnologías y lenguajes de desarrollo front-end comunes como JavaScript, HTML5 y CSS.  Una vez que se descargan de la tienda de aplicaciones y se instalan localmente, el shell puede conectarse a cualquier capacidad que brinde la plataforma móvil a través de un navegador integrado en la aplicación (en Android WebView y WKWebView en iOS). Así, el navegador y sus complementos se ejecutan en el back-end y son completamente imperceptibles para el usuario.
                Las aplicaciones híbridas a diferencia de las nativas permiten ser desarrolladas sobre una sola base de código, de esta manera el código puede ser ejecutado en diversos sistemas operativos, por ejemplo en Android y iOS.</motion.p>
            <motion.h1
            initial={{
                opacity: 0
          }}
          whileInView = {{
              opacity:1
          }} transition = {{
              delay: 0.5,
              default: { ease: "linear" }
          }}>Uso</motion.h1>
            <motion.p
            initial={{
                opacity: 0
          }}
          whileInView = {{
              opacity:1
          }} transition = {{
              delay: 0.5,
              default: { ease: "linear" }
          }}>Es probable que para un usuario final sin formación en tecnología o programación sea bastante complejo comprender e incluso notar la diferencia entre una aplicación nativa y una híbrida, pues ambas pueden ser instaladas de la misma manera, además, la brecha de rendimiento y funcionalidades entre estas dos cada vez es más pequeña, pues las tecnologías de desarrollo de aplicaciones híbridas cada vez integran nuevas mejoras. En todo caso la pregunta estaría orientada hacia los desarrolladores de aplicaciones, es ahí cuando aspectos como selección de frameworks, diseño de UX/UI,  escalabilidad, matenimiento, presupuesto y tiempos de entrega entran en juego.
              Cuando se habla de una aplicación nativa siempre se relacionará con alto redimiento, fácil mantenimiento y un alto nivel de integración con el sistema operativo para el cuál se desarrolla, sin embargo todo esto requiere de especialistas en los SDK para cada SO, lo cual claramente se traduce en costo y tiempo. Entonces, ¿Cuándo es conveniente desarrollar una aplicación híbrida? Si lo que se desea es un rápido lanzamiento al mercado y una reducción de costos, definitivamente desarrollar una aplicación híbrida es la mejor opción, claro, tomando en cuenta que entre más compleja sea la aplicación mayores retos vendrán, sobre todo en temas de integración, escalabilidad y manteminiento, pues el tener una sola base de código puede impactar directamente en la experiencia e interactividad del usuario final y la aplicación, siendo incluso necesario incluir código nativo para aprovechar al máximo las capacidades del dispositivo en el que se instalan.</motion.p>
              <motion.h1
            initial={{
                opacity: 0
          }}
          whileInView = {{
              opacity:1
          }} transition = {{
              delay: 0.5,
              default: { ease: "linear" }
          }}>Comparativa</motion.h1>
          <motion.table
          initial={{
              opacity: 0
          }}
          whileInView = {{
              opacity:1
          }} transition = {{
              delay: 0.5,
              default: { ease: "linear" }
          }}>
            <tr>
              <th className="left">Características</th>
              <th>App nativa</th>
              <th>App híbrida</th>
            </tr>
            <tr>
              <td className="left">Mayor rendimiento</td>
              <td>⭐</td>
              <td> </td>
            </tr>
            <tr>
              <td className="left">Menor inversión de desarrollo</td>
              <td> </td>
              <td>⭐</td>
            </tr>
            <tr>
              <td className="left">Mejor integración con el SO</td>
              <td>⭐</td>
              <td> </td>
            </tr>
            <tr>
              <td className="left">Mejor interactividad y experiencia de uso</td>
              <td>⭐</td>
              <td> </td>
            </tr>
            <tr>
              <td className="left">Mayores dificultades en pruebas</td>
              <td> </td>
              <td>⭐</td>
            </tr>
            <tr>
              <td className="left">Funcionamiento y confiabilidad a largo plazo</td>
              <td>⭐</td>
              <td> </td>
            </tr>
            <tr>
              <td className="left">Una sola base código para diferentes SO</td>
              <td> </td>
              <td>⭐</td>
            </tr>
            <tr>
              <td className="left">Seguridad</td>
              <td> </td>
              <td>⭐</td>
            </tr>
            <tr>
              <td className="left">Menores limitaciones de actualización en tienda de aplicaciones</td>
              <td> </td>
              <td>⭐</td>
            </tr>
            <tr>
              <td className="left">Menor tiempo de desarrollo</td>
              <td> </td>
              <td>⭐</td>
            </tr>
            <tr>
              <td className="left">Soporte multiplataforma</td>
              <td> </td>
              <td>⭐</td>
            </tr>
            <tr>
              <td className="left">Facilidad de desarrollo</td>
              <td> </td>
              <td>⭐</td>
            </tr>
          </motion.table>
          <motion.h1
            initial={{
                opacity: 0
          }}
          whileInView = {{
              opacity:1
          }} transition = {{
              delay: 0.5,
              default: { ease: "linear" }
          }}>Conclusión</motion.h1>
            <motion.p
            initial={{
                opacity: 0
          }}
          whileInView = {{
              opacity:1
          }} transition = {{
              delay: 0.5,
              default: { ease: "linear" }
          }}>Una aplicación híbrida es esencialmente una aplicación web, pero en un shell (contenedor) de aplicación nativa permitiendo aprovechar las funcionalidades y hardware del dispositivo en el que se instala (por ejemplo, la cámara, el acelerómetro, el calendario, notificaciones push, entre otras) a las cuales una aplicación web no puede acceder. Las aplicaciones híbridas se desarrollan con tecnologías y lenguajes de desarrollo front-end comunes como JavaScript, HTML5 y CSS.  Una vez que se descargan de la tienda de aplicaciones y se instalan localmente, el shell puede conectarse a cualquier capacidad que brinde la plataforma móvil a través de un navegador integrado en la aplicación (en Android WebView y WKWebView en iOS). Así, el navegador y sus complementos se ejecutan en el back-end y son completamente imperceptibles para el usuario.
                Las aplicaciones híbridas a diferencia de las nativas permiten ser desarrolladas sobre una sola base de código, de esta manera el código puede ser ejecutado en diversos sistemas operativos, por ejemplo en Android y iOS.</motion.p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
