import { app, protocol } from 'electron';

protocol.registerStandardSchemes(['api']);
app.on('ready', () => {
  protocol.registerStringProtocol('api', (request, callback) => {
    console.log({ request });
    callback(JSON.stringify({
      message: 'OK!'
    }));
  });
});
