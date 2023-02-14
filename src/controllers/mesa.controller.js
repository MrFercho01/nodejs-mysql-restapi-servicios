import getConnection from "./../database/database.js";

const getMesas = async (req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query('select * from Mesas');
        
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }    
};

const getMesa = async (req, res) => {
    try{
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('select * from Mesas where id = ?', id);
        
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }    
};

const addMesa = async (req, res) => {
    try{
        const { descripcion, id_ubicacion } = req.body[0];

        console.log(req.body);
        console.log(descripcion);
        
        const mesa = { descripcion, id_ubicacion };

        if ( descripcion === undefined || id_ubicacion === undefined ){
            res.status(400).json({ message: "Bad Request. Please fill all field" });
        }

        const connection = await getConnection();

        await connection.query("insert into Mesas set ?", mesa);

        res.json({ message: "Table Added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateMesa = async (req, res) => {
    try{
        console.log(req.params);        
        const { id } = req.params;
        const { descripcion, id_ubicacion } = req.body[0];
        console.log(req.body[0]);
        if ( id === undefined || id_ubicacion === undefined || descripcion === undefined ){
            res.status(400).json({ message: "Bad Request. Please fill all field" });
        }
        const mesa = { descripcion, id_ubicacion };
        const connection = await getConnection();
        const result = await connection.query('update Mesas set ? where id = ?', [mesa, id]);

        const [resultado] = await connection.query('select * from Mesas where id = ?', id);
        
        res.json(resultado);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }    
};

const deleteMesa = async (req, res) => {
    try{
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('delete from Mesas where id = ?', id);
        
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }    
};

export const methods = {
    getMesas,
    getMesa,
    addMesa,
    updateMesa,
    deleteMesa
};