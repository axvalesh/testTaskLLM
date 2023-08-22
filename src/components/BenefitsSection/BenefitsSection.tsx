import cl from './BenefitsSection.module.css'
import cubes from '../../assets/Rectangles.svg'
import lego from '../../assets/lego-block.svg'
import wallet from '../../assets/wallet.svg'
import {forwardRef} from 'react'
import Typography from '../UI/Typography/Typography'


interface BenefitsSectionProps {
    className?: string;
}
const BenefitsSection = forwardRef<HTMLDivElement, BenefitsSectionProps>(({className},ref) => {
    return (
        <div ref={ref} className={`${cl.container} ${className}`}>
            <div className={cl.first__part}>
                <img src={cubes} alt="" />
                <span className={cl.fist__part__text}>
                    <Typography variant="body2">Лабораторія</Typography>
                    <Typography variant="h4">LLM Learning</Typography>
                </span>
            </div>
            <div className={cl.second__part}>
                <Typography>
                    Приєднуйтеся та скористайтеся нагодою:
                    <ul>
                        <li>
                            здобути практичні навички для ефективного
                            застосування штучного інтелекту без технічного
                            досвіду;
                        </li>
                        <li>
                            отримати поради від спікерів Google та інших
                            компаній під час лекцій та тренінгів.
                        </li>
                    </ul>
                    Після закінчення курсу ви матимете не тільки загальне
                    уявлення про те, чим є Machine Learning, а й глибоке
                    розуміння сучасних інструментів і нюансів їхнього
                    використання. А також отримаєте практичний досвід
                    тренування, валідації та тюнінгу різних моделей машинного
                    навчання.
                </Typography>
                <div className={cl.bonuses}>
                   <BonusesItem color='var(--accent_blue)' img={lego} title={'18 вересня 2023'} description={'тривалість курсу 3 місяці'}/>
                   <BonusesItem color='var(--accent_orange)' img={wallet} title={'10 000 грн/міс.'} description={'30 000 грн при повній оплаті курсу'}/>
                </div>
            </div>
        </div>
    )
})

export default BenefitsSection



interface BonusesItemProps {
    img: string;
    title: string;
    description: string;
    color?: string;
}
const BonusesItem = ({img,title,description,color}: BonusesItemProps) => {

    return (
      <section className={cl.bonuse__item}>
           <img src={img} alt="" />
           <Typography color={color} variant='h5'>{title}</Typography>
           <Typography variant='body1'>{description}</Typography>
      </section>
    );
};

