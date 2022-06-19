import { withSessionSsr } from "@/lib/withSession";
import dynamic from "next/dynamic";

const ChatBoxAdmin = dynamic({
  loader: () => import("@upstash/chatbox/admin"),
  ssr: false,
});

export default function Page() {
  return <ChatBoxAdmin />;
}

export const getServerSideProps = withSessionSsr(async function ({ req }) {
  const user = req.session.user;
  if (!user || !user?.isLoggedIn) {
    return {
      props: { user: { isLoggedIn: false } },
      redirect: { destination: "/chat/login" },
    };
  }
  return { props: { user } };
});
