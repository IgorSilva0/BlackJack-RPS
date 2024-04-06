import React, { useEffect, useState } from 'react';
import './loading.css'

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Only render the loading indicator when isLoading is true
  return isLoading ? (
    <div className="ring">
      <span className="loading"></span>
    </div>
  ) : null;
};

export default Loading;