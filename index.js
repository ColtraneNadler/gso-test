const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    res.status(400).send('No file uploaded.');
  } else {
    res.send('File uploaded successfully.');
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

