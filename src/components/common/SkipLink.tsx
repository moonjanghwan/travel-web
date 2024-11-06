const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black"
    >
      메인 콘텐츠로 건너뛰기
    </a>
  );
};

export default SkipLink; 