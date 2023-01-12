import Frontend from '../templates/Frontend'
import * as S from './styles'
import ClientHeader from '../assets/client-header.png'

function Main() {

  return (
    <Frontend>
     
      <S.Container>
        <div>
          <h1>Soluções em tecnologia para a sua empresa</h1>
          <h6>Melhores soluções em CTFV e ServiceDesk para a segurança da sua empresa e satisfação dos seus clientes.</h6>
          </div>

        <S.ColumnImage>

          <img src={ClientHeader} alt="Quadro de imagem" />

        </S.ColumnImage>
      </S.Container>
     

    </Frontend>
  )
}

export default Main
 