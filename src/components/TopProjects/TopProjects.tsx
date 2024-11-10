import React from 'react';
import { Link } from 'react-router-dom';

import alm from '../../img/fotos-projetos/alm-pc.png';
import tg from '../../img/fotos-projetos/tg.png';


function TopProjects() {
    return (
        <div className="flex flex-col content-center justify-between items-center gap-[40px]">
            <span className="text-white text-40px font-ruso">Meus projetos de maior destaque</span>
                <div className="flex flex-col content-center items-center">
                    <img
                        src={tg} // Substitua pelo caminho da sua imagem
                        alt="Logo"
                        className="img-fluid mx-3 w-[1235px] h-[650px]" // mx-3 para adicionar margem horizontal
                    />
                    <div className="flex flex-col content-center items-center text-center border-[3px] border-white w-[1235px] gap-[25px]">
                    <span className="text-white text-26px font-ruso text-center">
                    Estoque TG
                    </span>
                    <span className="text-white text-20px font-ruso text-center">
                    Este projeto é uma adaptação do sistema que construí para a empresa onde trabalho, é um sistema de gerenciamento de estoque desenvolvido em Python, 
                    utilizando bibliotecas para criação de interface gráfica, criação e controle de banco de dados para o estoque, além dos históricos de entrada e 
                    saída das mercadorias, além de bibliotecas para plotar os dados, gerar visibilidades com gráficos e gerar código de barras para os produtos.
                    </span>
                    <button className='text-white text-18px font-ruso border border-white py-2 px-6 hover:bg-neonGreen mb-[20px]'>Detalhes</button>
                    </div>
                </div>
                <div className="flex flex-col pt-[50px] content-center items-center">
                    <img
                        src={alm} // Substitua pelo caminho da sua imagem
                        alt="Logo"
                        className="img-fluid mx-3 w-[1235px] h-[650px]" // mx-3 para adicionar margem horizontal
                    />
                    <div className="flex flex-col content-center items-center text-center border-[3px] border-white w-[1235px] gap-[25px]">
                    <span className="text-white text-26px font-ruso text-center">
                    ALM - Site de venda de tênis
                    </span>
                    <span className="text-white text-20px font-ruso text-center">
                    Este projeto é um site de venda de tênis desenvolvido utilizando tecnologias modernas tanto no frontend quanto no backend. 
                    No frontend, utilizamos React, HTML, CSS, JavaScript e Bootstrap para criar uma interface de usuário responsiva e interativa. No backend, 
                    utilizamos Node.js com Prisma para gerenciamento de banco de dados.
                    </span>
                    <button className='text-white text-18px font-ruso border border-white py-2 px-6 hover:bg-neonGreen mb-[20px]'>Detalhes</button>
                    </div>
                </div>
            <span className="text-white pt-[50px] text-40px font-ruso">Veja Mais Projetos</span>
            <button className='text-white text-26px font-ruso border border-white py-2 px-6 hover:bg-neonGreen'>Ver Mais</button>
        </div>
    );
}

export default TopProjects;