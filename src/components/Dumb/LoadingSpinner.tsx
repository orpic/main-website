import { images } from "../../assets/images";

interface LoadingSpinnerProps {
  height?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  height = "h-12",
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className={`animate-spin ${height}`}
        src={images.loading}
        alt="loading spinner"
      />
    </div>
  );
};
