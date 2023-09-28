import { FeaturedSectionCard, LoadingSpinner } from "../../components";
import { images } from "../../assets/images";
import React, { Suspense } from "react";

const FeaturedSection: React.FC = () => {
  return (
    <div className="bg-neutral-800 hidden md:block md:w-80 lg:w-96 md:h-full">
      <div className={`h-full w-full overflow-y-auto no-scrollbar`}>
        <h2 className="sticky top-0 bg-neutral-800 text-2xl pt-6 mb-2 pb-2 text-center">
          Featured
        </h2>
        {/* The cards */}
        <Suspense fallback={<LoadingSpinner height={"h-8"} />}>
          <FeaturedSectionCard
            src={images.playStoreFrontTitle}
            description="Sample apps (PWA's) packaged with Kotlin for play store. These work offline as well"
            link="https://play.google.com/store/apps/dev?id=5883558879247234907"
            linkText="Play Store"
          />
        </Suspense>
      </div>
    </div>
  );
};

// images.playStoreFrontTitle
// Sample apps (PWA's) packaged with Kotlin for play store. These work
// offline as well
// https://play.google.com/store/apps/dev?id=5883558879247234907
// Play Store

export default FeaturedSection;
