const express = require('express');
const { completeApiModified } = require('./controller');
const app = express();
const cors = require('cors')//CRUZ

server.use(cors()) // que venga cualquier cliente a querer comunicarse con mi servidor (CRUZ)

app.get('/products', async (req, res) => {
   return res.send(await completeApiModified());
  });

const PORT = process.env.PORT || 3002;
  app.listen(PORT, () => {
    console.log(`La aplicación está escuchando en el puerto ${PORT}`);
  });