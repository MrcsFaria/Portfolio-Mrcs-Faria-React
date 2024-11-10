import React from 'react';
import { Link } from 'react-router-dom';

interface FrameMenuProps {
  isAtivado: boolean;
}

function FrameMenu({ isAtivado }: FrameMenuProps) {
  // Define as cores da fonte com base no estado de isAtivado
  const textColor = isAtivado ? 'text-darkGreen' : 'text-white';
  const titleColor = isAtivado ? 'text-darkerGreen' : 'text-neonGreen';

  return (
    <div className="flex flex-col justify-center items-center pt-[150px]">
      <div className="flex flex-col items-center w-[1200px] gap-[25px] max-[1330px]:w-[1000px] max-[1130px]:w-[800px] max-[930px]:w-[600px] max-[730px]:w-[400px] max-[495px]:w-[290px]">
        <span className={`${titleColor} text-50px font-ruso max-[1450px]:text-40px max-[730px]:text-28px max-[530px]:text-24px`}>Bem Vindo(a) 👋🏽</span>
        <span className={`${textColor} text-30px font-ruso max-[1450px]:text-24px max-[730px]:text-20px max-[530px]:text-17px`}>Meu nome é</span>
        <span className={`${textColor} text-65px font-ruso max-[1450px]:text-52px max-[730px]:text-36px max-[530px]:text-30px max-[495px]:text-24px`}>Marcos Vinicius Faria</span>
        <span className={`${textColor} text-30px font-ruso max-[1450px]:text-24px max-[730px]:text-20px max-[530px]:text-17px`}>Desenvolvedor Full-Stack</span>
        <span className={`${textColor} text-30px font-ruso text-center break-normal max-[1450px]:text-24px max-[730px]:text-20px max-[530px]:text-17px`}>
          Sou um desenvolvedor full-stack que tem como principal
          paixão transformar ideias em realidade. Tenho vasta experiência no
          desenvolvimento de sistemas utilizando diversas linguagens e
          tecnologias, incluindo Python e VBA, bem como na construção de sites
          dinâmicos e interativos com React e TypeScript.
          <br />
          Com um forte foco em automação, meu objetivo é simplificar e otimizar
          processos manuais, tornando o trabalho mais fácil e produtivo para
          todos os envolvidos.
        </span>
      </div>
    </div>
  );
}

export default FrameMenu;
