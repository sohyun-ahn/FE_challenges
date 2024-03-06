import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkHtml from "remark-html";
import { remark } from "remark";

// workingdirectory/posts로 path.join
const postsDirectiory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // /posts아래의 파일 이름 잡아주기
  // fileNames = ['pre-rendering.md', ...]
  const fileNames = fs.readdirSync(postsDirectiory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    // Read Markdown file as String
    const fullPath = path.join(postsDirectiory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  // Sorting
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectiory); //fileName들이 들어있음

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectiory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHTML
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}
