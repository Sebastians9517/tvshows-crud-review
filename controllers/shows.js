const Show = require("../models/show");

module.exports = {
    new: newShow,
    create,
    index,
    show,
    delete: deleteShow,
    update
};

function newShow(req, res) {
    res.render("shows/new");
};

function create(req, res){
    req.body.watched = req.body.watched === 'on' ? true : false
    Show.create(req.body)
    .then(()=> {
        res.redirect('/shows')
    });
};

function index(req, res) {
    Show.find({}, (err, shows) => {
        res.render("shows/index", {shows});
    });
};

function show(req, res) {
    Show.findById(req.params.id, (err, show) => {
        res.render("shows/show", {show});
    });
};

function deleteShow(req, res) {
    Show.findByIdAndDelete(req.params.id, (err, show) => {
        res.redirect("/shows")
    })
};

function update(req, res) {
    req.body.watched = !!req.body.watched
    Show.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, show) => {
        res.redirect(`/shows/${show._id}`)
    })
};
