import { RoundProgressBar } from "./RoundProgressBar";

export const CardHeader = ({
  name = "David Ford",
  location = "Rye Golf Club (Old), UK",
  quality = "80",
  handicap = "PRO",
  sgTotal = "4.14",
  image = "https://i.redd.it/6onq25y0sh311.jpg",
}) => {
  return (
    <div className="flex px-4.5">
      <div>
        <img
          src={image}
          className="w-14 h-14 rounded-full m-1 ring-4 ring-offset-1 ring-primary"
          alt="player profile"
        />
      </div>

      <div className="flex-1 text-left">
        <div className="pl-3 mb-4">
          <h1 className="text-primary font-medium text-lg">{name}</h1>
          <p className="text-secondary text-xxs">{location}</p>
        </div>
        <div className="flex justify-between divide-x divide-solid divide-primary mb-4">
          <div className="pl-3 flex">
            <div>
              <p className="text-secondary text-xxs">Quality</p>
              <div className="text-primary text-sm font-medium flex items-center">
                <span>{quality}</span>
                <ion-icon
                  name="caret-up-sharp"
                  className="text-3xs pl-0.5"
                ></ion-icon>
              </div>
            </div>

            <RoundProgressBar progressValue={50} size={28} />
          </div>
          <div className="pl-3">
            <p className="text-secondary text-xxs">Handicap</p>
            <div className="text-primary text-sm font-medium">{handicap}</div>
          </div>
          <div className="pl-3">
            <p className="text-secondary text-xxs">SG Total</p>
            <div className="text-primary text-sm font-medium flex items-center">
              <span>{sgTotal}</span>
              <ion-icon
                name="caret-down-sharp"
                className="text-3xs pl-0.5"
              ></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
