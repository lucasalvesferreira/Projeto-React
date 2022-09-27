import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'


export default (_) => (
    <div id='app'>
        <h1>Fundamentos react</h1>
        <Aleatorio 
        min = {1}
        max = {10}
        />
        <Fragmento />
        <ComParametro
            titulo="Situacao do aluno: "
            aluno="Lucas"
            nota={9.9} />
        <Primeiro></Primeiro>
    </div >
);
