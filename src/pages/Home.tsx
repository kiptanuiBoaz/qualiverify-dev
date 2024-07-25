import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { Box, } from '@mui/material'
import { WhyChoose } from '../components/WhyChoose'
import { Demo } from '../components/Demo'
import { Solutions } from '../components/Solutions'
import { Features } from '../components/Features'
import { Pricing } from '../components/Pricing'
import { Contact } from '../components/Contact'
import { Cta } from '../components/Cta'
import { Footer } from '../components/Footer'
import { ScrollToTop } from '../components/ScrollToTop'

const Home = () => {
    return (<Box component={"main"}>
        <Navbar />
        <Hero />
        <WhyChoose />
        <Demo />
        <Solutions />
        <Features />
        <Pricing />
        <Contact />
        <Cta />
        <Footer />
        <ScrollToTop />

    </Box>

    )
}

export default Home