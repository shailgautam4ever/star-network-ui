import { BsFillPlayFill, BsStar, BsStarFill } from "react-icons/bs"
import { ActionWrapper, Button, ButtonOutline, Description, ItemContent, Rating, TagLine, Title } from "../../StyledComponent"

const MovieContent = ({ title, tagline, description, rating })=>{
  return(
    <ItemContent>
    <Title>{title}</Title>
    <TagLine>{tagline}</TagLine>
    <Description>{description}
    </Description>
    <Rating>
    {
      Array.from({length:5}).map((_ , i)=>{
        if(i<rating)
        return <BsStarFill key={i} color='#FFC700'/>
        return <BsStar key={i} color="white" />
})
    }
    </Rating>
    <ActionWrapper>
      <Button> <BsFillPlayFill size={20}/>Watch Now</Button>
      <ButtonOutline>Trailer</ButtonOutline>
    </ActionWrapper>
  </ItemContent>
  )
}

export default MovieContent;