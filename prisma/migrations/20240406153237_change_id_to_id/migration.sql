-- DropIndex
DROP INDEX "Candidate_id_key";

-- DropIndex
DROP INDEX "Party_id_key";

-- DropIndex
DROP INDEX "Position_id_key";

-- AlterTable
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Party" ADD CONSTRAINT "Party_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Position" ADD CONSTRAINT "Position_pkey" PRIMARY KEY ("id");
