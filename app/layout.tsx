import "./global.css"

export const metdata = {
    title: "Jio Pay Chat Support",
    description: "Chat bot to support deal with jio Pay."
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export default RootLayout;