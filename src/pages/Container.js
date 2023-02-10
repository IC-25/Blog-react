
import Header1 from './Header1/Header1'
import Main1 from './Main1/Main1'

const Container = ({blogs}) => {
    return (
      <>
      <Header1 />
      <Main1 blogs={blogs}/>
      </>
      
    )
  }
  
  export default Container