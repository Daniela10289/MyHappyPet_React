import React from "react";
import "@styles/Home.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Home() {   

    const imagenes = [
		'https://img.freepik.com/fotos-premium/cachorro-bulldog-frances-gato_87557-8348.jpg?w=1380',
		'https://img.freepik.com/foto-gratis/hermoso-retrato-mascota-perro_23-2149218450.jpg?w=1480&t=st=1660343564~exp=1660344164~hmac=e3a7753e3d1bcb13b11e9424e69952e8e2e2edd0d008f9cda1d4701f5bfe7cf8',
		'https://img.freepik.com/foto-gratis/retrato-grupo-adorables-cachorros_53876-64777.jpg?w=1380&t=st=1660338690~exp=1660339290~hmac=937e132726abe111e6739f73eb90150c73db4ddfca51785719cbe3bc2f152b5c',
	];

  const [imagenActual, setImagenActual] = React.useState(0);
	const cantidad = imagenes?.length;

    // Return prematuro para evitar errores
	if (!Array.isArray(imagenes) || cantidad === 0) return;


    const siguienteImagen = () => {
		setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
	};
    
    const anteriorImagen = () => {
		setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
	};

 return (
   <div id="Carousel2" className="carousel slide shadow-soft border border-light p-4 rounded" data-ride="carousel">
     <div className="carousel-inner rounded">
       <a
         className="carousel-control-prev"
         role="button"
         data-slide="prev"
         onClick={anteriorImagen}>

         <span className="fas fa-envelope">
           <FontAwesomeIcon icon={solid("arrow-left")} className="icon-form" />
         </span>
         <span className="sr-only">Previous</span>
       </a>

       {imagenes.map((imagen, index) => {
         return (
           <div key={index} className="carousel-item active">
             {imagenActual === index && (
               <img className="d-block w-110" src={imagen} alt="imagen" />
             )}
           </div>
         );
       })}
     </div>

     <a
       className="carousel-control-next"
       role="button"
       data-slide="next"
       onClick={siguienteImagen}
     >
       <span className="fas fa-envelope">
         <FontAwesomeIcon icon={solid("arrow-right")} className="icon-form" />
       </span>
       <span className="sr-only">Next</span>
     </a>

   </div>
 );
}
