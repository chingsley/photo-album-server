const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

const getImageId = () => {
  return Math.floor(Math.random() * 1001);
};

let pictures = [
  {
    id: 1,
    title: 'Ben',
    subtitle: 'ben@lambdaschool.com',
    image: `https://picsum.photos/id/${getImageId()}/1000/1000`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum animi natus facilis placeat veritatis, ...'
  },
  {
    id: 2,
    title: 'Austen',
    subtitle: 'austen@lambdaschool.com',
    image: `https://picsum.photos/id/${getImageId()}/1000/1000`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum animi natus facilis placeat veritatis, ...'
  },
  {
    id: 3,
    title: 'Ryan',
    subtitle: 'ryan@lambdaschool.com',
    image: `https://picsum.photos/id/${getImageId()}/1000/1000`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum animi natus facilis placeat veritatis, ...'
  },
  {
    id: 4,
    title: 'Sean',
    subtitle: 'sean@lambdaschool.com',
    image: `https://picsum.photos/id/${getImageId()}/1000/1000`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum animi natus facilis placeat veritatis, ...'
  },
  {
    id: 5,
    title: 'Michelle',
    subtitle: 'michelle@gmail.com',
    image: `https://picsum.photos/id/${getImageId()}/1000/1000`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum animi natus facilis placeat veritatis, ...'
  },
  {
    id: 6,
    title: 'Luis',
    subtitle: 'luis@lambdaschool.com',
    image: `https://picsum.photos/id/${getImageId()}/1000/1000`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum animi natus facilis placeat veritatis, ...'
  },
];

app.use(cors());
app.use(bodyParser.json());

app.get('/pictures', (req, res) => {
  res.status(200).json(pictures);
});

app.post('/pictures', (req, res) => {
  const picture = { id: getNewId(), ...req.body };
  pictures = [...pictures, picture];
  res.status(201).json(pictures);
});

app.put('/pictures/:id', (req, res) => {
  const { id } = req.params;
  let pictureIndex = pictures.findIndex(picture => picture.id == id);

  if (pictureIndex >= 0) {
    pictures[pictureIndex] = { ...pictures[pictureIndex], ...req.body };
    res.status(200).json(pictures);
  } else {
    res
      .status(404)
      .json({ message: `The picture with id ${id} does not exist.` });
  }
});

app.delete('/pictures/:id', (req, res) => {
	pictures = pictures.filter(picture => picture.id != req.params.id);
	res.status(200).json(pictures);
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
