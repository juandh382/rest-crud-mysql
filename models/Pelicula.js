const connection = require('../config/connection.js');

class Pelicula {
    getAll() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM peliculas', (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados);
            });
        });
    }

    deleteOneById(id) {
        return new Promise((resolve, reject) => {

            connection.query('DELETE FROM peliculas WHERE id = ?', id, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }

    save(data) {

        const { titulo, estreno, taquilla, entradas, top } = data;

        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO peliculas(estreno, titulo, taquilla, entradas, top) values (?, ?, ?, ?, ?)', [estreno, titulo, taquilla, entradas, top], (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }

    getOneById(id) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM peliculas WHERE id = ?', id, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }

    update(data) {

            const { estreno, titulo, taquilla, entradas, top, id } = data;

            return new Promise((resolve, reject) => {
            connection.query('UPDATE peliculas SET estreno = ?, titulo = ?, taquilla = ?, entradas = ?, top = ? WHERE id = ?', [estreno, titulo, taquilla, entradas, top, id], (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });   
    }
}

module.exports = Pelicula