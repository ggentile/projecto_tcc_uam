import Link from "next/link";
import styled from "styled-components"

interface itemProps{
    title: string;
    href: string;
}


const ItemsNav = styled(Link)`
    color: var(--textnav-color);
    font-weight: bold;
    font-family: inherit;
    font-size: 20px;
    text-decoration: none;
`

export function Navigator(props: itemProps) {
    return(
        <ItemsNav href={props.href}>{props.title}</ItemsNav>
    )   
}