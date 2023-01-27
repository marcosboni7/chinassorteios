-- DropForeignKey
ALTER TABLE `tickets` DROP FOREIGN KEY `Tickets_raffle_id_fkey`;

-- DropForeignKey
ALTER TABLE `tickets` DROP FOREIGN KEY `Tickets_user_id_fkey`;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_raffle_id_fkey` FOREIGN KEY (`raffle_id`) REFERENCES `raffles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
