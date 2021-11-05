/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui';
import Styles from '../styles/navbar.module.css';
import Light from '../public/light.svg';
import Dark from '../public/dark.svg';
import { useState, useEffect } from 'react';


const ThemeChangeButton = () => {
    const [colorMode, setColorMode] = useColorMode()
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(true);
    });

    return (
        <header>
            <a className={Styles.icon + " " + Styles.ThemeChangeButton} onClick={(e) => {
                e.preventDefault();
                setColorMode(colorMode === 'light' ? 'dark' : 'light');
            }}>
            {
                !render ? null : (colorMode == 'light' ? <Light /> : <Dark />)
            }
            </a>
        </header>
    )
}

export default ThemeChangeButton;