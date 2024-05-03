import { Inter } from "next/font/google";
import { Krona_One } from "next/font/google";

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter'
})

export const krona_one = Krona_One({
    weight: ['400'],
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-krona-one'
})
