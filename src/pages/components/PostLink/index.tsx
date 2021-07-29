import { useSession } from "next-auth/client";
import Link from "next/link";
import { ReactElement } from "react";

interface PostLinkProps {
  children: ReactElement;
  slug: string;
}

export function PostLink({ children, slug }: PostLinkProps) {
  const [session] = useSession();
  let postLink ='';

  if (session && session.activeSubscription) {
    postLink = `/posts/${slug}`;
  } else {
    postLink = `/posts/preview/${slug}`;
  }

  return(
    <Link href={postLink}>
      {children}
    </Link>
  );
}
