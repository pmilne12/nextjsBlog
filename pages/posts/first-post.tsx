import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
        />
      </Head>
      <h1>First Post</h1>
    </Layout>
  )
}

// const ProfilePicture = () => (
//   <Image
//     src="/images/profPic.jpg" // Route of the image file
//     height={200} // Desired size with correct aspect ratio
//     width={200} // Desired size with correct aspect ratio
//     alt="Your Name"
//   />
// )
//
// const Name = (val: string) => (
//   <h5> {val} </h5>
// )
