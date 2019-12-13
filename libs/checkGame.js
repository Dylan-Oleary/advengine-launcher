/* 
* Check if each game is valid, and no levels/rooms are missing or invalid
*/
 const checkGame = game => {
    let errors = [];

    ["title", "meta"].forEach(key => {
        if(key === undefined || key.trim() === "") errors.push(`${key} cannot be empty`);
    });

    if(game.levels === undefined || game.levels === null || !Array.isArray(game.levels)){
        errors.push(`Levels are invalid`);
    } else {
        const { levels } = game;
        let expectedRooms = 1;
        const expectedChoices = 2;

        levels.forEach(level => {
            const { id, rooms } = level;

            if(rooms === undefined || !Array.isArray(rooms)) {
                errors.push(`Level ${id} has no rooms or the rooms are not an array`);
            } else {
                rooms.forEach((room, index) => {
                    const { choices } = room;

                    if(choices === undefined || !Array.isArray(choices)) {
                        errors.push(`Level ${id} - Room ${index + 1} has no choices or the choices are not array`);
                    } else {
                        if(choices.length !== expectedChoices) errors.push(`Level ${id} - Room ${index + 1} should have 2 choices but has ${choices.length}`);
                    }
                })
            }
        });
    }

    if(errors.length > 0) {
        console.error(errors);
        return false;
    } else {
        return true;
    }
};

module.exports = checkGame;