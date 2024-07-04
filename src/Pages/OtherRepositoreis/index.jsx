import * as S from "./style";

export default function OtherRepos () {
  const [ repositoriesList, setRepositoriesList ] = useState(() => {
    const sessionRepositories = 
    JSON.parse(sessionStorage.getItem(''))
  })
  return (
    <>
      <h1>Outros repositórios</h1>
      <S.Wrapper>
        <S.Content>
          <S.Repositories>

            <S.HeaderRepo>
              <S.Title>
                ajude-pet
              </S.Title>
              <S.Tag>
                public
              </S.Tag>
            </S.HeaderRepo>

            <S.Details>
              sem descricao
            </S.Details>

            <S.Footer>
              <S.LeftInfo>
                html
              </S.LeftInfo>
            </S.Footer>

          </S.Repositories>
        </S.Content>
      </S.Wrapper>
    </>
  )
}