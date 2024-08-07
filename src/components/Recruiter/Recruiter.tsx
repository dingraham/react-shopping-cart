import tribeLogo from './tribelogo.jpeg';
import * as S from './style';

const Recruiter = () => (
  <S.Container>
    <S.Thumbnail>
      <img alt="Test Tribe Logo" src={tribeLogo} />
    </S.Thumbnail>
    <S.Description>
      <h3>How to Shift Left - Demo App</h3>
    </S.Description>
  </S.Container>
);

export default Recruiter;
