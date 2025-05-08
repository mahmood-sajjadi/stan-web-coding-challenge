export const homeUri = "/";

// this const could be modified to support more lists
export const programTypes = ["movie", "series"] as const;
export type ProgramType = typeof programTypes[number];

type ProgramTypeConfigType = {
    title: string;
    description: string;
    posterArtUrl: string;
    uri: string;
    type: ProgramType;
}

export const programTypesList: ProgramTypeConfigType[] = [
    {
        title: 'Series',
        description: 'Popular Series',
        posterArtUrl: '/placeholder.png',
        uri: 'series',
        type: 'series',   
    },
    {
        title: 'Movies',
        description: 'Popular Movies',
        posterArtUrl: '/placeholder.png',
        uri: 'movie',
        type: 'movie',
    }
];

export type FooterMenuItemType = {title: string; url?: string;};

export const footerMenu: FooterMenuItemType[] = [{
    title: 'Home',
    url: homeUri
}, {
    title: 'Terms and Conditions',
}, {
    title: 'Privacy Policy',
}, {
    title: 'Collection Statement'
}, {
    title: 'Help',
}, {
    title: 'Manage Account',
}];

export type SocialItemType = {
    title: string;
    images: {
        normal: string;
        hover: string;
    };
    url?: string;
};

export const socialItems: SocialItemType[] = [
    {
        title: 'Facebook',
        images: {
            normal: '/social/facebook-white.svg',
            hover: '/social/facebook-blue.svg',
        },
    },
    {
        title: 'X',
        images: {
            normal: '/social/twitter-white.svg',
            hover: '/social/twitter-blue.svg',
        },
    },
    {
        title: 'Instagram',
        images: {
            normal: '/social/instagram-white.svg',
            hover: '/social/instagram-blue.svg',
        },
    },
];

export type StoreItemTypes = {
    title: string;
    image: string;
    url?: string;
}

export const storeItems: StoreItemTypes[] = [
    {
        title: 'Apple Store',
        image: '/store/app-store.svg',
    },
    {
        title: 'Play Store',
        image: '/store/play-store.svg',
    },
    {
        title: 'Windows Store',
        image: '/store/windows-store.svg',
    },
];