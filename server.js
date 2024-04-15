import express from 'express';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(path.join(__dirname, 'generated')));

app.listen(8080, () => {
    console.log('app is ready on 8080');
})