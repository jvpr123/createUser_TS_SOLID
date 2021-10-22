import { app } from './app';
import { router } from './routes';

const PORT = 4000;

app.use(router);

app.listen(PORT, () => console.log(`Server running on PORT ${ PORT }...`));