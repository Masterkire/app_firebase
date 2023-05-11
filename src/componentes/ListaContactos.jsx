import React, {useState, useEffect} from "react";
import styled from "styled-components";
import db from './../firebase/firebaseConfig';
import {collection, DocumentSnapshot, onSnapshot} from 'firebase/firestore';
import Contacto from './Contacto';

const ListaContactos = () => {

    const [contactos, cambiarContactos] = useState([]);

    // Usamos useEfect para indicarle que haga algo cada que vea un cambio en nuestra aplicacion o cada que renderice y si colocamos viñetas como un array al final separado por coma le indicamos que ejecute la funcion al arrancar la aplicacion
    useEffect(() => {
        onSnapshot(
            collection(db, 'usuarios'),
            (snapshot) => {
                // console.log('Se ejecuto snapshot');
                // console.log(snapshot);
                // console.log(snapshot.docs[0].data());
                 
                const arregloUsuarios = snapshot.docs.map((documento) => {
                    return {...documento.data(), id: documento.id};
                })

                cambiarContactos(arregloUsuarios);

            }
        );
    }, []);

    return (
        contactos.length > 0 && 
        <ContenedorContactos>
            {/* Se quita la llave y el return en la siguiente funcion para solo usar parentesis y asi no usar return */}
            {contactos.map((contacto) => ( 
                <Contacto 
                    key={contacto.id}
                    id={contacto.id}
                    nombre={contacto.nombre}
                    correo={contacto.correo}
                />
            ))}
        </ContenedorContactos>
     );
}

const ContenedorContactos = styled.div`
    margin-top: 40px;
`;
 
export default ListaContactos;