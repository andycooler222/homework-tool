-- 为错题本添加图片字段和 AI 分析字段
ALTER TABLE wrong_questions ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE wrong_questions ADD COLUMN IF NOT EXISTS ai_analysis TEXT;

-- 创建 Storage bucket 用于存储错题图片（在 Supabase Storage 页面手动创建也可以）
-- 注意：需要在 Storage → Policies 中设置 public 访问权限
-- 1. 进入 Storage → Buckets → 新建 bucket: wrong-question-images
-- 2. 设置 Policies: 允许匿名上传和读取
