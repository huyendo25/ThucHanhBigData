const Todo = require('../models/todo.model');

exports.todo_create = (req, res, next) => {
    console.log(req.body);
    let todo = new Todo(
        {
            todo: req.body.todo,
            done: false
        }
    );

    todo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/todo');
        // res.send(todo);
    });
};

exports.todo_getAll = (req, res, next) => {
    Todo.find(function (err, todos) {
        if (err) return next(err);
        res.send(todos);
    });
}

exports.todo_update = (req, res, next) => {

    Todo.findByIdAndUpdate(req.params.id, { done: true}).then(() => {
        console.log('done');
        res.redirect('/todo');
        // res.send("Update done");
    }).catch(err => {console.log(err)
    });
};

exports.todo_delete = (req, res, next) => {
    console.log(req.params.id);
    Todo.findByIdAndRemove(req.params.id).then(() => {
        console.log('deleted'); 
        // res.send("Deleted");
        res.redirect('/todo');
       
    }).catch(err => {console.log(err)})
}

exports.todo_index = (req, res, next) => {
    res.render('index');
}