const express = require('express');
const router = express.Router();
const todo_controller = require('../controllers/todo.controller');

router.post('/create', todo_controller.todo_create);

router.get('/getAll', todo_controller.todo_getAll);

router.use( function( req, res, next ) {
    if ( req.query._method == 'DELETE' ) {
        req.method = 'DELETE';
        req.url = req.path;
    }
    else if (req.query._method == 'PUT') {
        req.method = 'PUT';
        req.url = req.path;
    }
    next(); 
});

router.put('/update/:id', todo_controller.todo_update);

router.delete('/delete/:id', todo_controller.todo_delete);

router.get('/', todo_controller.todo_index);


module.exports = router;