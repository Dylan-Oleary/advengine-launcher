import React, { useEffect, useMemo, useRef, useState } from "react";
import { Howl, Howler } from "howler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";

import songs from "./songs";

const AudioPlayer = () => {
    const playlist = songs.map(song => {
        return {
            id: song.id,
            song: new Howl({
                src: song.src,
                html5: true
            }),
            title: song.title,
            band: song.band,
            cover: song.cover
        };
    });

    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedSong, setSelectedSong] = useState(playlist[0]);

    useEffect(() => {
        if(selectedSong.song){
            selectedSong.song.play();
            setIsPlaying(true);
        }
    }, [selectedSong]);

    const play = () => {
        setIsPlaying(true);
        selectedSong.song.play();
    };

    const pause = () => {
        setIsPlaying(false);
        selectedSong.song.pause();
    };

    const nextSong = () => {
        selectedSong.song.stop();

        if(selectedSong.id === songs.length - 1){
            setSelectedSong(playlist[0]);
        } else {
            const newIndex = selectedSong.id + 1;

            setSelectedSong(playlist[newIndex]);
        }
    };

    const previousSong = () => {
        selectedSong.song.stop();

        if(selectedSong.id === 0){
            setSelectedSong(playlist[playlist.length - 1]);
        } else {
            const newIndex = selectedSong.id - 1;

            setSelectedSong(playlist[newIndex]);
        }
    };

    Howler.volume(0.75);

    return (
        <div id="AudioPlayer">
            <div className="song-info">
                <img src={selectedSong.cover} alt=""/>
                {selectedSong.title} By {selectedSong.band}
            </div>
            <div className="audio-controls">
                <button onClick={previousSong}>
                    <FontAwesomeIcon icon={faStepBackward} />
                </button>
                <button onClick={isPlaying ? pause : play}>
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
                <button onClick={nextSong}>
                    <FontAwesomeIcon icon={faStepForward} />
                </button>
            </div>
        </div>
    );
};

export default AudioPlayer;