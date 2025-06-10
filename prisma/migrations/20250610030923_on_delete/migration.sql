-- DropForeignKey
ALTER TABLE "PostCategories" DROP CONSTRAINT "PostCategories_category_id_fkey";

-- DropForeignKey
ALTER TABLE "PostCategories" DROP CONSTRAINT "PostCategories_post_id_fkey";

-- AddForeignKey
ALTER TABLE "PostCategories" ADD CONSTRAINT "PostCategories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostCategories" ADD CONSTRAINT "PostCategories_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
