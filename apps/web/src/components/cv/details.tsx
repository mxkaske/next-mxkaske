import { format } from "date-fns";
import React from "react";
import { Link, Text } from "ui";

interface Details {
  from: string;
  to: string;
  what: string;
  where: string;
}

const Details = ({ from, to, what, where }: Details) => {
  return (
    <>
      <Text variant="light">
        {`${format(new Date(from), "MMM yyyy")}${
          from !== to ? ` - ${format(new Date(to), "MMM yyyy")}` : ""
        }`}
      </Text>
      <Text>{what}</Text>
      <Text variant="light" italic>
        {where}
      </Text>
    </>
  );
};

export default Details;
