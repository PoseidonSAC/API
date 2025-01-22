/*
  Warnings:

  - You are about to drop the column `place` on the `control_boxes` table. All the data in the column will be lost.
  - Added the required column `place` to the `boxes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "boxes" ADD COLUMN     "place" TEXT  ;

-- AlterTable
ALTER TABLE "control_boxes" DROP COLUMN "place";
