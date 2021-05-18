const app = require('./app');
const http = require('http');
const { PORT } = require('./utils/config');
const connectToDB = require('./db');

connectToDB();

const server = http.createServer(app);

if(process.env.NODE_ENV === 'production')
{
	app.use(static('client/build'));
}
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
