import ApplicantsList from '../../../../components/admin/applicants/ApplicantsList';

const List = () => {
  return (
    <div className="py-11">
      <h1 className="ml-[39px] text-white heading-1-bold mb-12">세미나 신청자 관리</h1>
      <ApplicantsList />
    </div>
  );
};

export default List;