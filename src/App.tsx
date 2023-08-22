import './App.css'
import BenefitsSection from './components/BenefitsSection/BenefitsSection'
import CardList from './components/CardList/CardList'
import Header from './components/Header/Header'
import MyButton from './components/UI/Button/MyButton'
import Typography from './components/UI/Typography/Typography'
import cubes from './assets/Rectangles.svg'
import { CardPersonOpinion, card } from './data/cardType'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import Footer from './components/Footer/Footer'
import BackgroundWrapper from './components/BackgroundWrapper/BackgroundWrapper'
// import { useElementOnScreen } from './hooks/useElementOnScreen'

function App() {

    const cardDataCourseProgram:card[] = [
        {
            "id": "1",
            "type": "text",
            "variant": "blue",
            "title": "Data Science",
            "body": "Intro — AI vs ML. Exploratory data analysis: Pandas and NumPy. Visual data analysis."
          },
          {
            "id": "2",
            "type": "person",
            "image": "person1.png",
            "backgroundColor": "blue",
            "color": "white",
            "title": "Дмитро Тесон",
            "subtitle": "Head of Data Science Department in Nymoc",
            "description": "Протягом 10 років займається аналітикою соціальних мереж та реклами. Практикує розробку систем машинного навчання"
          },
          {
            "id": "3",
            "type": "text",
            "variant": "yellow",
            "title": "Classic Machine Learning",
            "body": "Classic Machine Learning Linear/polynomial regression. Logistic regression. NLP features. Evaluating models. Validation. Metrics. Time series analysis. Decision trees. Random forest / bagging. Boosting — XGBoost, LightGBM, CatBoost. Unsupervised learning. Feature engineering. Feature importance."
          },
          {
            "id": "4",
            "type": "person",
            "image": "person2.png",
            "backgroundColor": "yellow",
            "color": "dark",
            "title": "Ірина Дубіна",
            "subtitle": "Data Scientist in Open AI",
            "description": "Має багаторічний досвід розв’язання задач Machine Learning та практочної імплементації їх результатів. Спеціалізується на Time series analysis, Decision trees та Feature engineering."
          },
          {
            "id": "5",
            "type": "text",
            "variant": "orange",
            "title": "Intro to Deep Learning",
            "body": "Basic neural networks. Intro to PyTorch. DL in NLP. DL in CV."
          },
          {
            "id": "6",
            "type": "person",
            "image": "person3.png",
            "backgroundColor": "orange",
            "color": "dark",
            "title": "Олександр Моршко",
            "subtitle": "CV Lead in MonitorScign",
            "description": "Понад 12 років досвіду роботи у сфері розробки neural networks. Працює із Computer Vision, спеціалізується на завданнях з класифікації, object detection, OCR, metric learning."
          },
          {
            "id": "7",
            "type": "backgroundImageText",
            "image": "cardBackground1.png",
            "color": "white",
            "title": "Дізнайтеся більше",
            "body": "Почитайте про реальні кейси та проекти студентів курсу, що було реалізовано."
          }
    ]
    const cardDataOpinions:CardPersonOpinion[] = [
        {
            "id": "1",
            "type": "personOpinion",
            "name": "Андрій Головко",
            "image": "person4.png",
            "description": "Я отримав багато нової інформації на курсі. Завдання були корисими і практичними. Сподобалось пояснення матеріалу лекторами. Цікаві спікери. Я дуже задоволений курсом.",
            "date": "12/05/2022",
        },
        {
            "id": "2",
            "type": "personOpinion",
            "name": "Андрій Головко",
            "image": "person4.png",
            "description": "Я отримав багато нової інформації на курсі. Завдання були корисими і практичними. Сподобалось пояснення матеріалу лекторами. Цікаві спікери. Я дуже задоволений курсом.",
            "date": "12/05/2022",
        },
        {
            "id": "3",
            "name": "Андрій Головко",
            "image": "person4.png",
            "description": "Я отримав багато нової інформації на курсі. Завдання були корисими і практичними. Сподобалось пояснення матеріалу лекторами. Цікаві спікери. Я дуже задоволений курсом.",
            "date": "12/05/2022",
        },
        {
            "id": "4",
            "type": "personOpinion",
            "name": "Андрій Головко",
            "image": "person4.png",
            "description": "Я отримав багато нової інформації на курсі. Завдання були корисими і практичними. Сподобалось пояснення матеріалу лекторами. Цікаві спікери. Я дуже задоволений курсом.",
            "date": "12/05/2022",
        },
    ]

    function onSubmitForm(event: any) {
        console.log(event);
        
    }

    // const [benefitsRef,isBenefitsVisible] = useElementOnScreen()
    // const [cardListProgrammRef,isCardListProgramVisible] = useElementOnScreen()
    // const [cardListOpinionsRef,isardListOpinionsVisible] = useElementOnScreen()
    // const [informationSectionRef,isInformationSectionVisible] = useElementOnScreen()
    // const [formRef,isFormVisible] = useElementOnScreen()

    return (
        <>  
            <BackgroundWrapper>
                <Header />
            <section className="greeting">
                <Typography variant='body2'>Навчальний курс</Typography>
                <Typography variant='h1'><span className='greeting__h1__blue'>Large Language Model </span> Learning Beginning</Typography>
                <Typography variant='body2'>Лабораторія з застосування штучного інтелекту й машинного навчання з акцентом на практику </Typography>
                <MyButton colorType='yellow'>Зареєструватися</MyButton>
            </section>
            </BackgroundWrapper>
            <BenefitsSection />
            <CardList title='Програма курсу' cardsInformation={cardDataCourseProgram}/>
            <BackgroundWrapper>
                <section className="information">
                    <div className='information__first__part__wrappper'>
                        <img src={cubes} alt="" />
                        <span className='information__part__preview'>
                            <Typography variant='h4'>LLM Learning</Typography>
                            <span className='information__subtitle'>
                                <Typography variant='body2'>буде корисною</Typography>
                            </span>
                        </span>
                        <span className='information__part__main'>
                            <ul className='information__fist__list'>
                                <li>
                                    <Typography variant='body2'>людям, які чули про AI та ML, але не намагалися застосовувати його у житті та роботі;</Typography>
                                </li>
                                <li>
                                    <Typography variant='body2'>підприємцям, які прагнуть підсилити ceбе та свої бізнеси новими технологіями, зокрема AI та ML</Typography>
                                </li>
                            </ul>
                            <MyButton>Проконсультувати мене</MyButton>
                        </span>
                    </div>
                    <span className='information__second__part__wrapper'>
                    <span className='information__part__preview'>
                        <Typography variant='body2'>ви зможете:</Typography>
                    </span>
                        <ul>
                            <li>
                                <Typography variant='body2'>розібратися, як використовувати готові AI/ML інструменти, не пишучи жодного рядка коду, під час практичних тренінгів;</Typography>
                            </li>
                            <li>
                                <Typography variant='body2'>зрозуміти оптимальні стратегії поступового впровадження штучного інтелекту в компанії;</Typography>
                            </li>
                            <li>
                                <Typography variant='body2'>зрозуміти переглядати відео y зручний час.</Typography>
                            </li>
                        </ul>
                    </span>
                </section>
            </BackgroundWrapper>
            <CardList titleColor={'white'} className={'card__list__opinions'} title='Відгуки' cardsInformation={cardDataOpinions}/>
            <BackgroundWrapper>
                <section className="feedback">
                    <span className='feedback__information'>
                        <Typography variant='h4'>Давайте поговоримо</Typography>
                        <Typography variant='body2'>Якщо маєте запитання, ми із задоволенням дамо на них відповідь </Typography>
                        <MyButton>Проконсультувати мене</MyButton>
                    </span>
                    <RegistrationForm onSubmitProp={onSubmitForm} />
                </section>
            </BackgroundWrapper>
            <Footer />

        </>
    )
}

export default App
