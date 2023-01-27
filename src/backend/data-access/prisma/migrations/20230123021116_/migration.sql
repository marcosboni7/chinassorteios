/*
  Warnings:

  - You are about to drop the `boughtnumber` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `admin` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `boughtnumber` DROP FOREIGN KEY `BoughtNumber_raffleId_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `admin` BOOLEAN NOT NULL;

-- DropTable
DROP TABLE `boughtnumber`;

-- CreateTable
CREATE TABLE `Tickets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `target` INTEGER NOT NULL,
    `raffle_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Tickets` ADD CONSTRAINT `Tickets_raffle_id_fkey` FOREIGN KEY (`raffle_id`) REFERENCES `raffles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tickets` ADD CONSTRAINT `Tickets_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
