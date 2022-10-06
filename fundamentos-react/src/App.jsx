import React from "react";

import Card from "./components/layout/Card";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';


export default (_) => (
    <div id='app'>
        <h1>Fundamentos react</h1>

        <h1>Fundamentos React</h1>

        <Card titulo="#04 - Desafio Aleatorio">
            <Aleatorio min={1} max={10} />
        </Card>

        <Card titulo="#03 - Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#02 - Com parametro">
            <ComParametro
                titulo="Situacao do aluno: "
                aluno="Lucas"
                nota={9.9} />

        </Card>

        <Card titulo="#01 - Primeiro">
            <Primeiro></Primeiro>
        </Card>
    </div >
);
