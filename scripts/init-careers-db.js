const path = require('path');
const backendPrismaPath = path.resolve(__dirname, '../../BridalSoftware/bridal-makeup-backend/node_modules/@prisma/client');
const { PrismaClient } = require(backendPrismaPath);

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || 'postgresql://postgres:Admin%40123@localhost:5432/BridalSofwtwareDb',
    },
  },
});

async function main() {
  try {
    console.log('Connecting to PostgreSQL via Prisma...');
    await prisma.$connect();
    console.log('Connected!');

    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS job_applications (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        applicant_name VARCHAR(150) NOT NULL,
        email VARCHAR(180) NOT NULL,
        phone VARCHAR(30) NOT NULL,
        position VARCHAR(120) NOT NULL,
        experience_level VARCHAR(30) NOT NULL,
        total_experience VARCHAR(50),
        location VARCHAR(120) NOT NULL,
        education VARCHAR(150) NOT NULL,
        resume_path VARCHAR(255) NOT NULL,
        resume_name VARCHAR(255) NOT NULL,
        linkedin_url VARCHAR(255),
        message TEXT,
        consent BOOLEAN NOT NULL DEFAULT true,
        application_status VARCHAR(30) NOT NULL DEFAULT 'NEW',
        email_sent BOOLEAN NOT NULL DEFAULT false,
        created_at TIMESTAMPTZ(6) NOT NULL DEFAULT now(),
        updated_at TIMESTAMPTZ(6) NOT NULL DEFAULT now()
      );
    `);
    console.log('SUCCESS: Table job_applications verified/created safely!');

    const count = await prisma.$queryRawUnsafe(`SELECT count(*) FROM job_applications;`);
    console.log('Job applications count in DB:', count);
  } catch (err) {
    console.error('Error creating job_applications table:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();

