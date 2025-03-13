import { useState, useEffect, useRef, type FC } from 'react';
import gsap from "gsap";
import styles from './player.module.scss';
import { VolumeProps } from './types';

export const Volume: FC<VolumeProps> = ({ audioRef }) => {
    const [volume, setVolume] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const volumeRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    const toggleVolume = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            gsap.to(sliderRef.current, { opacity: 1, y: 0, duration: 0.3 });
        } else {
            gsap.to(sliderRef.current, { opacity: 0, y: 10, duration: 0.2 });
        }
    }, [isOpen]);

    const volumeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <div className={styles.volume} ref={volumeRef}>
            <button
                className={styles.volumeIcon}
                onClick={toggleVolume}
                aria-label="Настроить громкость"
            >
                🔊
            </button>
            <div ref={sliderRef} className={`${styles.slider} ${isOpen ? styles.open : ""}`}>
                <input
                    className={styles.range}
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={volumeHandler}
                />
            </div>
        </div>
    )
}