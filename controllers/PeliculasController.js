const Pelicula = require('../models/Pelicula');
const peliculaModel = new Pelicula();

class PeliculasController {

    async getAllMovies(req, res) {
        let peliculas = [];

        try {
            peliculas = await peliculaModel.getAll();
        } catch (error) {
            console.log(error);
        }

        const datos = {
            'peliculas': peliculas,
            'accion': '/agregar',
            'texto': 'Agregar una película'
        };

        res.render('read', datos);

    }


    async deleteOneById(req, res) {
        // console.log(req.params.id);
        const id = req.params.id;
        try {
            await peliculaModel.deleteOneById(id);
        } catch (error) {
            console.log(error)
        }
    }

    addMovie(req, res) {
        const datos = {
            texto: 'Volver',
            accion: '/'
        };
        res.render('insert', datos);
    }

    async insertMovie(req, res, next) {
        
        try {
            await peliculaModel.save(req.body);

        } catch(error) {
            return res.json({
                    'status': 'failed',
                    'msg': error
                });
        }

        return res.json({
                    'status': 'ok',
                    'msg': 'La pelicula se ha guardado correctamente!'
                });

    }

    async edit(req, res) {
        var 
            id = req.params.id,
            pelicula = await peliculaModel.getOneById(id),
            { id, estreno, titulo, taquilla, entradas, top } = pelicula[0];


        const fecha = new Date(estreno);

        let texto = fecha.getFullYear() + '-' + ((fecha.getMonth() + 1 < 10) ? ('0' + (fecha.getMonth() + 1)) : fecha.getMonth() + 1) + '-' + ((fecha.getDate() + 1 < 10) ? ('0' + (fecha.getDate() + 1)) : fecha.getDate() + 1) 


        res.render('editar', {
            id,
            estreno: texto,
            titulo,
            taquilla,
            entradas,
            top,
            texto: 'Volver',
            accion: '/'
        });
    }



    async updateRegister(req, res) {
        const data = req.body;

        try {
            await peliculaModel.update(data);
        } catch (error) {
            return res.json({
                status: 'faild',
                msg: error
            });
        }
        return res.json({
                status: 'ok',
                msg: 'El registro se ha actualizado exitosamente!'
            });
    }
}

module.exports = PeliculasController;