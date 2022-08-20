"use strict"
const db = require("../database/connection");

let controller = {


    consulta: async function(req,res) {

    //    console.log("estado activo");
       const pool = await db.getConnection(); 
       try {
        var result = await pool.request().query("select Empresa,nit,telefono  from version");  
       } catch (error) {
          result = false;
       }
       console.log(result);
       if(!result) return res.status(500).send({succes: false, message:"error en conecion al servidor"});
       
       console.log(result.recordset);
       let nit= result.recordset[0]["nit"];
       let empresa= result.recordset[0]["Empresa"];
       let tel= result.recordset[0]["telefono"];
       
       return  res.status(200).send({
                    succes: true,
                    consulta: "pos01",
                    nit:nit,
                    Empresa:empresa,
                    telefono:tel
                    
                })    
            
    }

}



module.exports = controller