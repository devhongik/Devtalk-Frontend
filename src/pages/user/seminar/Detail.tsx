import { useParams } from 'react-router-dom';
import Header from '../../../components/common/Header';

function SeminarDetail() {
  const { id } = useParams();
  return (
    <div>
      <Header />
    </div>
  );
}

export default SeminarDetail;
