import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo_python from '../../img/logos-tec/python.png';
import logo_react from '../../img/logos-tec/react.png';
import alm from '../../img/fotos-projetos/alm.png';
import apex from '../../img/fotos-projetos/apex.png';
import tg from '../../img/fotos-projetos/tg-show.png';
import aut from '../../img/fotos-projetos/autent-show.png';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

interface FrameProjProps {
  isAtivado: boolean;
  projectsRef: React.RefObject<HTMLDivElement>;
}

function AllProjects({ isAtivado, projectsRef }: FrameProjProps) {
  const textColor = isAtivado ? 'text-darkGreen' : 'text-white';

  // Estado para controlar a tecnologia ativa
  const [tecnologiaAtiva, setTecnologiaAtiva] = useState<string | null>(null); // Pode ser 'react', 'python' ou null

  // Função para alternar o estado ao clicar nos botões
  const handleTecnologiaClick = (tecnologia: string) => {
    setTecnologiaAtiva(tecnologia === tecnologiaAtiva ? null : tecnologia); // Alterna entre a tecnologia ou desativa
  };

  const handleClickDeployApex = () => {
    window.open('https://apex-react-amber.vercel.app', '_blank'); // Abre o link em uma nova aba
  }

  const handleClickDeployAlm= () => {
    window.open('https://alm-front.vercel.app', '_blank'); // Abre o link em uma nova aba
  }

  const handleClickGitAlm= () => {
    window.open('https://github.com/MrcsFaria/ALM-FRONT', '_blank'); // Abre o link em uma nova aba
  }

  const handleClickGitApex = () => {
    window.open('https://github.com/MrcsFaria/apex-react', '_blank'); // Abre o link em uma nova aba
  }

  const handleClickGitTG = () => {
    window.open('https://github.com/MrcsFaria/Estoque-TG', '_blank'); // Abre o link em uma nova aba
  }

  const handleClickGit2FA = () => {
    window.open('https://github.com/MrcsFaria/Autenticacao-de-Dois-Fatores-2FA-', '_blank'); // Abre o link em uma nova aba
  }

  return (
    <div ref={projectsRef} className="projetos flex flex-col content-center justify-between items-center pt-[30px] gap-[35px]">
      <span className={`${textColor} text-40px font-ruso max-[700px]:text-28px max-[530px]:text-24px`}>Projetos</span>
      <span className={`${textColor} text-30px font-ruso max-[700px]:text-24px max-[530px]:text-20px`}>Selecione a Tecnologia</span>
      <div className="flex flex-row content-center items-center">
        <div className="flex flex-col content-center items-center hover:translate-y-[-5px] cursor-pointer" onClick={() => handleTecnologiaClick('react')}>
          <img
            src={logo_react}
            alt="Logo"
            className="img-fluid mx-3 max-[1060px]:w-[80px]
                max-[930px]:w-[70px]
                max-[830px]:w-[65px]"
          />
          <span className={`${textColor} font-ruso`}>React</span>
        </div>
        <div className="flex flex-col content-center items-center hover:translate-y-[-5px] cursor-pointer" onClick={() => handleTecnologiaClick('python')}>
          <img
            src={logo_python}
            alt="Logo"
            className="img-fluid mx-3 max-[1060px]:w-[80px]
                max-[930px]:w-[70px]
                max-[830px]:w-[65px]"
          />
          <span className={`${textColor} font-ruso`}>Python</span>
        </div>
      </div>
      <div className={`react-projs flex content-center items-center gap-[140px] pt-[40px] ${tecnologiaAtiva === 'react' ? '' : 'hidden'} max-[1700px]:gap-[100px] max-[1270px]:gap-[80px] max-[1000px]:gap-[40px] max-[1000px]:flex-col`}>
        <Card className="image-frame-card text-center w-[700px] h-[300px] max-[1700px]:w-[600px]  max-[1490px]:w-[500px]  max-[1270px]:w-[400px] max-[500px]:w-[300px] max-[390px]:w-[250px]">
          <div className="image-frame">
            <img
              src={alm}
              alt="Imagem "
              className="img-fluid"
            />
          </div>
          <Card.Body className="h-[180px] max-[1270px]:h-[200px] max-[500px]:h-[260px] max-[390px]:h-[290px]">
            <Card.Text><strong>ALM</strong></Card.Text>
            <Card.Text>Este projeto é um site de venda de tênis desenvolvido utilizando tecnologias modernas tanto no frontend quanto no backend.
            </Card.Text>
            <button onClick={handleClickDeployAlm} className='bg-neonGreen text-black font-ruso border border-white py-2 px-6 hover:bg-emerald-500'>
            <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 mr-2" />
              Deploy
            </button>
            <button onClick={handleClickGitAlm} className='bg-neonGreen text-black font-ruso border border-white py-2 px-6 hover:bg-emerald-500'>
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-2" />
            GitHub
            </button>
          </Card.Body>
        </Card>
        <Card className="image-frame-card text-center w-[700px] h-[300px] max-[1700px]:w-[600px]  max-[1490px]:w-[500px]  max-[1270px]:w-[400px] max-[500px]:w-[300px] max-[390px]:w-[250px]">
          <div className="image-frame">
            <img
              src={apex}
              alt="Imagem "
              className="img-fluid"
            />
          </div>
          <Card.Body className="h-[180px] max-[1270px]:h-[200px] max-[500px]:h-[240px]">
            <Card.Text><strong>APEX</strong></Card.Text>
            <Card.Text>Este projeto é um site para uma loja real de manutenção de televisores e projetores.
            </Card.Text>
            <button onClick={handleClickDeployApex} className='bg-neonGreen text-black font-ruso border border-white py-2 px-6 hover:bg-emerald-500'>
            <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 mr-2" />
              Deploy
            </button>
            <button onClick={handleClickGitApex} className='bg-neonGreen text-black font-ruso border border-white py-2 px-6 hover:bg-emerald-500'>
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-2" />
            GitHub
            </button>
          </Card.Body>
        </Card>
      </div>
      <div className={`python-projs flex content-center items-center gap-[140px] pt-[40px] ${tecnologiaAtiva === 'python' ? '' : 'hidden'} max-[1700px]:gap-[100px] max-[1270px]:gap-[80px] max-[1000px]:gap-[40px] max-[1000px]:flex-col`}>
        <Card className="image-frame-card text-center w-[700px] h-[300px] max-[1700px]:w-[600px]  max-[1490px]:w-[500px]  max-[1270px]:w-[400px] max-[500px]:w-[300px] max-[390px]:w-[250px]">
          <div className="image-frame">
            <img
              src={tg}
              alt="Imagem "
              className="img-fluid"
            />
          </div>
          <Card.Body className="h-[180px] max-[1700px]:h-[200px] max-[1270px]:h-[220px] max-[500px]:h-[265px]">
            <Card.Text><strong>Estoque TG</strong></Card.Text>
            <Card.Text>Este projeto é um sistema de gerenciamento de estoque desenvolvido em Python. O sistema permite gerenciar produtos, gerar códigos de barras, e visualizar relatórios.
            </Card.Text>
            <button onClick={handleClickGitTG} className='bg-neonGreen text-black font-ruso border border-white py-2 px-6 hover:bg-emerald-500'>
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-2" />
            GitHub
            </button>
          </Card.Body>
        </Card>
        <Card className="image-frame-card text-center w-[700px] h-[300px] max-[1700px]:w-[600px] max-[1490px]:w-[500px] max-[1270px]:w-[400px] max-[500px]:w-[300px] max-[390px]:w-[250px]">
          <div className="image-frame">
            <img
              src={aut}
              alt="Imagem "
              className="img-fluid"
            />
          </div>
          <Card.Body className="h-[180px] max-[1700px]:h-[200px] max-[1270px]:h-[220px] max-[500px]:h-[240px] max-[390px]:h-[310px]">
            <Card.Text><strong>Autenticação de Dois Fatores</strong></Card.Text>
            <Card.Text>Este projeto implementa um sistema de autenticação de dois fatores usando Python com a utilização de bibliotecas para cadastro, verificação, envio de emails e login de usuários.
            </Card.Text>
            <button onClick={handleClickGit2FA} className='bg-neonGreen text-black font-ruso border border-white py-2 px-6 hover:bg-emerald-500'>
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-2" />
            GitHub
            </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default AllProjects;
