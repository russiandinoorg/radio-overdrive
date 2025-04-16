import { useState, useEffect, useRef, type FC } from 'react';
import styles from './player.module.scss';
import { VolumeProps } from './types';

export const Volume: FC<VolumeProps> = ({ audioRef }) => {
    const [volume, setVolume] = useState(0.5);
    const volumeRef = useRef<HTMLDivElement>(null);
    const [isVolumeVisible, setIsVolumeVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleVolume = () => {
        setIsVolumeVisible((prev) => !prev);
    };

    const volumeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <div className={styles.volume} ref={volumeRef}>
            <img className={styles.volumeIcon} src="/images/volume.svg" alt="Громкость" onClick={toggleVolume} />
            {(isVolumeVisible || !isMobile) && (
                <input
                    className={styles.range}
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={volumeHandler}
                    style={{
                        background: `linear-gradient(to right, #9337D4 ${volume * 100}%, #ccc ${volume * 100}%)`
                    }}
                />
            )}
        </div>

    )
}