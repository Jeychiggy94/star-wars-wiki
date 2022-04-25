import { Box, Image, Stack } from '@chakra-ui/react'



const Header = ({title}) => {
    return (
        <Box bgColor="#ffffff" boxShadow="0px 4px 40px rgba(0, 0, 0, 0.06)" h="88px" w="100%" mb={5}>
            <Stack
                align="center"
                as="header"
                direction="row"
                height="88px"
                justify="space-between"
                zIndex="banner"
            >
                <h3 style={{fontWeight: 'bold', marginLeft: 60, fontSize: 24}}>{title}</h3>
            </Stack>
        </Box>
    )
}

export default Header
