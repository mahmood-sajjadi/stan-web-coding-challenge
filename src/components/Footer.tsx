import { useMemo } from "react";
import './Footer.css'
import { Link } from "react-router-dom";
import type { FooterMenuItemType, SocialItemType, StoreItemTypes } from "../config";

type Props = {
    footerStyle?: React.CSSProperties;
    menuItems: FooterMenuItemType[];
    copyright: string;
    socials: SocialItemType[];
    stores: StoreItemTypes[]
}

const footerStyleBase = {
    backgroundColor: 'rgb(30, 30, 30)',
    display: 'block',
    width: 'calc(100% - 200px)',
    color: 'rgb(195, 192, 187)',
    fontSize: '10px'
}

const menuStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0',
}

const menuItemStyle = {
    listStyleType: 'none',
    display: 'contents',
    cursor: 'pointer',
}

const menuItemLinkStyle = {
    textDecoration: 'none',
}

const iconStyle = {
    height: '100%',
}

const socialMediaStyle = {
    ...menuStyle,
    float: 'left',
}

const socialMediaItemStyle = {
    listStyleType: 'none',
    display: 'block',
    cursor: 'pointer',
    height: '30px',
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
}

const storeStyle = {
    ...menuStyle,
    float: 'right',
}

const storeItemStyle = {
    listStyleType: 'none',
    display: 'block',
    cursor: 'pointer',
    height: '30px',
}

const socialAndStoreRowStyle = {
    marginTop: '50px',
}

function menuItemWithLink(title: string, url: string) {
    return (
        <Link to={url} style={menuItemLinkStyle}>
            {title}
        </Link>
    )
}

function menuItemsList(menuItems: FooterMenuItemType[]) {
    return (
        <nav>
        <ul id="footer-nav" style={menuStyle}>
            {
                menuItems.map(item => (
                    <li key={item.title} style={menuItemStyle}>
                        {item.url ? menuItemWithLink(item.title, item.url) : item.title}
                    </li>
                ))
            }
        </ul>
    </nav>
    )
}

function socialIconList(socials: SocialItemType[]) {
    return (
        <ul id="footer-social" style={socialMediaStyle}>
        {
            socials.map(item => {
                const style = {
                    ...socialMediaItemStyle,
                    backgroundImage: `url(${item.images.hover})`,
                }
                return (
                    <li key={item.title} style={style}>
                        <img src={item.images.normal} alt={item.title} style={iconStyle} />
                    </li>
                )
            })
        }
    </ul>
    )
}

function storeIconsList(stores: StoreItemTypes[]) {
    return (
        <ul id="footer-stores" style={storeStyle}>
        {
            stores.map(item => (
                <li key={item.title} style={storeItemStyle}>
                    <img src={item.image} alt={item.title} style={iconStyle} />
                </li>
            ))
        }
        </ul>
    );
}
export function Footer(props: Props) {
    const { footerStyle, menuItems, copyright, socials, stores } = props;

    const footerWrapperStyle = useMemo(() => ({
        ...footerStyleBase,
        ...footerStyle,
    }), [footerStyle]);

    const menu = useMemo(() => menuItemsList(menuItems), [menuItems]);

    const socialIcons = useMemo(() => socialIconList(socials), [socials]);

    const storeIcons = useMemo(() => storeIconsList(stores), [stores]);

    return (
        <footer style={footerWrapperStyle}>
            {menu}
            {copyright}
            <div style={socialAndStoreRowStyle}>
                {socialIcons}
                {storeIcons}
            </div>
        </footer>
    );
}