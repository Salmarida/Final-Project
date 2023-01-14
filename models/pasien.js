// import database
const db = require("../config/database");

// membuat class Model Pasien
class Student {
  /**
  * Membuat method static all.
  */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      /**
      * Melakukan query menggunakan method query.
      * Menerima 2 params: query dan callback
      */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }
  
  /**
  * TODO 1: Buat fungsi untuk insert data.
  * Method menerima parameter data yang akan diinsert.
  * Method mengembalikan data pasien yang baru diinsert.
  */
  static create(data) {
    // return new Promise((resolve, reject) => {
    db.query('INSERT INTO students SET ?', data, (err,results) => {
      if(err) throw err;
    });
    // });
  }

  static find(id){
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patient WHERE id = ?";

      db.query(sql, id, (err, results) => {
        const [patient] = results;
        resolve(patient);
      });
    });
  }

  static async update(id, data){
    await new Promise ((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [data,id], (err, results) => {
        resolve(results);
      });
    });
    const patient = await this.find(id);
    return patient;
  }

  static destroy(id){
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM patient WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
}

// export class patient
module.exports = patient;