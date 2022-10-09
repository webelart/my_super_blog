import { client } from '../../lib/client';

export default async function post(req, res) {
  const { start, end } = req.query;

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(400).end();
  }

  const { posts, total } = await loadData(start, end);

  res.status(200).json({
    posts,
    total
  })
}

export async function loadData(start, end) {
  const query = `{
    "posts": *[_type == "post"] | order(publishedDate desc) [${start}...${end}] {_id, publishedDate, title, slug, description, image},
    "total": count(*[_type == "post"])
  }`;

  const { posts, total } = await client.fetch(query);

  return {
    posts,
    total
  }
}
