import { app, protocol } from 'electron';

protocol.registerStandardSchemes(['api']);
app.on('ready', () => {
  protocol.registerHttpProtocol('api', (request, callback) => {
    console.log({ request });
    callback({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
    });
  });
});
