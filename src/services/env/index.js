import config from './config';
import dotenv from 'dotenv';
import trimEnd from 'lodash/trimEnd';

export default function (dir) {
    dotenv.config({ path: `${trimEnd(dir, '/')}/.env` });

    const configEntries = config().map(({ key, value }) => {
        if (value == null) {
            throw new Error(`The key "${key} is null please revise your .env file"`);
        }

        return [`process.env.${key.trim()}`, JSON.stringify(value)];
    });

    return Object.fromEntries(configEntries);
}
