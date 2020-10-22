import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';


const Barra = () => {

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion  } = authContext;

    // obtener función limpiar tareas
    const tareasContext = useContext(tareaContext);
    const { limpiarTareas } = tareasContext;

    // obtener función limpiar proyecto
    const proyectosContext = useContext(proyectoContext);
    const { limpiarProyecto } = proyectosContext;


    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);


    const logout = () =>{
        limpiarTareas();
        limpiarProyecto();
        cerrarSesion();
        
    }

    return ( 
        <header className="app-header">
            {usuario ? <p className="nombre-usuario">Hola <span>{usuario.nombre} </span> </p> : null}
            

            <nav className="nav-principal">
                <button 
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => logout() }
                >Cerrar Sesión</button>
            </nav>
        </header>
     );
}
 
export default Barra;