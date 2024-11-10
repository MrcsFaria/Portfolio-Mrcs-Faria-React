import React, { useRef, useState } from 'react';
import FaixaSuperior from '../../components/TopBar/topBar';
import FrameMenu from '../../components/FrameMenu/frameMenu';
import FrameTecnologias from '../../components/FrameTec/frameTec';
import AllProjects from '../../components/AllProjects/Projects';
import Footer from '../../components/Footer/footer';

export default function Menu() {
    const footerRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    const [bgColor, setBgColor] = useState('bg-black');  // Estado para controlar a cor de fundo
    const [isAtivado, setIsAtivado] = useState(false);

    const toggleBackground = (isAtivado: boolean): void => {
        setIsAtivado(isAtivado);
        setBgColor(isAtivado ? 'bg-white' : 'bg-black');
    };
    return (
        <div className={bgColor}>
            {/* Passa a função toggleBackground como prop */}
            <FaixaSuperior toggleBackground={toggleBackground} footerRef={footerRef} projectsRef={projectsRef} />
            <div className='flex flex-col gap-[220px]'>
                <FrameMenu isAtivado={isAtivado} />
                <FrameTecnologias isAtivado={isAtivado} />
                <AllProjects isAtivado={isAtivado} projectsRef={projectsRef}/>
                <Footer isAtivado={isAtivado} footerRef={footerRef} />
            </div>
        </div>
    );
}
