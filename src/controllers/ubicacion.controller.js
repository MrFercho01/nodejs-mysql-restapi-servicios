import { getConnection } from "./../database/database.js";

const getUbicaciones = async (req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query('select * from Ubicaciones');
        
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }    
};

const getUbicacion = async (req, res) => {
    try{
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('select * from Ubicaciones where id_ubicacion = ?', id);
        //console.log(result);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }    
};

const addUbicacion = async (req, res) => {
    try{
        const { descripcion } = req.body[0];

        console.log(req.body);
        console.log(descripcion);
        
        const ubicacion = { descripcion };

        if (descripcion === undefined ){
            res.status(400).json({ message: "Bad Request. Please fill all field" });
        }

        const connection = await getConnection();

        await connection.query("insert into Ubicaciones set ?", ubicacion);

        res.json({ message: "Location Added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateUbicacion = async (req, res) => {
    try{
        console.log(req.params);        
        const { id_ubicacion } = req.params;
        const { descripcion } = req.body[0];
        console.log(req.body[0]);
        if ( id_ubicacion === undefined || descripcion === undefined){
            res.status(400).json({ message: "Bad Request. Please fill all field" });
        }
        const ubicacion = { descripcion };
        const connection = await getConnection();
        const result = await connection.query('update Ubicaciones set ? where id_ubicacion = ?', [ubicacion, id_ubicacion]);
        
        const [resultado] = await connection.query('select * from Ubicaciones where id_ubicacion = ?', id_ubicacion);
        
        res.json(resultado);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }    
};

const deleteUbicacion = async (req, res) => {
    try{
        console.log(req.params);
        const { id_ubicacion } = req.params;
        const connection = await getConnection();
        const result = await connection.query('delete from Ubicaciones where id_ubicacion = ?', id_ubicacion);
        
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }    
};

export const methods = {
    getUbicaciones,
    getUbicacion,
    addUbicacion,
    updateUbicacion,
    deleteUbicacion
};