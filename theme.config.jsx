import Image from "next/image"

export default {
    logo: <Image src={'/cerberusui-logo.png'} width={200} height={100} />,
    project: {
        link: 'https://github.com/Fabian-Kleine/cerberusui'
    },
    docsRepositoryBase: "https://github.com/Fabian-Kleine/cerberusui-docs/tree/main",
    head: (
        <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="Cerberusui" />
          <meta property="og:description" content="A UI Library for when you have to create a doomsday app in Javascript" />
        </>
    ),
    chat: {
        link: "https://www.npmjs.com/package/cerberusui",
        icon: <Image src={'/npm.png'} width={30} height={100} />
    },
    footer: {
        text: (
          <span>
            © Copyright 2024 {new Date().getFullYear()} ©{' '}
            <a className="underline" href="https://cerberusui.fabian-kleine.dev/" target="_blank">
              cerberusui
            </a>
            {" "}and{" "}
            <a className="underline" href="https://fabian-kleine.dev/" target="_blank">
              Fabian Kleine
            </a>
            .
          </span>
    )}
}