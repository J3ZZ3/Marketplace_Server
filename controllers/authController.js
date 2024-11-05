const { auth } = require('../config/firebase');

// Register user
exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await auth.createUser({ email, password });
    res.status(201).json({ message: 'User registered successfully', user: userRecord });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await auth.getUserByEmail(email);
    const token = await auth.createCustomToken(user.uid);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(400).json({ error: 'Login failed' });
  }
};
