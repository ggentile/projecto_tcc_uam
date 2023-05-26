"use client"
import  styled  from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { Navigator } from "./nav-item";

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

const optionsNav = [
    { title: "Página Inicial", href: "/" },
    { title: "Sobre Nós", href: "/about" },
    { title: "Cases", href: "/cases" },
    { title: "Contato", href: "/contato" },

]

interface HeaderProps{

}

const TagInfo = styled.header`
    display: flex;
    align-items: center;
    justify-content space-between;
    padding: 20px 160px;
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
    align-items: center;
`

const Navbar = styled.nav`
    padding-right: 240px;
    width: 100px;
    display: flex;
    gap: 10px;
    white-space: nowrap
`

export function Header(props: HeaderProps){
    return(
        <TagInfo>
            <Logo className={sairaStencil.className}>Boto Agência </Logo>
            <Navbar>
                {optionsNav.map((menu, idx) => (
                    <Navigator title={menu.title} href={menu.href} key={idx}></Navigator>
                ))}
            </Navbar>
        </TagInfo>
    )
}