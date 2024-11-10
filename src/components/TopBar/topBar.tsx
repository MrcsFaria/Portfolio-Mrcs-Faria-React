import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logo_claro from '../../img/logos-mvf/logo-claro.png';
import logo_escuro from '../../img/logos-mvf/logo-escuro.png';
import btn_ativado from '../../img/outros/toggle-on.png';
import btn_desativado from '../../img/outros/toggle-off.png';

interface FaixaSuperiorProps {
  toggleBackground: (isAtivado: boolean) => void;
  footerRef: React.RefObject<HTMLDivElement>; // Nova prop para a referência do Footer
  projectsRef: React.RefObject<HTMLDivElement>;
}

function FaixaSuperior({ toggleBackground, footerRef, projectsRef }: FaixaSuperiorProps) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isAtivado, setIsAtivado] = useState(false);
  const textColor = isAtivado ? 'text-darkGreen' : 'text-white';

  // Função chamada ao clicar no botão
  const handleScrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleClick = () => {
    setIsAtivado(!isAtivado);
    toggleBackground(!isAtivado);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-row content-center justify-between items-center bg-transparent backdrop-blur-md h-[80px] w-full">
        <div>
          <img
            src={isAtivado ? logo_escuro : logo_claro}
            alt="Logo"
            className="img-fluid mx-3 w-[90px] h-[60px]"
          />
        </div>
        <div className="flex flex-row content-center justify-between items-center gap-[40px] max-[1700px]:gap-[20px] max-[630px]:hidden">
          <span onClick={handleScrollToProjects} className={`ms-1 ${textColor} text-20px font-ruso cursor-pointer`}>Projetos</span>
          <span onClick={handleScrollToFooter} className={`ms-1 ${textColor} text-20px font-ruso cursor-pointer`}>
            Contato
          </span>

          <img
            src={isAtivado ? btn_ativado : btn_desativado}
            alt="Botão de Ativação"
            className="img-fluid mx-3 w-[50px] h-[50px]"
            onClick={handleToggleClick}
          />
        </div>
        <button className='hidden max-[630px]:flex pr-[20px]' onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className={`${textColor} text-2xl `} />
        </button>
      </div>
      {menuOpen && (
        <div className='mobile-menu fixed top-[80px] left-0 right-0 z-40 bg-transparent backdrop-blur-md flex flex-col items-center gap-[10px]'>
          <span onClick={handleScrollToProjects} className={`ms-1 ${textColor} text-20px font-ruso cursor-pointer`}>Projetos</span>
          <span onClick={handleScrollToFooter} className={`ms-1 ${textColor} text-20px font-ruso cursor-pointer`}>
            Contato
          </span>

          <img
            src={isAtivado ? btn_ativado : btn_desativado}
            alt="Botão de Ativação"
            className="img-fluid mx-3 w-[50px] h-[50px]"
            onClick={handleToggleClick}
          />
        </div>
      )}

    </>
  );
}

export default FaixaSuperior;
