# PHOTO-ALBUM SERVER
This server returns the api for the photo-album app


## How to Manually Test

1.  Run `yarn install or npm install` inside the root directory
2.  Run `yarn start or npm start` to start the server.
3.  The provided server returns a list of pictures when a `GET` request is made to [`http://localhost:5000/pictures`](http://localhost:5000/pictures).

---

## CRUD endpoints

1.  Create a new picture: 
> endpoint: `/pictures`, method: `post`<br />
2.  Read/Get all pictures: 
> endpoint: `/pictures`, method: `get`
3.  update a picture: 
> endpoint: `/pictures/:pictureID`, method: `put`<br />
4.  Delete a new picture: 
> endpoint: `/pictures/pictureID`, method: `delete`<br />

---

Structure of the API: 
```js
{
  id: should be a positive integer
  title: should be a string,
  subtitle: should be a number,
  image: should be a string,
  description: should be a text,
}
```

---

Tools:
* Express
* `axios` package
* AJAX
* Promises

