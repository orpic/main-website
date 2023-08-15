import { images } from "../../assets/images";

interface LoadingSpinnerProps {
  height?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ height = "h-12" }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img
        className={`animate-spin ${height}`}
        src={images.loading}
        alt="loading spinner"
      />
    </div>
  );
};

export default LoadingSpinner;
