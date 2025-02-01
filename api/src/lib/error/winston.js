import { createLogger, format, transports } from 'winston';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Specify the new logs folder
const logsFolder = path.join(__dirname, '../../../logs');

// Create the folder if it doesn't exist
if (!fs.existsSync(logsFolder)) {
    fs.mkdirSync(logsFolder, { recursive: true });
}

const logger = createLogger({
    level: 'error',
    format: format.json(),
    transports: [
        new transports.File({ filename: path.join(logsFolder, 'error.log') })
    ]
});

export default logger;
