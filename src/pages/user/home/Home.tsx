import Cta from '../../../components/common/Cta';
import Footer from '../../../components/common/Footer';
import Header from '../../../components/common/Header';
import SeminarPoster from '../../../components/common/SeminarPoster';
import IntroDevtalk from '../../../assets/images/introDevtalk.svg';
import ReviewCard from '../../../components/common/ReviewCard';
import ExSeminar from '../../../assets/images/exSeminar.jpg';
import { ButtonExSeminar } from '../../../components/Button/ButtonExSeminar';
import Timer from '../../../assets/icons/common/devtalkTimer.png';
import Ticket from '../../../assets/icons/common/devtalkTicket.png';
import { Button } from '../../../components/Button/Button';
import Carousel from '../../../components/LectureCard/Carousel';
import { LectureCardMain } from '../../../components/LectureCard/LectureCardMain';
import { LectureCardSpeaker } from '../../../components/LectureCard/LectureCardSpeaker';
import { LectureCardSession } from '../../../components/LectureCard/LectureCardSession';
import { useNavigate } from 'react-router-dom';
import InfiniteCarousel from '../../../components/common/InfiniteCarousel';
import { useEffect, useRef, useState } from 'react';

// 임시 하드코딩
type SeminarInfo = {
  activeStartDate: string;
  activeEndDate: string;
};

const seminar: SeminarInfo = {
  activeStartDate: '2025-10-05T23:53:51.927Z',
  activeEndDate: '2025-10-08T23:53:51.927Z',
};

