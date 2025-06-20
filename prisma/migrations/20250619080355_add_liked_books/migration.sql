-- CreateTable
CREATE TABLE "LikedBook" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "LikedBook_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LikedBook_userId_bookId_key" ON "LikedBook"("userId", "bookId");

-- AddForeignKey
ALTER TABLE "LikedBook" ADD CONSTRAINT "LikedBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
