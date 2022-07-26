const app = require('./app');

const loger = require('./utils/logger');
const { PORT } = require('./config');

app.listen(PORT, () => {
    loger.info(`Server running on http://localhost:${PORT}/`);
});
