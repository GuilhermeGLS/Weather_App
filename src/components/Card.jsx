import React from "react";

function Card() {
    return (

        <div className="bg-white p-6 mt-10 rounded-lg shadow-md">
        {/* Informações de lugar */}
            <div>
                <span className="block text-lg font-bold text-slate-700">Nome da Cidade</span>
                <span className="text-slate-400 text-sm font-medium">Estado, País</span>
            </div>
        {/* Temperatura */}
            <div className="font-bold text-slate-700 flex mt-4 mb-2">
                <span className="text-8xl">27</span>
                <span className="text-2xl mt-2">°C</span>
            </div>
        {/* Tipo de tempo */}
            <div className="text-center">
                <span className="block">Img</span>
                <span className="text-slate-700 font-medium">tempo</span>
            </div>

        </div>
    )
}

export default Card;