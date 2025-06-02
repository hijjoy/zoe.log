import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">all posts</Link>
      </p>
    </>
  );
}
