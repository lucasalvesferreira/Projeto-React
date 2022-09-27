import React from "react";

export default (props) => {

    const { min, max } = props;
    const aleatorios = parseInt(Math.random() * (max - min)) + max;

    return (
        <div>
            <h2>Numero Aleatorio </h2>
            <p>
                <strong>Numero min : {min}</strong>
            </p>
            <p>
                <strong>Numero max : {max}</strong>
            </p>
            <p>
                <strong>Numero sorteado : {aleatorios}</strong>
            </p>

        </div>
    );
}
