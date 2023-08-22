import { CardBackgroundImageText, CardPerson, CardPersonOpinion, CardText, card } from '../../../data/cardType'
import Typography from '../../UI/Typography/Typography'
import cl from './CardItem.module.css'
import cubes from '../../../assets/Rectangles.svg'

interface CardItemProps {
    card: card
}

const CardItem = ({ card }: CardItemProps) => {
    if (card.type === 'text') {
        return <TextItem variant={card.variant} title={card.title} body={card.body} />
    } else if (card.type === 'person') {
        return (
            <PersonItem
                image={card.image}
                backgroundColor={card.backgroundColor}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                color={card.color}
            />
        )
    } else if (card.type === 'backgroundImageText') {
        return (
            <BackgroundImageTextItem
                image={card.image}
                color={card.color}
                title={card.title}
                body={card.body}
            />
        )
    } else if(card.type === 'personOpinion') {
        return <PersonItemOpinion name={card.name} description={card.description} image={card.image} date={card.date} />
    } else {
        return <></>
    }
}

export default CardItem

const TextItem = ({ variant, title, body }: CardText) => {

    let index = variant === 'blue' ? 0 : variant === 'yellow' ? 1 : variant === 'orange' ? 2 : 0
    let coloredWord = title.split(' ')[index]
    let allTitleText = title.split(' ')
    let allBodyText = body.split('.')
    const dynamicClass = cl[variant]    
    
    return (
        <article style={{border: `2px solid ${variant}`}} className={`${cl.card__item} ${cl.text__item}`}>
            <Typography variant="h5">
                {allTitleText.map((word,index) => word === coloredWord ? <span key={index} className={dynamicClass}>{`${word} `}</span> : `${word} `)}
            </Typography>
            <ul>
                <Typography variant="body2">
                    {allBodyText.filter(word => word !== "").map((word, index) => (
                        <li key={index}>{`${word}.`}</li>
                    ))}    
                </Typography>
            </ul>
            {allBodyText.length < 10 ? <img className={cl.cubes__image} src={cubes} alt="" /> : <></>}
        </article>
    )
}

const PersonItem = ({ image, backgroundColor, title, subtitle, description,color }: CardPerson) => {
    return (
        <article style={{ backgroundColor: `var(--accent_${backgroundColor})` }} className={`${cl.card__item} ${cl.person__item}`}>
            <img src={`/src/assets/${image}`} alt="" />
            <Typography color={`var(--primary_${color})`} variant="h5">{title}</Typography>
            <span className={cl.person__item__subtitle}><Typography  color={`var(--primary_${color})`}variant="button">{subtitle}</Typography></span>
            <Typography color={`var(--primary_${color})`} variant="inputText">{description}</Typography>
        </article>
    )
}

const BackgroundImageTextItem = ({ image, color, title, body }: CardBackgroundImageText) => {
    return (
        <article style={{ backgroundImage: `url('/src/assets/${image}')` }} className={`${cl.card__item} ${cl.background__item}`}>
            <Typography color={color} variant="h4">
                {title}
            </Typography>
            <Typography color={color} variant="body2">
                {body}
            </Typography>
        </article>
    )
}

const PersonItemOpinion = ({ image,description,date,name }: CardPersonOpinion) => {
    return (
        <article className={`${cl.card__item} ${cl.personOpinion__item}`}>
            <img src={`/src/assets/${image}`} alt="" />
            <Typography variant="h5">{name}</Typography>
            <span className={cl.personOpinion__item__subtitle}><Typography variant="inputText">{description}</Typography></span>
            <span className={cl.personOpinion__item__links}>
                <img src={`/src/assets/LinkedIn-icon-original.svg`} alt="linkedIn" />
                <Typography color={`var(--accent_blue)`} variant="subtitle">{date}</Typography>
            </span>
        </article>
    )
}