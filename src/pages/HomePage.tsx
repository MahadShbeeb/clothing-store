import { Box } from '@mui/material'
import clothingImage from '../assets/store.jpg'

const HomePage = () => {
  return (
  <>
  <Box
  component="img"
   sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${clothingImage})` ,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
/>
</>
)
}

export default HomePage