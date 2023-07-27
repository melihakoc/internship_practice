CREATE TABLE `language`(
    `language_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `language code` BIGINT NOT NULL
);
CREATE TABLE `roles`(
    `role_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `role` BIGINT NOT NULL
);
CREATE TABLE `user_permissions`(
    `user_permission_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `permission_id` BIGINT NOT NULL
);
CREATE TABLE `userRoles`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `role_id` BIGINT NOT NULL
);
CREATE TABLE `user`(
    `userID` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` BIGINT NOT NULL,
    `email` BIGINT NOT NULL,
    `password` BIGINT NOT NULL,
    `role_id` BIGINT NOT NULL
);
CREATE TABLE `Hospital_Translation`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `hospital_id` BIGINT NOT NULL,
    `language_id` BIGINT NOT NULL,
    `hospital_name` BIGINT NOT NULL
);
CREATE TABLE `permissions`(
    `permissions_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `permission_name` BIGINT NOT NULL
);
CREATE TABLE `hospitals`(
    `hospital_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `hospital name` BIGINT NOT NULL,
    `adress` BIGINT NOT NULL,
    `phone` BIGINT NOT NULL
);
CREATE TABLE `appointment`(
    `appointmentID` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `date` BIGINT NOT NULL,
    `hospital_id` BIGINT NOT NULL,
    `date` BIGINT NOT NULL,
    `time` BIGINT NOT NULL,
    `userID` BIGINT NOT NULL
);
ALTER TABLE
    `appointment` ADD CONSTRAINT `appointment_userid_foreign` FOREIGN KEY(`userID`) REFERENCES `user`(`userID`);
ALTER TABLE
    `userRoles` ADD CONSTRAINT `userroles_role_id_foreign` FOREIGN KEY(`role_id`) REFERENCES `roles`(`role_id`);
ALTER TABLE
    `appointment` ADD CONSTRAINT `appointment_hospital_id_foreign` FOREIGN KEY(`hospital_id`) REFERENCES `hospitals`(`hospital_id`);
ALTER TABLE
    `Hospital_Translation` ADD CONSTRAINT `hospital_translation_hospital_id_foreign` FOREIGN KEY(`hospital_id`) REFERENCES `hospitals`(`hospital_id`);
ALTER TABLE
    `Hospital_Translation` ADD CONSTRAINT `hospital_translation_language_id_foreign` FOREIGN KEY(`language_id`) REFERENCES `language`(`language_id`);
ALTER TABLE
    `userRoles` ADD CONSTRAINT `userroles_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`userID`);
ALTER TABLE
    `user_permissions` ADD CONSTRAINT `user_permissions_permission_id_foreign` FOREIGN KEY(`permission_id`) REFERENCES `permissions`(`permissions_id`);
ALTER TABLE
    `user_permissions` ADD CONSTRAINT `user_permissions_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`userID`);