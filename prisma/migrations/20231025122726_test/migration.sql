-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "publishedDate" TIMESTAMP(3),
    "thumbnailUrl" TEXT,
    "shortDescription" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "authors" TEXT[],
    "categories" TEXT[],

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
