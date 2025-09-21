import { FolderKanban, LayoutDashboard, LayoutDashboardIcon, User } from "lucide-react";
// let's have the list of navbar items here

export const NAV_ITEMS = [
    {title: "Features", link: "/features"},
    {title: "Pricing", link: "/pricing"},
    {title: "Resources", link: "/resources"},
];
// let's have props for the tooltip component here only

export interface TooltipProps {
    text: string;
    bgColor?: string;
    textColor?: string; // can be hex, or any color name
    width?: string; // can be in px or %
};

export const LEFT_SIDE_BAR_ITEMS = [
    {title: "Dashboard", icon: LayoutDashboard, link: "/dashboard"},
    {title: "Profile", icon: User, link: "/profile"},
]

export const DUMMY_LEADERBOARD_DATA = [
    {
        standing: 3,
        name: "Alice",
        booksPublished: 4.
    },
    {
        standing: 3,
        name: "Alice",
        booksPublished: 4.
    },
    {
        standing: 3,
        name: "Alice",
        booksPublished: 4.
    },
    {
        standing: 3,
        name: "Alice",
        booksPublished: 4.
    },
    {
        standing: 3,
        name: "Alice",
        booksPublished: 4.
    },
    {
        standing: 3,
        name: "Alice",
        booksPublished: 4.
    },
    {
        standing: 3,
        name: "Alice",
        booksPublished: 4.
    },
    {
        standing: 3,
        name: "Alice",
        booksPublished: 4.
    },
    {
        standing: 3,
        name: "Alice",
        booksPublished: 4.
    },
    {
        standing: 3,
        name: "Alice",
        booksPublished: 4.
    },
    {
        standing: 3,
        name: "Alice",
        booksPublished: 4.
    },
    
]