const { connectToDatabase, User } = require('./db');

async function main() {
  // Verbinden Sie sich mit der Datenbank
  await connectToDatabase();

  // Erstellen Sie einen neuen Benutzer und speichern Sie ihn in der Datenbank
  const newUser = new User({ username: 'testuser', password: 'testpassword' });
  await newUser.save();

  // Abfrage der Benutzer aus der Datenbank
  const users = await User.find({});
  console.log(users);
}

main().catch(console.error);
