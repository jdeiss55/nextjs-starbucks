import styles from './buttonui.module.scss'
import Image from 'next/image'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles);

    export default function ButtonUI ({icon, clickHandler}) {
    
    let btnuiClasses = cx({
        btnui: true,
        close : icon === "close"
    });
    
    return (
        <button 
            className={btnuiClasses}
            onClick={clickHandler}
        >
            <Image
                src={`/images/icon-${icon}.svg`}
                width={50}
                height={50}
                alt="menu icon"
            />
        </button>
    )
}