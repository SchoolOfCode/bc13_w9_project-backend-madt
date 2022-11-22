const {query} = require ("../db/index")


async function getPosts() {


    const result = await query ("SELECT * FROM posts ;");
    const pArray = result.rows;
    return pArray
}


async function postsById(id){
    const result = await query ('SELECT * FROM posts WHERE postid = $1',[id]);
    const post = result.rows
    return post;
}

module.exports = {
    postsById,
    getPosts
}