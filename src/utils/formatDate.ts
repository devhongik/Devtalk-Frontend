export const formatDate = (isoString: string) => {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[date.getDay()];

  // 12시간제
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? '오후' : '오전';

  hours %= 12;
  hours = hours || 12; // 0시는 12시로 표시

  // 분이 한 자리 수일 경우 앞에 0을 붙여줌
  const paddedMinutes = String(minutes).padStart(2, '0');

  return `${year}. ${month}. ${day} (${dayOfWeek}) ${ampm} ${hours}:${paddedMinutes}`;
};
