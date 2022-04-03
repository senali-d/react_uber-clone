import Link from 'next/link'
import tw from 'tailwind-styled-components'
import Map from './components/Map'

export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-tecnologies-new-20218114.jpg" />
          <Profile>
            <Name>Rafeh Quazi</Name>
            <UserImage src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Whells
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberscedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1
`

const Header = tw.div`
  flex justify-between item-center
`

const UberLogo = tw.img`
  h-28
`

const Profile = tw.div`
  flex
`

const Name = tw.div`
  mt-4 w-20 text-sm
`

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px
`

const ActionButtons = tw.div`
  flex
`

const ActionButton = tw.div`
  bg-gray-200 flex-1 m-1 flex flex-col justify-center items-center rounded-lg transform hover:scale-105 transition text-xl cursor-pointer
`
const ActionButtonImage = tw.img`
  h-3/5
`

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`