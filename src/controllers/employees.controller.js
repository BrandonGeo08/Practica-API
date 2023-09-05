import { pool } from "../db.js";


export const getEmployees = async (req, res) =>{
    try{
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)
    }catch (error){
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    } 
} 

export const getEmployee = async (req, res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])

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
    const {nombre, salary} = req.body
    try {
       
        const [rows] = await pool.query('INSERT INTO employee (nombre, salary) VALUES (?, ?)',
        [nombre, salary])
        res.send({
            id: rows.insertId,
            nombre, 
            salary,
    }   )
   } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
   }
}


export const updateEmployee = async (req, res) => {
    const {id} = req.params
    const {nombre, salary} = req.body

    try {
        
        const [result] = await pool.query('UPDATE employee SET nombre = IFNULL(?, nombre), salary = IFNULL(?, salary) WHERE id = ?', [nombre, salary, id])
   
        if (result.affectedRows === 0) return res.status(404).json ({
                message: 'Employee not found'
            })

        const [rows] = await pool.query('SELECT * FROM employee WHERE id =?', [id])

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
        const [result] =  await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
   
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