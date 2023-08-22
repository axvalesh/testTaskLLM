import cl from './BackgroundWrapper.module.css'

interface BackgroundWrapperProps {
    children: React.ReactNode;
}
const BackgroundWrapper = ({children}: BackgroundWrapperProps) => {

    return (
      <div className={cl.background__container}>
           {children}
      </div>
    );
};

export default BackgroundWrapper;