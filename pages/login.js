import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import tw from 'tailwind-styled-components'
import { auth, provider } from '../firebase'

const Login = () => {

  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        router.push('/')
      }
    })
  }, [])

  return (
    <Wrapper>
      <UserLogo src="https://i.ibb.co/ZMhy8ws/uber-logo.jpg" />
      <Title>Log in to access your account</Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.jpg" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
  flex flex-col h-screen w-screen bg-gray-200  p-4
`

const SignInButton = tw.button`
  bg-black text-white text-center  py-4 mt-8
`

const UserLogo = tw.img`
  h-20 w-auto object-contain self-start
`

const Title = tw.div`
  text-4xl pt-4 text-gray-500
`

const HeadImage = tw.img`
  object-contain w-full h-auto
`