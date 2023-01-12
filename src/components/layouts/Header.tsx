import { Navbar } from "@nextui-org/react";
import Link from "next/link";
import { parseCookies } from "nookies";

import UserMenu from "./UserMenu";
import LoginButton from "./LoginButton";
import { useAuthContext } from "context/AuthContext";

export const Header = () => {
  const { currentUser, loading, logout } = useAuthContext();
  const cookies = parseCookies();
  const avatarUrl = cookies.avatarUrl;
  const nickname = cookies.nickname;

  const collapseItems = [
    "ホーム",
    "認知療法とは",
    "コミュニティ",
    "利用規約",
    "プライバシー",
    "ヘルプ＆お問い合わせ",
  ];

  return (
    <Navbar isBordered maxWidth="lg" variant="sticky" className="bg-opacity-10">
      <Navbar.Toggle showIn="sm" aria-label="toggle navigation" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Link href="/">
          <div className="text-2xl font-bold">Daily Mind</div>
        </Link>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="sm"
        gap={20}
      >
        <Navbar.Link href="/">ホーム</Navbar.Link>
        <Navbar.Link href="/guide">認知療法とは</Navbar.Link>
        {/* <Navbar.Link href="#">コミュニティ</Navbar.Link> */}
        <Navbar.Link href="https://forms.gle/fdNoCX7MzChWnLFy7">
          お問い合わせ
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        {!loading && currentUser ? (
          <UserMenu
            currentUser={currentUser}
            onLogout={logout}
            avatarUrl={avatarUrl}
            nickname={nickname}
          />
        ) : (
          <LoginButton />
        )}
      </Navbar.Content>
      {/* <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 0}
          >
            <Link href="#">{item}</Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse> */}
    </Navbar>
  );
};
