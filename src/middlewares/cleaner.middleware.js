import { sanitize } from  "perfect-express-sanitizer"


// sanitize.prepareSanitize - basicly cleans the payload with various levels of security like xss, sql, noSql
const cleanAdd = (req, res, next) => {
    const body = req.body;
    const sanitizedData = sanitize.prepareSanitize(body, { xss: true, sql: true, noSql: true, level: 5})
    req.body = sanitizedData;
    next();
}

export { cleanAdd }