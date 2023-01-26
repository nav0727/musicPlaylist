import {AiOutlineDelete} from 'react-icons/ai'

import {
  ListContainer,
  RowJust,
  RowContainer,
  MusicImage,
  Container,
  Paragraph,
  Button,
} from '../MusicTrack/styleComponents'

const TrackItem = props => {
  const {trackItem, deleteMusic} = props
  const {id, imageUrl, name, genre, duration} = trackItem

  const onRemove = () => {
    deleteMusic(id)
  }

  return (
    <ListContainer>
      <RowJust>
        <RowContainer>
          <MusicImage src={imageUrl} alt="track" />
          <Container>
            <p>{name}</p>
            <p>{genre}</p>
          </Container>
        </RowContainer>
        <RowContainer>
          <Paragraph>{duration}</Paragraph>
          <Button onClick={onRemove} id={id} data-testid="delete">
            <AiOutlineDelete />
          </Button>
        </RowContainer>
      </RowJust>
    </ListContainer>
  )
}

export default TrackItem
