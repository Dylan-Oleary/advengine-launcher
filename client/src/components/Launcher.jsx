import React, { useEffect, useState } from "react";
import axios from "axios";

const Launcher = () => {
    const [gameLibrary, setGameLibrary] = useState([]);
    const [selectedGame, setSelectedGame] = useState({});

    useEffect(() => {
        axios.get("/api/games").then(({ data: gameLibrary }) => {
            setGameLibrary(gameLibrary);
        }).catch(error => {
            console.error(error);
        })
    }, []);

    return (
        <div id="Launcher">
            Launcher
        </div>
    )
};

export default Launcher