import * as S from './styles/content-style'

export function Content () {
  return (
    <S.ContentWrapper>
      <S.Header>
        <S.FileIconPrimary />
        <S.InputText />
      </S.Header>
      <S.Container>
        <S.TextArea />
        <S.Output>
          <h2>Bootcamp Brainn Co.</h2>
          <p>Lorem ipsum dolor sit amet simet</p>
        </S.Output>
      </S.Container>
    </S.ContentWrapper>
  )
}