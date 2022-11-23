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
    const { user_name, title, description,stack} = body;
    const result = await pool.query (`INSERT INTO posts (user_name,title,description,stack) VALUES ('${user_name}','${title}','${description}','${stack}')`)
    const nPost = result.body
    return nPost
}

export async function delPost(username){
    const result = await pool.query(`DELETE FROM posts WHERE user_name = $1`,[username])
    const dPost = result.body
    return dPost
}
