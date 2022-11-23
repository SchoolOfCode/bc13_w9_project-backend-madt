
import {pool} from '../db/index.js' 


export async function getCus() {
    const result = await pool.query ("SELECT * FROM customers ;");
    const cArray = result.rows;
    return cArray
}


export async function cusById(id){
    const result = await pool.query ('SELECT * FROM customers WHERE customer_id = $1',[id]);
    const cus = result.rows
    return cus;
}

//  async function create(){
//     const result = await query ('INSERT INTO ')
//  }


