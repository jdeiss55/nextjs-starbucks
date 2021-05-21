import styles from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import ButtonUI from './buttonui'
import NavOverlay from './navoverlay'
import { useState } from 'react'
import Container from './container'
import Row from './row'

export default function Header() {

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    return (
        <header className = {styles.header}>
            <Container>
                <Row justifyContentSpaceBetween>
            <Link href="/">
                <a>
                    <Image 
                        src = "/images/starbucks-logo.svg"
                        width={100}
                        height={100}
                        alt="Starbucks logo"
                    />
                </a>
            </Link>
            <ButtonUI 
                icon="menu"
                clickHandler={() => {setIsMenuVisible(true)}}
            />
            {
                isMenuVisible &&
                    <NavOverlay closeClickHandler={() => {setIsMenuVisible(false)}}
                    isMenuVisible
                />
            }
            </Row>
        </Container>
        </header>
    )
}