const { execSync } = require('child_process');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

console.log('Setting up database...');
console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);

try {
  // Run Prisma migrations
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });
  console.log('Database migrations applied successfully.');

  // Seed the database
  execSync('node scripts/seed-db.js', { stdio: 'inherit' });
  console.log('Database seeded successfully.');
} catch (error) {
  console.error('Error setting up database:', error);
  process.exit(1);
}