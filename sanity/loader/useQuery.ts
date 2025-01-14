import { type QueryParams, type UseQueryOptionsDefinedInitial } from '@sanity/react-loader';
import * as queryStore from '@sanity/react-loader';

/**
 * Exports to be used in client-only or components that render both server and client
 */
export const useQuery = <QueryResponseResult = unknown, QueryResponseError = unknown>(
  query: string,
  params?: QueryParams,
  options?: UseQueryOptionsDefinedInitial<QueryResponseResult>,
) => {
  const snapshot = queryStore.useQuery<QueryResponseResult, QueryResponseError>(
    query,
    params,
    options,
  );

  if (snapshot.error) {
    throw new Error();
  }

  return snapshot;
};
