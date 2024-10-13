var express = require('express');
var router = express.Router();
var qlsv = require('../public/models/qlsv');
var multer = require('multer');
/* GET home page. */


router.get('/getdata', async function (req, res, next) {
  const data = await qlsv.find();
  res.send(data);
});

router.get('/getdata/:id', async function (req, res, next) {
  var id = req.params.id;
  var data = await qlsv.findById({ _id: `${id}` }).exec();
  res.send({ data: data });
});
router.get('/getdata/:msv', async function (req, res, next) {
  var msv = req.params.msv;
  var data = await qlsv.findById({ _id: `${id}` }).exec();
  res.send({ data: data });
});

router.post('/insert-data', async function (req, res, next) {
  const value = {
    msv: req.body.msv,
    name: req.body.name,
    sex: req.body.sex,
    address: req.body.address,
    classroom: req.body.classroom,
  };
  const data = new qlsv(value);
  data.save();
});

router.delete('/delete-data/:id', async function (req, res, next) {
  var id = req.params.id;
  await qlsv.findByIdAndDelete({ _id: `${id}` }).exec();
});

router.put('/edit-data/:id', async function (req, res, next) {
  var id = req.params.id;
  var value = {
    msv: req.body.msv,
    name: req.body.name,
    sex: req.body.sex,
    address: req.body.address,
    classroom: req.body.classroom,
  };
  await qlsv.findByIdAndUpdate(`${id}`, value).exec();
});


module.exports = router;
