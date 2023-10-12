-- CreateTable
CREATE TABLE "Password" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Password_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Password_password_key" ON "Password"("password");
