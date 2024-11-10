import React from 'react';
import { Link } from 'react-router-dom';

import logo_python from '../../img/logos-tec/python.png';
import logo_vba from '../../img/logos-tec/vba.png';
import logo_react from '../../img/logos-tec/react.png';
import logo_js from '../../img/logos-tec/js.png';
import logo_ts from '../../img/logos-tec/ts.png';
import logo_sql from '../../img/logos-tec/sql.png';

interface FrameTecProps {
    isAtivado: boolean;
}

function FrameTecnologias({ isAtivado }: FrameTecProps) {
    const textColor = isAtivado ? 'text-darkGreen' : 'text-white';

    return (
        <div className="flex flex-col content-center justify-between items-center gap-[30px]">
            <span className={`${textColor} text-40px font-ruso max-[700px]:text-28px max-[530px]:text-24px max-[430px]:text-22px max-[390px]:text-20px`}>No meu dia a dia, trabalho com</span>
            <div className="flex content-center items-center gap-[30px] max-[830px]:gap-[15px] max-[730px]:gap-[10px] max-[700px]:flex-col">
                <div className="flex content-center items-center gap-[30px] max-[830px]:gap-[15px] max-[730px]:gap-[10px] max-[700px]:gap-[30px] max-[450px]:gap-[17px]">
                    <div className="flex flex-col content-center items-center">
                        <img
                            src={logo_python} // Substitua pelo caminho da sua imagem
                            alt="Logo"
                            className="img-fluid mx-3 hover:translate-y-[-5px] max-[1060px]:w-[80px]
                max-[930px]:w-[70px]
                max-[830px]:w-[65px]" // mx-3 para adicionar margem horizontal
                        />
                        <span className={`${textColor} font-ruso`}>Python</span>
                    </div>
                    <div className="flex flex-col content-center items-center">
                        <img
                            src={logo_vba} // Substitua pelo caminho da sua imagem
                            alt="Logo"
                            className="img-fluid mx-3 hover:translate-y-[-5px] max-[1060px]:w-[80px]
                max-[930px]:w-[70px]
                max-[830px]:w-[65px]" // mx-3 para adicionar margem horizontal
                        />
                        <span className={`${textColor} font-ruso`}>VBA</span>
                    </div>
                    <div className="flex flex-col content-center items-center">
                        <img
                            src={logo_react} // Substitua pelo caminho da sua imagem
                            alt="Logo"
                            className="img-fluid mx-3 hover:translate-y-[-5px] max-[1060px]:w-[80px]
                max-[930px]:w-[70px]
                max-[830px]:w-[65px]" // mx-3 para adicionar margem horizontal
                        />
                        <span className={`${textColor} font-ruso`}>React</span>
                    </div>
                </div>
                <div className="flex flex-row content-center items-center gap-[30px] max-[830px]:gap-[15px] max-[730px]:gap-[10px] max-[700px]:gap-[30px] max-[450px]:gap-[17px]">
                    <div className="flex flex-col content-center items-center">
                        <img
                            src={logo_js} // Substitua pelo caminho da sua imagem
                            alt="Logo"
                            className="img-fluid mx-3 hover:translate-y-[-5px] max-[1060px]:w-[80px]
                max-[930px]:w-[70px]
                max-[830px]:w-[65px]" // mx-3 para adicionar margem horizontal
                        />
                        <span className={`${textColor} font-ruso`}>JavaScript</span>
                    </div>
                    <div className="flex flex-col content-center items-center">
                        <img
                            src={logo_ts} // Substitua pelo caminho da sua imagem
                            alt="Logo"
                            className="img-fluid mx-3 hover:translate-y-[-5px] max-[1060px]:w-[80px]
                max-[930px]:w-[70px]
                max-[830px]:w-[65px]" // mx-3 para adicionar margem horizontal
                        />
                        <span className={`${textColor} font-ruso`}>TypeScript</span>
                    </div>
                    <div className="flex flex-col content-center items-center">
                        <img
                            src={logo_sql} // Substitua pelo caminho da sua imagem
                            alt="Logo"
                            className="img-fluid mx-3 hover:translate-y-[-5px] max-[1060px]:w-[80px]
                max-[930px]:w-[70px]
                max-[830px]:w-[65px]" // mx-3 para adicionar margem horizontal
                        />
                        <span className={`${textColor} font-ruso`}>SQL</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrameTecnologias;