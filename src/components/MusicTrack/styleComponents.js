import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

export const MusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #152850;
  color: #f9f9f9;
  height: 90vh;
  font-family: 'Roboto';
`

export const PlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 100%;
  overflow-y: scroll;
`

export const Banner = styled.div`
  display: flex;
  align-items: flex-end;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 300px;
  color: #f9f9f9;

  padding-left: 4vw;
`

export const MusicImage = styled.img`
  height: 80px;
  width: 150px;
`

export const ListContainer = styled.li`
  display: flex;
  list-style-type: none;
`

export const UlContainer = styled.ul`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

export const RowJust = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Paragraph = styled.p`
  margin-right: 10px;
  font-size: 20px;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  margin-right: 2vw;
  text-align: center;
`
export const Container = styled.div`
  margin-left: 2vw;
`

export const NoHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`

export const Heading = styled.h1`
  font-size: 20px;
`

export const Around = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 5vw 0px 5vw;
  align-items: center;
`
