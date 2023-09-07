import { pool } from "../db.js";

export const getEmployees = async (req, res) =>{
    try{
        const [rows] = await pool.query('SELECT * FROM relacionvehiculos')
        res.json(rows)
    }catch (error){
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    } 
} 

export const getEmployee = async (req, res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM relacionvehiculos WHERE id = ?', [req.params.id])

        if (rows.length <= 0) return res.status(404).json({
            message: 'Employee not found'
        })

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
} 

export const createEmployee = async (req, res) => {
    const {clvEmpleado, sucursal, nomEmpleado, apPaterno, apMaterno, yearModelo, modelo, colorMoto, numSerie, numPlacas, numPoliza, numInciso, polizaVencimiento, numFactura, fechaFactura, subtotalFactura, ivaFactura, totalFactura, aseguradora, estadoPoliza, observaciones} = req.body;
    try {
        const [rows] = await pool.query(
        'INSERT INTO relacionvehiculos (clvEmpleado, sucursal, nomEmpleado, apPaterno, apMaterno, yearModelo, modelo, colorMoto, numSerie, numPlacas, numPoliza, numInciso, polizaVencimiento, numFactura, fechaFactura, subtotalFactura, ivaFactura, totalFactura, aseguradora, estadoPoliza, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
        [clvEmpleado, sucursal, nomEmpleado, apPaterno, apMaterno, yearModelo, modelo, colorMoto, numSerie, numPlacas, numPoliza, numInciso, polizaVencimiento, numFactura, fechaFactura, subtotalFactura, ivaFactura, totalFactura, aseguradora, estadoPoliza, observaciones])
        res.status(201).json({
            id: rows.insertId,
            clvEmpleado,
            sucursal,
            nomEmpleado,
            apPaterno,
            apMaterno,
            yearModelo,
            modelo,
            colorMoto,
            numSerie,
            numPlacas,
            numPoliza,
            numInciso,
            polizaVencimiento,
            numFactura,
            fechaFactura,
            subtotalFactura,
            ivaFactura,
            totalFactura,
            aseguradora,
            estadoPoliza,
            observaciones
        })
   } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
   }
}

export const updateEmployee = async (req, res) => {
    const {id} = req.params;
    const {clvEmpleado, sucursal, nomEmpleado, apPaterno, apMaterno, yearModelo, modelo, colorMoto, numSerie, numPlacas, numPoliza, numInciso, polizaVencimiento, numFactura, fechaFactura, subtotalFactura, ivaFactura, totalFactura, aseguradora, estadoPoliza, observaciones} = req.body;

    try {
        
        const [result] = await pool.query('UPDATE relacionvehiculos SET clvEmpleado = IFNULL(?, clvEmpleado), sucursal = IFNULL(?, sucursal), nomEmpleado = IFNULL(?, nomEmpleado), apPaterno = IFNULL(?, apPaterno), apMaterno = IFNULL(?, apMaterno), yearModelo = IFNULL(?, yearModelo), modelo = IFNULL(?, modelo), colorMoto = IFNULL(?, colorMoto), numSerie = IFNULL(?, numSerie), numPlacas = IFNULL(?, numPlacas), numPoliza = IFNULL(?, numPoliza), numInciso = IFNULL(?, numInciso), polizaVencimiento = IFNULL(?, polizaVencimiento), numFactura = IFNULL(?, numFactura), fechaFactura = IFNULL(?, fechaFactura), subtotalFactura = IFNULL(?, subtotalFactura), ivaFactura = IFNULL(?, ivaFactura), totalFactura = IFNULL(?, totalFactura), aseguradora = IFNULL(?, aseguradora), estadoPoliza = IFNULL(?, estadoPoliza), observaciones = IFNULL(?, observaciones)  WHERE id = ?', 
        [clvEmpleado, 
         sucursal, 
         nomEmpleado, 
         apPaterno, 
         apMaterno, 
         yearModelo, 
         modelo, 
         colorMoto, 
         numSerie, 
         numPlacas, 
         numPoliza, 
         numInciso, 
         polizaVencimiento, 
         numFactura, 
         fechaFactura, 
         subtotalFactura, 
         ivaFactura, 
         totalFactura, 
         aseguradora, 
         estadoPoliza, 
         observaciones, 
         id])
   
        if (result.affectedRows === 0) return res.status(404).json ({
                message: 'Employee not found'
            })

        const [rows] = await pool.query('SELECT * FROM relacionvehiculos WHERE id =?', [id])

        console.log(result)
        res.json(rows[0])
   } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
   }
}

export const deleteEmployee = async (req, res) => {
   try {
        const [result] =  await pool.query('DELETE FROM relacionvehiculos WHERE id = ?', [req.params.id])
   
        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Employee not found'
        })

        res.sendStatus(204)
   } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
   }
}