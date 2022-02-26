import { useLocalStorage } from "usehooks-ts";
import { UserFootprint } from "../types/model";

const useFootprint = () => {
  const [footprint, setFootprint] = useLocalStorage<UserFootprint>(
    "footprint",
    { sectors: {} }
  );
  return [footprint, setFootprint] as const;
};

export default useFootprint;
