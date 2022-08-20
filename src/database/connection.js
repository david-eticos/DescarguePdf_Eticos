'use strict'

const sql = require("mssql");


const dbsettings = {

    user: "webservice_f2" ,
    password: "D3v31Op3nt@p05oi",
    server: "10.120.120.25" ,
    database: "pos01" ,
    options: {
        encrypt: false, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
};


 const connet  = {

    getConnection: async function(){

        try {
            const pool = await sql.connect(dbsettings);
            return pool;
            
        } catch (error) {
            console.log(error);
        }
    }

 };
 

module.exports = connet;

