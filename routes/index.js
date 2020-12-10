const express = require('express');

const router = express.Router();

const data = require('../data/data.json');
router.get('/', function (req,res) {
  res.render('index', {title: 'Beranda'})
})
router.get('/Features', function (req,res) {
  res.render('Features', {title: 'Features'});
})
router.get('/data-api', function (req,res) {
  res.render('data-api', {title: 'Data API Pizza', items: data});
});
router.get('/data', function (req,res) {
  res.render('data', {title: 'Data Dummy', number: 0, coba: data});
});
router.post('/data/hapus/:id', function name(req,res) {
 res.send('HALO');
})
router.post('/data/tambah', function name(req,res) {
  data.push(req.body);
  res.send(req.body)
 })
module.exports = router;