const fs = require("fs")
const path = require("path")

    const logMiddleware=(req, res, next) => {
    let texto = `El usuario ingresó a la ruta: ${req.url} \n`
    fs.appendFileSync(path.join(__dirname, "../logs/userLogs.txt"), texto)
    next()
}

module.exports = logMiddleware