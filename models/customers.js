const {query} = require ("../db/index")


async function getCus() {


    const result = await query ("SELECT * FROM customers ;");
    const cArray = result.rows;
    return result.rows;
}


async function cusById(id){
    const result = await query ('SELECT * FROM customers WHERE customer_id = $1',[id]);
    const cus = result.rows
    return cus;
}

module.exports = {
 cusById,
 getCus


}