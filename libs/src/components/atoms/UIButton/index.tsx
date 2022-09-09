import type { FC } from "react"
import { css, useTheme } from "@emotion/react"

type UIButtonProps = {
  text: string
  handler?: React.MouseEventHandler<HTMLButtonElement>
  dark?: boolean
  strong?: boolean
}

const UIButton: FC<UIButtonProps> = ({ text, handler, strong }) => {
  const theme = useTheme()

  return (
    <button
      css={css`
        padding: 0.4rem 1.2rem;
        background: ${strong ? theme.bgInv : theme.bg };
        color: ${strong ? theme.fgInv : theme.fg };
        border: ${theme.border.hosoi} solid ${theme.fg};
        border-radius: ${theme.round.normal};
        font-weight: ${strong ? "700" : "500"};
      `}
      onClick={handler}>
      {text}
    </button>
  )
}

export default UIButton
