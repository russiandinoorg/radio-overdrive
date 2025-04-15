import { useState, useRef, type FC } from 'react';
import styles from './player.module.scss';
import { VolumeProps } from './types';

export const Volume: FC<VolumeProps> = ({ audioRef }) => {
    const [volume, setVolume] = useState(0.5);
    const volumeRef = useRef<HTMLDivElement>(null);

    const volumeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <div className={styles.volume} ref={volumeRef}>
            <img src="/images/volume.svg" alt="Громкость" />
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
        </div>

    )
}