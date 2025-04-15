"use client"

import MainHeader from "@/components/header/MainHeader";
import "./globals.css";
import MainFooter from "@/components/footer/MainFooter";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <MainHeader />

                <div className="py-44 px-10">
                    {children}
                </div>

                <MainFooter />
            </body>
        </html>
    );
}
