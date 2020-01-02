import React, { useEffect, useMemo, useRef, useState } from "react";
import { Howl, Howler } from "howler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStepBackward, faStepForward, faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

import songs from "./songs";

const AudioPlayer = () => {
    const playlist = songs.map((song, index) => {
        return {
            id: song.id,
            song: new Howl({
                src: song.src,
                html5: true,
                onload: () => {
                    if(index === 0){
                        setIsLoading(false);
                    }
                },
                onend: () => {
                    nextSong();
                }
            }),
            title: song.title,
            band: song.band,
            cover: song.cover
        };
    });

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [selectedSong, setSelectedSong] = useState(playlist[0]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(selectedSong.song && !isLoading){
            selectedSong.song.play();
            setIsPlaying(true);
        }

        return () => selectedSong.song.stop();
    }, [selectedSong, isLoading]);

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

    const toggleMute = () => {
        if(selectedSong.song._muted){
            selectedSong.song.mute(false);
            setIsMuted(false);
        } else {
            selectedSong.song.mute(true);
            setIsMuted(true);
        }
    }

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
                <marquee direction="right" scrollamount="4" className="song-text">
                    {selectedSong.title} By {selectedSong.band}
                </marquee>
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
                <button onClick={toggleMute}>
                    <FontAwesomeIcon icon={selectedSong.song._muted ? faVolumeMute : faVolumeUp} />
                </button>
            </div>
        </div>
    );
};

export default AudioPlayer;