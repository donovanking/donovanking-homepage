import { AnimatePresence, motion } from 'framer-motion'
import { IconBUtton, useColorModeValue, useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = ( ) => {
    const { toggleColorMode } = useColorMode()
    const bg = useColorModeValue('lightBackgroundColor', 'darkBackgroundColor'); 
    const color = useColorModeValue('white', 'gray.800'); 
  

    return (
        <AnimatePresence initial = {false} mode='wait'>
            <motion.div style={{ display: 'inline-block'}}
            key={useColorModeValue('light', 'dark')}
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: 20, opacity: 0}}
            transition={{duration: 0.2}}
            >
                <IconButton 
                aria-label="Toggle theme"
                colorScheme={ useColorModeValue( 'purple', 'cyan')}
                icon={useColorModeValue(<MoonIcon/>,<SunIcon/>)}
                onClick={toggleColorMode}
                ></IconButton>
            </motion.div>
        </AnimatePresence>
        )   
}

export default ThemeToggleButton