import Hero from './Hero'
import { UseGetAllTheProdut } from '../hooks/UseGetAllTheProduct'

const Index = () => {
    UseGetAllTheProdut()

    return (
        <>
            <Hero />
        </>
    )
}

export default Index
