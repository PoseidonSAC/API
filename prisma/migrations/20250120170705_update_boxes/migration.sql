/*
  Warnings:

  - You are about to drop the column `hasLiquid` on the `boxes` table. All the data in the column will be lost.
  - You are about to drop the column `id_control_boxes` on the `boxes` table. All the data in the column will be lost.
  - You are about to drop the column `place` on the `boxes` table. All the data in the column will be lost.
  - You are about to drop the column `reported_by` on the `boxes` table. All the data in the column will be lost.
  - Added the required column `id_control_place` to the `boxes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "boxes" DROP CONSTRAINT "boxes_id_control_boxes_fkey";

-- AlterTable
ALTER TABLE "boxes" DROP COLUMN "hasLiquid",
DROP COLUMN "id_control_boxes",
DROP COLUMN "place",
DROP COLUMN "reported_by",
ADD COLUMN     "id_control_place" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "control_place" (
    "id" SERIAL NOT NULL,
    "id_control_boxes" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "date_arrive" TIMESTAMP(3) NOT NULL,
    "concluded" BOOLEAN NOT NULL DEFAULT false,
    "reported_by" TEXT NOT NULL,
    "hasLiquid" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "control_place_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "control_place" ADD CONSTRAINT "control_place_id_control_boxes_fkey" FOREIGN KEY ("id_control_boxes") REFERENCES "control_boxes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "boxes" ADD CONSTRAINT "boxes_id_control_place_fkey" FOREIGN KEY ("id_control_place") REFERENCES "control_place"("id") ON DELETE CASCADE ON UPDATE CASCADE;
