import { ThemeProvider } from '@mui/material'
import theme from './theme/theme'

const ThemeProviderWrapper = ({ children }: any) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeProviderWrapper;