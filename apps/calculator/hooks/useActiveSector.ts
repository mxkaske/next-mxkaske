import { useRouter } from "next/router";
import { useCallback } from "react";
import { Sector } from "../types/schema";
import useFootprint from "./useFootprint";

const useActiveSector = () => {
  const router = useRouter();
  const [footprint, setFootprint] = useFootprint();

  const { sector: key } = router.query as { sector: Sector };

  const sector = footprint.sectors[key];

  const setSector = useCallback(
    (value: Record<string, number | string>) => {
      setFootprint({
        ...footprint,
        sectors: {
          ...footprint.sectors,
          [key]: {
            ...footprint.sectors[key],
            ...value,
          },
        },
      });
    },
    [setFootprint, footprint, key]
  );

  return [sector, setSector] as const;
};

export default useActiveSector;
