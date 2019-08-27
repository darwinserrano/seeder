const express = require('express')
const app = express()
const port = 5000
const { History } = require('./models')

// const { exec } = require('child_process');
// exec('npx sequelize db:migrate', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(stdout);

//   exec('npx sequelize-cli db:seed:all', (err, stdout, stderr) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(stdout);
//   });

// });

app.get('/api/points', async (req, res) => {
  const data = await History
    .findAll({
      attributes: ['id', 'x', 'y'],
      limit: 1000
    })
  res.send(data)
})

app.get('/api/points/:id', async (req, res) => {
  const data = await History
    .findOne({
      where: { id: req.params.id },
      attributes: ['id', 'x', 'y'],
    })
  res.send(data)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))