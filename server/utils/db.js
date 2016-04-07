// DATABASE CONNECTIONS

var connectionString = '';

if (process.env.DATABASE_URL != undefined) {
  connectionString = process.env.DATABASE_URL + 'ssl';
} else {
  connectionString = 'postgres://localhost:5432/homegrown';
}

module.exports = connectionString;
