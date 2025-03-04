import "./global.css"

export const metadata = {
    title: "Your App Title",
    description: "Your App Description",
};
  

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export default RootLayout;