const { PrismaClient } = require('@prisma/client');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const prisma = new PrismaClient();

const jokes = [
  {
    content: "Why don't scientists trust atoms? Because they make up everything!",
    author: "Science Enthusiast",
    category: "puns",
    likes: 0
  },
  {
    content: "What do you call a fake noodle? An impasta!",
    author: "Pasta Lover",
    category: "puns",
    likes: 0
  },
  {
    content: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    author: "Farm Humor",
    category: "dad jokes",
    likes: 0
  },
  {
    content: "What do you call a bear with no teeth? A gummy bear!",
    author: "Wildlife Joker",
    category: "dad jokes",
    likes: 0
  },
  {
    content: "Knock, knock. Who's there? Lettuce. Lettuce who? Lettuce in, it's cold out here!",
    author: "Vegetable Fan",
    category: "knock-knock",
    likes: 0
  },
  {
    content: "I'm reading a book on anti-gravity. It's impossible to put down!",
    author: "Physics Buff",
    category: "one-liners",
    likes: 0
  },
  {
    content: "I used to play piano by ear, but now I use my hands.",
    author: "Music Enthusiast",
    category: "one-liners",
    likes: 0
  },
  {
    content: "Why don't eggs tell jokes? They'd crack up!",
    author: "Breakfast Club",
    category: "dad jokes",
    likes: 0
  },
  {
    content: "What do you call a bear with no teeth and no fur? A gummy bear!",
    author: "Wildlife Joker",
    category: "dad jokes",
    likes: 0
  },
  {
    content: "I'm on a seafood diet. I see food and I eat it!",
    author: "Foodie",
    category: "one-liners",
    likes: 0
  }
];

async function main() {
  console.log('Starting database seeding...');

  // Check if jokes already exist
  const existingJokes = await prisma.joke.count();
  if (existingJokes > 0) {
    console.log('Jokes already exist, skipping seeding');
    return;
  }

  // Create jokes
  for (const joke of jokes) {
    await prisma.joke.create({
      data: joke
    });
  }

  console.log(`Created ${jokes.length} jokes`);
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });