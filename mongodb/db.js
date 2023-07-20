const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  // fügen Sie hier weitere Felder hinzu, die Sie speichern möchten
});

const User = mongoose.model('User', userSchema);

async function connectToDatabase() {
  await mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = { connectToDatabase, User };
