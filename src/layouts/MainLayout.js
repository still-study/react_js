import {Header} from '../components/Header'

export const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <div className='content'>{children}</div>
        </>
            
        
    )
}