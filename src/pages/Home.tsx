import { About } from "../layouts/About"
import { Contact } from "../layouts/Contact"
import { Hero } from "../layouts/Hero"
import { Work } from "../layouts/Work"

export const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Work />
            <Contact />
        </>
    )
}