import NextLink from "next/link";
import React from "react";
import { Emoji, Heading, Text, Link } from "ui";
import { data } from "../../config/data";
import useFootprint from "../../hooks/useFootprint";
import { Sector } from "../../types/schema";

const ResultByType = () => {
  const { calculate } = useFootprint();
  const totalAmount = calculate();
  return (
    <div className="w-full">
      <Heading as="h3">By Type</Heading>
      <ul role="list" className="divide-y">
        {Object.keys(data.sectors).map((key: Sector) => {
          const amount = calculate(key);
          const sector = data.sectors[key];
          return (
            <li key={key} className="flex items-center justify-between py-2">
              <Text className="mb-0">
                <NextLink href={`/${key}`} passHref>
                  <Link>
                    <Emoji label={key} className="mr-2">
                      {sector.emoji}
                    </Emoji>
                    {sector.title}
                  </Link>
                </NextLink>
              </Text>
              <Text className="font-semibold mb-0">{amount}</Text>
            </li>
          );
        })}
        <li className="flex items-center justify-between py-2">
          <Text className="mb-0">
            <Emoji label="total" className="mr-2">
              🍕
            </Emoji>
            Total
          </Text>
          <Text className="font-semibold mb-0">{totalAmount}</Text>
        </li>
      </ul>
    </div>
  );
};

export default ResultByType;
