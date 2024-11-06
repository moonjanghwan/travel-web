interface ErrorProps {
  message?: string;
}

const Error = ({ message = '오류가 발생했습니다.' }: ErrorProps) => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="text-red-500 text-center">
        <svg 
          className="w-12 h-12 mx-auto mb-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
          />
        </svg>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Error; 