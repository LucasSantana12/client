import * as S from './styles'
import Logo from '../../molecules/Logo';
import Menu from '../Menu';
import Button from '../../atoms/Button';

const Header = () => {
  return (
  
  <S.Box>
    <div className="wave"></div>
    <Logo/>
    <Menu/>
    <Button/>

  </S.Box>
  
  )

}

export default Header