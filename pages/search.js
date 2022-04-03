import React from 'react'
import Link from 'next/link'
import tw from 'tailwind-styled-components'

const Search = () => {
  return (
    <Wrapper>
      <Link href="/">
        <ButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </ButtonContainer>
      </Link>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pckup location" />
          <Input placeholder='Where to?' />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <ConfirmButtonContainer>Confirm Locations</ConfirmButtonContainer>
    </Wrapper>
  )
}

export default Search

const Wrapper = tw.div`
  bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
  bg-white px-4
`

const BackButton = tw.img`
  h-12 hover:cursor-pointer
`

const InputContainer = tw.div`
  bg-white flex items-center mb-2 px-4
`

const FromToIcons = tw.div`
  w-10 flex flex-col mr-2 items-center
`

const Circle = tw.img`
  h-2.5
`

const Line = tw.img`
  h-10
`

const Square = tw.img`
  h-3
`

const InputBoxes = tw.div`
  flex flex-col flex-1
`

const Input = tw.input`
  h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none color-red
`

const PlusIcon = tw.img`
  w-10 h-10 bg-gray-200 rounded-full ml-3
`

const SavedPlaces = tw.div`
  flex items-center px-4 py-2 bg-white
`

const StarIcon = tw.img`
  bg-gray-400 w-10 h-10 rounded-full p-2 mr-2
`

const ConfirmButtonContainer = tw.div`
  bg-black px-4 py-3 mt-2 text-white mx-2 text-center text-2xl cursor-pointer
`

