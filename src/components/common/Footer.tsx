import link from '../../assets/icons/components/Footer/link.svg';
import mail from '../../assets/icons/components/Footer/mail.svg';
import messagecircle from '../../assets/icons/components/Footer/messagecircle.svg';
import devlogo from '../../assets/logos/devlogo.svg';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full h-[122px] bg-grey-800">
      <div className="flex flex-row justify-between items-center w-[327px] h-[62px]">
        {/* 왼쪽 정보 영역 */}
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center gap-[8px]">
            <img src={link} alt="link" className="w-[18px] h-[18px]" />
            <span className="caption-medium text-grey-200">개인정보 처리 방침 링크</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <img src={mail} alt="mail" className="w-[18px] h-[18px]" />
            <span className="caption-medium text-grey-200">devtalk11@gmail.com</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <img src={messagecircle} alt="messagecircle" className="w-[18px] h-[18px]" />
            <span className="caption-medium text-grey-200">문의하기</span>
          </div>
        </div>

        {/* 오른쪽 로고 */}
        <div className="flex items-start self-start">
          <img src={devlogo} alt="devlogo" className="w-[100px] h-[41.1px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
