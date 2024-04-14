import Logo from "../../assets/Happy_Meal_footer.png";
export const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container flex items-stretch justify-between text-primary-foreground">
        <div className="flex-1 p-4">
          <img
            className="rounded-full w-40 h-40 "
            src={Logo}
            alt="image description"
          />
        </div>
        <div className="flex-1 p-4">
          <h4 className="mb-3">Mentions légales</h4>
          <ul>
            <li className="">
              <a href="#">A propos</a>
            </li>
            <li className="">
              <a href="#">FAQ</a>
            </li>
            <li className="">
              <a href="#">Nos recettes</a>
            </li>
            <li className="">
              <a href="#">Suggestions</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-4">
          <h4 className="mb-3">Coordonnées</h4>
          <ul>
            <li className="">
              <a href="#">Contactez-nous</a>
            </li>
            <li className="">
              <a href="#">conditions général</a>
            </li>
            <li className="">
              <a href="#">Mention Légal</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-primary-foreground">
        <p>@copyright La Plateforme 2024</p>
      </div>
    </footer>
  );
};
