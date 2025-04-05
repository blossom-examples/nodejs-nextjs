const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Checking database connection and data...');

  try {
    // Check connection
    await prisma.$connect();
    console.log('Successfully connected to database');

    // Count jokes
    const jokeCount = await prisma.joke.count();
    console.log(`Total jokes in database: ${jokeCount}`);

    // Get all jokes
    const jokes = await prisma.joke.findMany();
    console.log('\nJokes in database:');
    jokes.forEach(joke => {
      console.log(`\nID: ${joke.id}`);
      console.log(`Content: ${joke.content}`);
      console.log(`Author: ${joke.author}`);
      console.log(`Category: ${joke.category}`);
      console.log(`Likes: ${joke.likes}`);
      console.log(`Created: ${joke.createdAt}`);
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();