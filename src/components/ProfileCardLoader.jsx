import { Card } from "./Card";
import { SkeletonLoader } from "./SkeletonLoader";

export const ProfileCardLoader = () => {
  return (
    <Card>
      <div className="px-4.5">
        <div className="flex mb-16">
          <SkeletonLoader isCircle={true} className="w-14 h-14 m-1" />
          <div className="pl-3 mt-1">
            <SkeletonLoader className="w-32 h-3 mb-2" />
            <SkeletonLoader className="w-32 h-3 mb-2" />
            <SkeletonLoader className="w-20 h-3 mb-2" />
          </div>
        </div>
        <div>
          <SkeletonLoader className="w-full h-24 mb-4" />
          <SkeletonLoader className="w-full h-3 my-3.5" />
          <SkeletonLoader className="w-full h-40" />
        </div>
      </div>
    </Card>
  );
};
