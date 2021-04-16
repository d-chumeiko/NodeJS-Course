
const express = require('express');
const bodyParser = require("body-parser");
const { body, validationResult } = require('express-validator');
const {getAllTasks, addTask, getTaskById, deleteTaskById} = require('./tasks.services.api');

const app = express();
const port = 3000

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.route('/tasks')
  .get(getAllTasks)
  .post([
    body('text').isLength({ min: 5 }),
    body('header').isLength({ min: 3 })],
    (req, res) => {
      const errors = validationResult(req);

      if (errors) return res.status(400).json({ errors: errors.array() });
  
      addTask(req, res);
    })

app.route('/tasks/:id')
  .get(getTaskById)
  .delete(deleteTaskById)

app.listen(port, () => {
  console.log(`Task2 app listening at http://localhost:${port}`)
})
