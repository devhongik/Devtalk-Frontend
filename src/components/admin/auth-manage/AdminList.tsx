import { useState, useCallback } from 'react';
import AuthDeleteModal from '../auth-manage/AuthDeleteModal';

const AdminList = () => {
  const admins = [
    { no: 1, name: '데브톡', id: 'devtalk1' },
    { no: 2, name: '김데브', id: 'adgfeev2' },
    { no: 3, name: '이데브', id: 'deeev3' },
    { no: 4, name: '박데브', id: 'dddev4' },
    { no: 5, name: '최데브', id: 'deeev5' },
    { no: 6, name: '정데브', id: 'kkeev6' },
    { no: 7, name: '안데브', id: 'deeev7' },
    { no: 8, name: '강데브', id: 'deeev8' },
    { no: 9, name: '인데브', id: 'deeev9' },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [selectedAdmin, setSelectedAdmin] = useState<{
    no: number;
    name: string;
    id: string;
  } | null>(null);

  // 우클릭 메뉴 처리
  const handleContextMenu = useCallback((e: React.MouseEvent, admin: typeof selectedAdmin) => {
    e.preventDefault(); // 기본 컨텍스트 메뉴 방지
    setContextMenu({ x: e.clientX, y: e.clientY });
    setSelectedAdmin(admin);
  }, []);

  const handleDelete = (no: number) => {
    console.log(`관리자 ID ${no} 삭제`);
  };

  return (
    <div className="w-full bg-grey-900 text-white rounded-10 overflow-hidden">
      <table className="w-full text-left border-collapse">
        {/* 헤더 */}
        <thead>
          <tr className="bg-grey-700 text-grey-200 subhead-1-medium">
            <th className="w-[80px] py-20 px-[26px] text-center">No.</th>
            <th className="max-w-[415px] py-20 px-24">이름</th>
            <th className="py-20 px-24">아이디</th>
            <th className="w-[120px] py-20 px-[44px] text-center">관리</th>
          </tr>
        </thead>

        {/* 바디 */}
        <tbody>
          {admins.map((admin) => (
            <tr
              key={admin.no}
              onContextMenu={(e) => handleContextMenu(e, admin)}
              className="subhead-1-medium border-t border-grey-700 hover:bg-grey-800 transition-colors"
            >
              <td className="py-20 px-20 text-center">{String(admin.no).padStart(2, '0')}</td>
              <td className="py-20 px-24">{admin.name}</td>
              <td className="py-20 px-24">{admin.id}</td>
              <td
                className="py-20 px-[44px] text-center text-status-error hover:text-shadow-status-error cursor-pointer"
                onClick={() => {
                  setSelectedAdmin(admin);
                  setModalOpen(true);
                }}
              >
                삭제
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedAdmin && (
        <AuthDeleteModal
          open={modalOpen}
          adminId={selectedAdmin?.id ?? ''}
          adminName={selectedAdmin?.name ?? ''}
          onConfirm={() => {
            handleDelete(selectedAdmin?.no ?? 0);
            setModalOpen(false);
          }}
          onCancel={() => setModalOpen(false)}
        />
      )}

      {/* 우클릭 메뉴 */}
      {contextMenu && selectedAdmin && (
        <div
          className="fixed bg-grey-800 rounded-8 shadow-lg py-8 z-50 hover:bg-grey-700"
          style={{
            left: contextMenu.x,
            top: contextMenu.y,
          }}
        >
          <button
            className="w-full px-16 py-12 text-left text-status-error body-2-medium cursor-pointer"
            onClick={() => {
              setModalOpen(true);
              setContextMenu(null);
            }}
          >
            관리자 권한 삭제
          </button>
        </div>
      )}

      {/* 배경 클릭시 컨텍스트 메뉴 닫기 */}
      {contextMenu && <div className="fixed inset-0 z-40" onClick={() => setContextMenu(null)} />}
    </div>
  );
};

export default AdminList;
