import {pool} from '../db/index.js' 

export async function getPosts() {
    const result = await pool.query ("SELECT * FROM posts ;");
    const pArray = result.rows;
    return pArray
}

export async function postsById(id){
    const result = await pool.query ('SELECT * FROM posts WHERE postid = $1',[id]);
    const post = result.rows
    return post;
}

export async function createPost(body){
    const { customer_id, title, description,stack} = body;
    const result = await pool.query (`INSERT INTO posts (customer_id,title,description,stack) VALUES ('${customer_id}','${title}','${description},'${stack}')`)
    const nPost = result.body
    return nPost
}
