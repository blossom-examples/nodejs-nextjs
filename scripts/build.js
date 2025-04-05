const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.build if it exists
const envBuildPath = path.join(__dirname, '..', '.env.build');
if (fs.existsSync(envBuildPath)) {
  console.log('Loading environment variables from .env.build');
  require('dotenv').config({ path: envBuildPath });
}

// Set NODE_ENV to production
process.env.NODE_ENV = 'production';

// Run the Next.js build
console.log('Running Next.js build...');
try {
  execSync('next build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}