const router = require('express').Router();
const { Pasien } = require('../controllers');

// GET localhost:8080/Pasien => Ambil data semua Pasien
router.get('/Pasien', Pasien.getDataPasien);

// GET localhost:8080/Pasien/2 => Ambil data semua Pasien berdasarkan id = 2
router.get('/Pasien/:id', Pasien.getDataPasienByID);

// POST localhost:8080/Pasien/add => Tambah data Pasien ke database
router.post('/Pasien/add', Pasien.addDataPasien);

// POST localhost:8080/Pasien/2 => Edit data Pasien
router.post('/Pasien/edit', Pasien.editDataPasien);

// POST localhost:8080/Pasien/delete => Delete data Pasien
router.post('/Pasien/delete/', Pasien.deleteDataPasien);

module.exports = router;