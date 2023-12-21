import Link from 'next/link'
 
export default function PostList({menus }) {
  return (
    <ul>
      {menus.map((menu) => (
        <li key={menu.id}>
          <Link href={`/menu/${menu.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}