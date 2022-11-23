import {pool} from '../db/index.js' 
import { v4 as uuidv4 } from 'uuid';

export async function getPosts() {


    const result = await query ("SELECT * FROM posts ;");
    const pArray = result.rows;
    return pArray
}


export async function postsById(id){
    const result = await query ('SELECT * FROM posts WHERE postid = $1',[id]);
    const post = result.rows
    return post;
}


export async function createPost(body){
    const { title, description,stack} = body;
    const id = uuidv4()
    const result = await query (`INSERT INTO posts (id,title,description,stack) VALUES ('${id}','${title}','${description},'${stack}')`)
    const nPost = result.body
    return nPost
}
