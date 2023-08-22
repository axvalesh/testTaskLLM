import {forwardRef, useEffect, useState } from 'react'
import { card } from '../../data/cardType'
import Typography from '../UI/Typography/Typography'
import CardItem from './CardItem/CardItem'
import cl from './CardList.module.css'
// import { useWindowSize } from '../../hooks/useWindowSize'

interface cardListProps {
    cardsInformation: card[];
    title: string;
    className?: string;
    titleColor?: string;
}
const CardList = forwardRef<HTMLDivElement,cardListProps>(({ cardsInformation,title,className,titleColor },ref) => {
 
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    console.log(windowWidth);
    
        const [currentCardIndex,setCurrentCardIndex] = useState(0)
        const totalCardsCount = cardsInformation.length

        function moveLeft() {
            if(currentCardIndex > 0) {
                setCurrentCardIndex(prev => prev - 1)
            } else {
                setCurrentCardIndex(totalCardsCount - 3)
            }
        }

        function moveRight() {
            if(currentCardIndex < totalCardsCount - 4) {
                
                setCurrentCardIndex(prev => prev + 1)
            } else {
                setCurrentCardIndex(0)
            }
        }

        return (
            <section ref={ref} className={`${cl.card__list} ${className}`}>
                <Typography color={titleColor} variant="h4">{title}</Typography>
                    {windowWidth >= 1024 && <>
                        <span onClick={moveLeft} className={`${cl.button__left} ${cl.button__move}`}> {'<'} </span>
                        <span onClick={moveRight} className={`${cl.button__right} ${cl.button__move}`}> {'>'} </span> 
                    </>}
                    
                    <div
                        className={cl.card__list__wrapper}
                        style={{transform: `translateX(-${currentCardIndex * 488}px)`}} //468px - item,and 20px gap
                        >
                        
                        {cardsInformation.map((card,index) => (
                            <CardItem key={index} card={card} />
                        ))}
                    </div>
            </section>
        )
})

export default CardList
