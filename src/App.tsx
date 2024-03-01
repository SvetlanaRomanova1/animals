import { requestAnimals, requestAnimalsWithError, Animal, Query } from "./api";
import "./styles.css";

import Requirements from "./Requirements";

// Примеры вызова функций, в консоли можно увидеть возвращаемые результаты
requestAnimals({ animal: "", amount: "", limit: 4, offset: 0 }).then(
  console.log
);
requestAnimalsWithError({ animal: "", amount: "", limit: 4, offset: 0 }).catch(
  console.error
);

export default function App() {
  return <Requirements />;
}
