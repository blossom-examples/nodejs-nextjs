const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

console.log('Setting up database...');

// Log the database URL (with password masked for security)
const dbUrl = process.env.DATABASE_URL || '';
const maskedDbUrl = dbUrl.replace(/(postgresql:\/\/[^:]+:)[^@]+@/, '$1****@');
console.log(`DATABASE_URL: ${maskedDbUrl}`);

// Check if .env file exists
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  console.log('Environment variables loaded from .env');
} else {
  console.log('Warning: .env file not found. Make sure DATABASE_URL is set in your environment.');
}

// Check if Prisma schema exists
const schemaPath = path.join(__dirname, '..', 'prisma', 'schema.prisma');
if (fs.existsSync(schemaPath)) {
  console.log('Prisma schema loaded from prisma/schema.prisma');

  // Read and log the datasource provider
  const schemaContent = fs.readFileSync(schemaPath, 'utf8');
  const providerMatch = schemaContent.match(/provider\s*=\s*"([^"]+)"/);
  if (providerMatch) {
    console.log(`Datasource "db": ${providerMatch[1]} database`);
  }
} else {
  console.error('Error: Prisma schema not found at prisma/schema.prisma');
  process.exit(1);
}

try {
  // Run Prisma migrations
  console.log('Running database migrations...');
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });

  // Seed the database
  console.log('Seeding the database...');
  execSync('node scripts/seed-db.js', { stdio: 'inherit' });

  console.log('Database setup completed successfully!');
} catch (error) {
  console.error('Error setting up database:', error.message);
  if (error.stdout) console.error('stdout:', error.stdout.toString());
  if (error.stderr) console.error('stderr:', error.stderr.toString());
  process.exit(1);
}