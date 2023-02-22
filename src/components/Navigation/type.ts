export interface NavItemProps {
    item: MenuItemType
}

export interface MenuItemType {
    id: number
    title: string,
    link: string,
    children?: {id:number, title: string, link: string }[]
}

export interface SubMenuProps {
    item: MenuItemType
}
