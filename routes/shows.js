var express = require('express');
var router = express.Router();
const showsCtrl = require("../controllers/shows");

/* GET users listing. */
router.get('/new', showsCtrl.new);
router.post('/', showsCtrl.create);
router.get('/', showsCtrl.index);
router.get('/:id', showsCtrl.show);
router.delete('/:id', showsCtrl.delete);
router.put('/:id', showsCtrl.update);

module.exports = router;
