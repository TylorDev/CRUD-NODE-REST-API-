import { pool } from "../db.js";



export const getEmpleados= async(req, res)=>{
    try {
        const [rows] = await pool.query('select * from empleado')
        res.json
        res.send(rows)
    } catch (error) {
       return res.status(500).json({
        message: "Algo salio mal, master."
       }) 
    }
    
};
export const getEmpleado= async(req, res)=>{
   try {
     const [rows] = await pool.query('select * from empleado where id=?',[req.params.id])
 
 
     if(rows.length<=0) return res.status(404).json({
         message: "empleado no encontrado lol!"
     });
     res.json(rows[0])
   } catch (error) {
    return res.status(500).json({
        message: "Algo salio mal, Capo."
       }) 
   }

};  


export  const createEmpleado = async (req, res)=>{
    const{name, salary } = req.body
  try {
     const [rows] = await pool.query('INSERT INTO empleado (nombre, salario) VALUES (?,?)', [name, salary])
     res.send(
      {
          id: rows.insertId,
          name,
          salary,
      }
      );
  } catch (error) {
    return res.status(500).json({
        message: "Algo salio mal, BRUH."
       }) 
  }
}


export const deleteEmpleado = async (req, res)=>{

   try {
     const [result] = await pool.query('Delete from empleado where id=?',[req.params.id])
 
     if (result.affectedRows<=0)  return res.status(404).json({ message: "No existe tal esclavo!"})
     
     res.sendStatus(204)
   } catch (error) {
    return res.status(500).json({
        message: "Algo salio mal, XD."
       }) 
   }
}

export const updateEmpleado = async (req, res)=>{
    const {id} = req.params
    const {name, salary } = req.body

    try {
        
    
        const [result] = await pool.query('UPDATE empleado SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE id = ?', [name, salary, id]);
         if(result.affectedRows === 0) return res.status(404).json({ message: "No puedes actualizar algo que no existe!"})
        
         const [rows] = await pool.query('select * from empleado where id=?',[id])
    
         res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Algo salio mal, finalmente . . . ."
           }) 
    }
}


