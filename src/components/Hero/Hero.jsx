import ImgHero from "../../assets/img-hero.jpeg";
import { Button } from "../ui/button";
export const Hero = () => {
  return (
    <section className="min-h-screen py-20">
      <div className="container grid grid-cols-2 gap-4 items-center">
        <div className="flex flex-col gap-8">
          <p>RECEIPE OF THE DAY</p>
          <h1>Tasty Fluffy Pancakes</h1>
          <div className="flex items-center gap-2">
            <i className="ri-time-line text-3xl"></i>
            <p>1 hour and 30 mins</p>
          </div>
          <p>
            The Best Fluffy Pancakes recipe you will fall in love with. Full of
            tips and tricks to help you make the best pancakes… ever!
          </p>
          <div className="">
            <Button className="mr-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="book-reader"
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                height="20"
              >
                <path
                  fill="currentColor"
                  d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"
                ></path>
              </svg>
              Cook now
            </Button>
            <Button variant="outline">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="concierge-bell"
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                height="20"
              >
                <path
                  fill="currentColor"
                  d="M288 130.54V112h16c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h16v18.54C115.49 146.11 32 239.18 32 352h448c0-112.82-83.49-205.89-192-221.46zM496 384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
                ></path>
              </svg>
              Explore Recipes
            </Button>
          </div>
        </div>
        <div className="">
          <img className="rounded-md" src={ImgHero} alt="" />
        </div>
      </div>
    </section>
  );
};
