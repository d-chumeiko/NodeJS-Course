const { v4: uuidv4 } = require('uuid');
const {readFile, writeFile} = require('./filesystem-operations');

function getAllTasks(req, res) {
  return readFile()
    .then((data, err) => {
      if(err) throw err;
      res.send(data);
    })
}

async function getTaskById(req, res) {
  const tasks = await readFile();
  const id = req.params.id

  if (!id) return res.send('Type Id correctly');

  const result = tasks.find(el => el.id === id);

  if (result) return res.send(result);

  return res.send(`Task with id: ${id} doesn\'t exist`);
}

async function deleteTaskById(req, res) {
  const tasks = await readFile();
  const id = req.params.id

  if (!id) return res.send('Type Id correctly');

  const result = tasks.filter(el => el.id !== id);

  if (tasks.length !== result.length) {
    await writeFile(result);
    return res.send(`Task with id: ${id} deleted`);
  }

  return res.send(`Task with id: ${id} doesn\'t exist`);
}

async function addTask(req, res) {
  const tasks = await readFile();

  if (req.body.tasks) {
    const body = JSON.parse(req.body.tasks);
    
    body.map(el => {
      el.id = uuidv4();
      tasks.push(el);
    });

    await writeFile(tasks);
    return res.send(await readFile());
  }

  const {header, text} = req.body;

  tasks.push({id:uuidv4(), header, text});
  await writeFile(tasks);
  return res.send(await readFile());  
}

module.exports = {
  getAllTasks, 
  addTask,
  getTaskById,
  deleteTaskById
};
