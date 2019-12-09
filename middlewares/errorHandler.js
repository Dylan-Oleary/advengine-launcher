const errorHandler = (error, req, res, next) => {
    console.error(error);

    res.status(500);
    res.send({
        status: "error",
        message: "Something has gone horribly wrong while trying to load your games"
    });
};

module.exports = errorHandler;