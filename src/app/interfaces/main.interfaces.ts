export interface menu {
    nombre: string;
    subMenus: subMenu[]
}

export interface subMenu {
    nombre: string;
    iconoClase: string;
    link: string;
}