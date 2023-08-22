import cl from './Typography.module.css'


const allVariants: Record<string, React.FC<React.HTMLProps<any>>> = {
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
    h5: ({ children, ...props }) => <h5 {...props}>{children}</h5>,
    subtitle: ({ children, ...props }) => <h6 {...props}>{children}</h6>,
    body1: ({ children, ...props }) => <span {...props}>{children}</span>,
    body2: ({ children, ...props }) => <p {...props}>{children}</p>,
    inputText: ({ children, ...props }) => <p {...props}>{children}</p>,
    button: ({ children, ...props }) => <p {...props}>{children}</p>,
};


type VariantListTypes = 'h1' | 'h4' | 'h5' |'subtitle' |'body1' |'body2' |'inputText' | 'button';
  
interface TypographyProps {
  variant?: VariantListTypes;
  color?: string;
  children: React.ReactNode;
  [x: string]: any;
}
  
const Typography = ({ variant, color, children, ...props }: TypographyProps) => {

  const Component = variant ? allVariants[variant] : allVariants['body1'];
  const dynamicClassName = variant ? cl[variant] : cl['body1']

  return <Component {...props} className={`${dynamicClassName}`} style={{ color: color }}>{children}</Component>;

};
  
  export default Typography;
  