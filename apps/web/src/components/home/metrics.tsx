import { GetCommitShaResponse } from "@/types/octokit";
import { formatDistance } from "date-fns";
import React from "react";
import useSWR from "swr";
import { COMMIT_SHA } from "swr.config";
import { Link, Text } from "ui";
import { default as NextLink } from "next/link";

const Metrics = () => {
  const { data: commit } = useSWR<GetCommitShaResponse>(
    `/api/github/commit/${COMMIT_SHA}`
  );
  return (
    <div className="flex flex-col text-xs italic font-light md:space-x-1 md:flex-row">
      {commit?.data ? (
        <>
          <Text className="whitespace-nowrap">
            <span className="font-medium">Last Commit Message </span>(
            {formatDistance(new Date(commit.data.author.date), new Date())}{" "}
            ago):
          </Text>
          <NextLink href={commit.data.html_url} legacyBehavior>
            <Link target="_blank" rel="noopener" className="mb-1">
              <code>`{commit.data.message}`</code>
            </Link>
          </NextLink>
        </>
      ) : null}
    </div>
  );
};

export default Metrics;
