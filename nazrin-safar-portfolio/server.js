const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Git add endpoint
app.post('/api/git/add', (req, res) => {
  exec('git add .', { cwd: __dirname }, (error, stdout, stderr) => {
    if (error) {
      console.error('Git add error:', error);
      return res.status(500).json({ error: 'Git add failed' });
    }
    console.log('Git add success:', stdout);
    res.json({ message: 'Files added successfully' });
  });
});

// Git commit endpoint
app.post('/api/git/commit', (req, res) => {
  const { message } = req.body;
  const commitMessage = message || 'Admin panel updates';
  
  exec(`git commit -m "${commitMessage}"`, { cwd: __dirname }, (error, stdout, stderr) => {
    if (error) {
      console.error('Git commit error:', error);
      return res.status(500).json({ error: 'Git commit failed' });
    }
    console.log('Git commit success:', stdout);
    res.json({ message: 'Changes committed successfully' });
  });
});

// Git push endpoint
app.post('/api/git/push', (req, res) => {
  exec('git push origin main', { cwd: __dirname }, (error, stdout, stderr) => {
    if (error) {
      console.error('Git push error:', error);
      return res.status(500).json({ error: 'Git push failed' });
    }
    console.log('Git push success:', stdout);
    res.json({ message: 'Changes pushed successfully' });
  });
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 