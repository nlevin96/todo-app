const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todo',
  password: 'post6129',
  port: 5432,
});

const getTasks = (request, response) => {
    pool.query('SELECT * FROM mytasks ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getTaskById = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('SELECT * FROM mytasks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const createTask = (request, response) => {
    const { task } = request.body
    
    pool.query('INSERT INTO mytasks (task) VALUES ($1)', [task], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send('Task added!')
    })
};

const updateTask = (request, response) => {
    const id = parseInt(request.params.id)
    const { task, done } = request.body
    
    pool.query(
    'UPDATE mytasks SET task = $1, done = $2 WHERE id = $3',
    [task, done, id],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send('Task updated!')
    })
};

const deleteTask = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('DELETE FROM mytasks WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};