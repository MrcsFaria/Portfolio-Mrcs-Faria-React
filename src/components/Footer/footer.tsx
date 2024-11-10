import React from 'react';

import logo_lkd from '../../img/logos-contato/LinkedIn.png';
import logo_git from '../../img/logos-contato/GitHub.png';
import logo_mail from '../../img/logos-contato/Email.png';

interface FrameFooterProps {
  isAtivado: boolean;
  footerRef: React.RefObject<HTMLDivElement>; // Nova prop para receber a referência do Footer
}

function Footer({ isAtivado, footerRef }: FrameFooterProps) {
  const textColor = isAtivado ? 'text-darkGreen' : 'text-white';

  const handleClickEmail = () => {
    window.location.href = "mailto:contato.marcosvf@gmail.com";
  };

  const handleClickLinkedin = () => {
    window.open('https://br.linkedin.com/in/marcos-vinicius-faria-124266186', '_blank');
  };

  const handleClickGit = () => {
    window.open('https://github.com/MrcsFaria', '_blank');
  };

  return (
    <div ref={footerRef} className="footer flex flex-col content-center justify-between items-center gap-[45px]">
      <span className={`${textColor} text-40px font-ruso max-[700px]:text-28px max-[530px]:text-24px`}>Contato e Redes Sociais</span>
      <div className="flex flex-row content-center items-center">
        <div className="flex flex-col content-center items-center">
          <img
            onClick={handleClickLinkedin}
            src={logo_lkd}
            alt="Logo LinkedIn"
            className="img-fluid mx-3 w-[70px] hover:translate-y-[-5px] cursor-pointer max-[1060px]:w-[80px] h-[80px] 
                max-[930px]:w-[70px]
                max-[830px]:w-[65px]"
          />
        </div>
        <div className="flex flex-col content-center items-center">
          <img
            onClick={handleClickGit}
            src={logo_git}
            alt="Logo GitHub"
            className="img-fluid mx-3 w-[70px] hover:translate-y-[-5px] cursor-pointer max-[1060px]:w-[80px] h-[80px] 
                max-[930px]:w-[70px]
                max-[830px]:w-[65px]"
          />
        </div>
        <div className="flex flex-col content-center items-center">
          <img
            onClick={handleClickEmail}
            src={logo_mail}
            alt="Logo Email"
            className="img-fluid mx-3 w-[70px] hover:translate-y-[-5px] cursor-pointer max-[1060px]:w-[80px] h-[80px] 
                max-[930px]:w-[70px]
                max-[830px]:w-[65px]"
          />
        </div>
      </div>
      <span className={`${textColor} font-ruso`}>© 2024 Marcos Vinicius Faria</span>
    </div>
  );
}

export default Footer;
