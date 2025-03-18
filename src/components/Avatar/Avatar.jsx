import x1 from "../../assets/image/icon.png";
import * as Avatar from "@radix-ui/react-avatar";
import * as HoverCard from "@radix-ui/react-hover-card";
import { StyledButton } from "../Login/Login";
import { useAuth } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const UserAvatar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <a
          className="ImageTrigger"
          href="https://chatgpt.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Avatar.Root className="AvatarRoot">
            <Avatar.Image
              className="AvatarImage"
              src={x1}
              width={50}
              height={50}
              style={{ borderRadius: "50%", marginTop: "1vh" }}
              alt="User Icon"
            />
            <Avatar.Fallback className="AvatarFallback" delayMs={600}>
              JY
            </Avatar.Fallback>
          </Avatar.Root>
        </a>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="HoverCardContent"
          sideOffset={5}
          style={{ background: "#9f9f9f88", height: 400, width: 220 }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <StyledButton onClick={handleLogout}>ログアウト</StyledButton>
            <StyledButton
              onClick={() =>
                window.open(
                  "https://forms.office.com/Pages/ResponsePage.aspx?id=xN1NfrvqJE6KADNH5VQVUhQUBqlXL5lItASR6F_g2EhURFQwSVo4VTlHSkdRTUZHNlBSWkpFNlhaWi4u",
                  "_blank",
                  "noopener"
                )
              }
            >
			{/* 問い合わせフォームの回答結果は以下より確認できる */}
			{/* https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&FormId=xN1NfrvqJE6KADNH5VQVUhQUBqlXL5lItASR6F_g2EhURFQwSVo4VTlHSkdRTUZHNlBSWkpFNlhaWi4u&Token=fa1069e4f4a146fb9f07e1b15bdefc17 */}
              問い合わせ
            </StyledButton>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default UserAvatar;
