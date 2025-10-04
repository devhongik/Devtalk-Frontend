import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useLocation, useBlocker } from 'react-router-dom';
import ApplyHeader from '../../../components/SeminarApply/ApplyHeader';
import { Chip } from '../../../components/Chip/Chip';
import SpeakerInfo from '../../../components/SeminarApply/SpeakerInfo';
import LiveInfo from '../../../components/SeminarApply/LiveInfo';
import ApplyForm from '../../../components/SeminarApply/ApplyForm';

const ApplyInfo = () => {
  return (
    <div className="flex flex-col gap-16 justify-center items-center mb-64">
      <ApplyHeader backTo="/seminar/:id" />
      <div className="flex flex-col w-[335px] gap-80">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-32">
            <h1 className="heading-2-bold text-white">제 10회 Devtalk Seminar</h1>
            <div className="flex flex-col gap-48">
              {/* Outline 영역 */}
              <div className="flex flex-col gap-20">
                <Chip className="body-2-semibold" text="Outline" />
                <div className="flex flex-col gap-8">
                  <div className="flex flex-row gap-16">
                    <p className="body-1-medium text-grey-300">일시</p>
                    <p className="body-1-medium text-white">2025. 10. 4.(토) 오후 6:30~8:30</p>
                  </div>
                  <div className="flex flex-row gap-16">
                    <p className="body-1-medium text-grey-300">장소</p>
                    <p className="body-1-medium text-white">홍익대학교 L0201</p>
                  </div>
                </div>
                <div className="flex flex-col gap-12">
                  <SpeakerInfo />
                  <SpeakerInfo />
                </div>
              </div>

              {/* 온라인 LIVE 안내 영역 */}
              <div className="flex flex-col gap-20">
                <Chip className="body-2-semibold" text="온라인 LIVE 안내" />
                <div className="flex flex-col gap-8">
                  <div className="subhead-1-semibold text-white">
                    현장 참석이 어려운 분들을 위해
                    <br />
                    <span className="text-gradient">온라인 라이브</span>를 병행합니다!
                  </div>
                  <p className="caption-medium text-grey-300">
                    * 첫 라이브 진행으로, 진행이 원활하지 않을 수 있습니다.
                  </p>
                  <LiveInfo />
                </div>
              </div>
            </div>
          </div>
          <hr className="text-grey-700 w-full h-[1px]" />
          {/* 신청폼 부분 */}
          <ApplyForm />
        </div>
      </div>
    </div>
  );
};

export default ApplyInfo;
