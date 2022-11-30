# Project Match Backend

An App for collaborating with other programmers on repositories (this is the backend of this app)
## Authors

- [Amina E](https://www.github.com/edmundsamina)
- [Tirso G](https://www.github.com/Tirsog)
- [Daniel B](https://www.github.com/Cmndgrab)
- [Marwa D](https://www.github.com/MarwaDawood)


## API 

#### Get all posts

```http
  GET api/post
```



#### Get item

```http
  GET /api/post/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


```http
  Post /api/post/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| | `object` | **Required**. Body of post |


```http
  Delete /api/post/${username}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. username of user to delete |


Schema 