const Home = () => {
  const navigate = useNavigate();
  const exSeminarref = useRef<HTMLDivElement | null>(null);
  const [hideCTA, setHideCTA] = useState(false);

  const now = new Date();
  const isActive = now > new Date(seminar.activeStartDate) && now < new Date(seminar.activeEndDate);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHideCTA(true);
          } else {
            setHideCTA(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (exSeminarref.current) {
      observer.observe(exSeminarref.current);
    }

    return () => {
      if (exSeminarref.current) {
        observer.unobserve(exSeminarref.current);
      }
    };
  }, []);

  return (
    <>
      <div>
        <Header />
        <div className="snap-y snap-proximity overflow-y-scroll h-screen scrollbar-hide overflow-x-hidden">
          <div className="snap-center">
            <SeminarPoster />
          </div>

          {!hideCTA && (
            <div className="fixed bottom-0 w-full z-50">
              {isActive ? (
                <Cta
                  bodyText="지금 바로 입장해 주세요!"
                  buttonText="10회차 세미나 입장하기"
                  onClick={() => navigate('seminar/live/verification')}
                  isActive={isActive}
                />
              ) : (
                <Cta
                  bodyText="데브톡에 빠져보세요!"
                  buttonText="10회차 세미나 신청하기"
                  onClick={() => navigate('/seminar/apply-info')}
                  isActive={isActive}
                />
              )}
            </div>
          )}

          {/* 강연 소개 카드 */}
          <div className="flex flex-col pt-80 gap-32">
            <div className="text-white heading-2-semibold px-20 snap-none">
              다가오는 세미나 강연 소개
            </div>

            <div className="flex flex-col snap-center pb-[80px]">
              <Carousel>
                <LectureCardMain />
                <LectureCardSpeaker />
                <LectureCardSession />
              </Carousel>
            </div>
            <div className="flex flex-col snap-center">
              <Carousel>
                <LectureCardMain />
                <LectureCardSpeaker />
                <LectureCardSession />
              </Carousel>
            </div>
          </div>

          {/* 데브톡 소개 */}
          <div className="flex flex-col pt-[200px] px-20 pb-[92px] snap-none">
            <div className="flex flex-col gap-8 pb-[16px]">
              <p className="text-white heading-2-bold">DevTalk이란?</p>
              <p className="body-1-semibold text-gradient">각자의 경험, 모두의 인사이트</p>
            </div>
            <img
              src={IntroDevtalk}
              alt="DevTalk 소개 이미지"
              className="w-[335px] h-[196px] rounded-8"
            />
            <div className="flex flex-col w-[335px] h-[100px] pt-24 body-1-medium text-grey-300">
              <p>2023년부터 지금까지,</p>
              <p>
                <span className="text-grey-50">약 1,000명의 학생이 선택한 DevTalk Seminar</span>는
              </p>
              <p className="pt-8">매 회차 IT 업계 실무자 및 전문 연사 두 분을 초청해</p>
              <p>수업에서 접할 수 없는 생생한 인사이트를 공유합니다.</p>
            </div>
          </div>

          {/* 학우들의 후기 */}
          <div className="flex flex-col px-20 gap-16 pb-[200px] snap-none">
            <p className="text-white heading-2-bold">학우들의 후기</p>
            <div className="-mx-20">
              <InfiniteCarousel>
                <ReviewCard
                  session={9}
                  rating={5}
                  content="요즘 핫한 주제로 강연을 들어서 너무 좋았습니다 !"
                />
                <ReviewCard
                  session={6}
                  rating={5}
                  content="4학년인 만큼 진로에 고민과 걱정이 많았는데 삶의 경험이 풍부하신 분들의 연사를 들으니 마인드셋에 도움이 되었습니다."
                />
                <ReviewCard
                  session={9}
                  rating={5}
                  content="부전공생이라서 정규수업 외에는 실무적인 정보들을 얻기가 어려웠는데 이렇게 좋은 자리 마련해주셔서 정말 재미있고 유익했습니다. 감사합니다."
                />
                <ReviewCard session={8} rating={5} content="라이브 코딩 재밌었어요 ㅋㅋㅋ" />
                <ReviewCard
                  session={7}
                  rating={5}
                  content="생각해보지 못했던 주제들에 대한 이야기를 들을 수 있어서 좋았습니다."
                />
                <ReviewCard
                  session={6}
                  rating={5}
                  content="한국뿐만이 아니라 보다 넓은 세상에서 활약하고 계시는 분들의 경험을 들을 수 있는 귀중한 기회를 얻을 수 있어서 좋았습니다."
                />
              </InfiniteCarousel>
            </div>
          </div>

          {/* 이전 세미나 알아보기 */}
          <div ref={exSeminarref} className="relative w-[375px] h-[196px] snap-center">
            {/* 이미지 */}
            <img src={ExSeminar} alt="이전 세미나" className="w-full h-full object-cover" />

            {/* 그라데이션 */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(15, 17, 20, 0.90) 0%, rgba(15, 17, 20, 0.10) 100%)',
                backdropFilter: 'blur(0.5px)',
              }}
            />

            {/* 텍스트 + 버튼 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-16 text-center">
              <p className="text-white heading-3-semibold">과거 데브톡 내용이 궁금하다면?</p>
              <ButtonExSeminar />
            </div>
          </div>

          {/* 신청하기 */}
          {isActive ? (
            <div className="flex flex-col items-center pt-[120px] px-20 pb-[100px] gap-16">
              <p className="text-white heading-2-bold">지금 바로 입장하세요!</p>
              <div className="flex flex-col w-[335px] gap-28">
                <div className="flex flex-col items-center gap-16">
                  <img src={Ticket} alt="티켓 아이콘" className="w-[240px] h-[153px]" />
                </div>
                <Button
                  variant="default"
                  text="10회차 세미나 입장하기"
                  onClick={() => navigate('seminar/live/verification')}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center pt-[120px] px-20 pb-[100px] gap-16">
              <p className="text-white heading-2-bold">지금 바로 신청하세요!</p>
              <div className="flex flex-col w-[335px] gap-28">
                <div className="flex flex-col items-center gap-16">
                  <img src={Timer} alt="타이머 아이콘" className="w-[240px] h-[153px]" />
                </div>
                <Button
                  variant="default"
                  text="10회차 세미나 신청하기"
                  onClick={() => navigate('/seminar/apply-info')}
                />
              </div>
            </div>
          )}

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
