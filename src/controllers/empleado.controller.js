import { request } from "http";
//import getConnection from "./../database/database.js";
import { pool } from "./../database/database.js";

const getEmpleados = async (req, res) => {
    try{
        //const connection = await getConnection();
        const result =  await pool.query('select * from Empleados');

        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }    
};

const getEmpleado = async (req, res) => {
    try{
        console.log(req.params);
        const { id } = req.params;
        //const connection = await getConnection();
        const result = await pool.query('select * from Empleados where id = ?', id);
        
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }    
};

const addEmpleado = async (req, res) => {
    try{
        const { Identificacion, Nombres, Cargo, Area } = req.body[0];

        console.log(req.body);
        console.log(Identificacion);
        
        const Empleado = { Identificacion, Nombres, Cargo, Area };

        if (Identificacion === undefined || Nombres === undefined || Cargo === undefined || Area === undefined){
            res.status(400).json({ message: "Bad Request. Please fill all field" });
        }

        //const connection = await getConnection();

        await pool.query("insert into Empleados set ?", Empleado);

        res.json({ message: "Employee Added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateEmpleado = async (req, res) => {
    try{
        console.log(req.params);        
        const { id } = req.params;
        const { Identificacion, Nombres, Cargo, Area } = req.body[0];
        console.log(req.body[0]);
        if ( id === undefined || Identificacion === undefined || Nombres === undefined || Cargo === undefined || Area === undefined){
            res.status(400).json({ message: "Bad Request. Please fill all field" });
        }
        const Empleado = { Identificacion, Nombres, Cargo, Area };
        //const connection = await getConnection();
        const result = await pool.query('update Empleados set ? where id = ?', [Empleado, id]);
        
        const [resultado] = await pool.query('select * from Empleados where id = ?', id);
        
        res.json(resultado);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }    
};

const deleteEmpleado = async (req, res) => {
    try{
        console.log(req.params);
        const { id } = req.params;
        //const connection = await getConnection();
        const result = await pool.query('delete from Empleados where id = ?', id);

        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }    
};

export const methods = {
    getEmpleados,
    getEmpleado,
    addEmpleado,
    updateEmpleado,
    deleteEmpleado
};