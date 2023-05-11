import { buttonItem } from "@/interfaces/ui";
import Button from "@mui/material/Button";
import "../styles/Home.module.css";

const GlobalButton = (butObj: buttonItem) => {
  const style = butObj.style
    ? (butObj.style as React.CSSProperties)
    : undefined;
  return (
    <Button
      href={butObj.url}
      className={butObj.cssName}
      type={butObj.type as string | undefined}
      onClick={
        butObj.onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined
      }
      style={style}
    >
      {butObj.content}
    </Button>
  );
};

export default GlobalButton;
