import styled from "styled-components";
import {ReactNode} from "react";

type Props = {
    disabled?: boolean
    onClick: () => any
    children: ReactNode
}
export const SubmitButton = (props: Props) => {
    const {disabled, onClick, children} = props
    const handleClick = () => {
        if (!disabled) {
            onClick()
        }
    }
    const color = disabled ? 'lightgray' : '#eef9fe'
    const cursor = disabled ? '' : 'pointer'
    const hoverColor = disabled ? color : 'lightgray'

    return (
        <StyledButton
            onClick={handleClick}
            color={color}
            hoverColor={hoverColor}
            cursor={cursor}
        >
            {children}
        </StyledButton>
    )
}


const StyledButton = styled.button<{color: string, hoverColor: string, cursor: string}>`
  width: 200px;
  height: 6rem;
  cursor: ${p => p.cursor};
  outline: 0;
  border: 1px solid black;
  border-radius: 4px;
  background: ${p => p.color};

  &:hover {
    background: ${p => p.hoverColor};
  }
`
