import path from 'path';
import React, {FC} from 'react';
import fs from 'fs/promises';


interface BlogProps {
  params: { slug: string, locale: string }
}

export async function loader({params}: BlogProps) {
  const filePath = path.join(process.cwd(), 'locale', `${params.locale}/${params.slug}.md`);
  const content = await fs.readFile(filePath, 'utf8')
  console.log(content);
  return {content};
}

const Blog: FC<BlogProps> = (props) => {
  const file = loader(props)
  console.log('file', file)
  return (
    <div>
      {props.params.slug}
    </div>
  );
};

export default Blog;