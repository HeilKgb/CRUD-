(async () => {
  const express = require('express');
  const controller = require('./controller')
  const { Router } = require('express');
  const router = Router();
  const app = express();
  const port = 3032;

  app.use(express.json())
  app.use('/clients', controller.clients);

      router.get('/', controller.clients)
      router.post('/create', controller.clients)
      router.put('/', controller.clients)
      router.delete('/', controller.clients)

      app.listen(port, () => console.log(`Listening on port ${port}!`));

}
)();