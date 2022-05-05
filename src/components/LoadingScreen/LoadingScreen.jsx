import './LoadingScreen.scss';

const LoadingScreen = () => {
  return (
    <div className="loader">
      <div className="loading-screen" id="loading-screen">
        <div className="spinner-container">
          <img src="https://images.unsplash.com/photo-1627637819848-7074cb1565e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" />
          <div className="spinner"></div>
        </div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
