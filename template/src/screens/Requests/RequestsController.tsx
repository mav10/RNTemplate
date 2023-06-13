import React, { useCallback, useMemo } from 'react';
import { QueryFactory } from '../../services/api';
import { Status } from '../../services/api/api-client';
import { useQueryClient } from '@tanstack/react-query';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { CommonColors } from '../../commons/styles/colors';
import { AppCommonStyles } from '../../commons/styles/styles';
import { localStyles } from './Requests.styles';

export const RequestsController = () => {
  const result = QueryFactory.Query.useFindPetsByStatusQuery({ status: [Status.Available, Status.Pending] });
  const queryClient = useQueryClient();
  const onRefresh = useCallback(async () => {
    await queryClient.invalidateQueries();
  }, []);

  const refreshControl = useMemo(() => {
    return <RefreshControl onRefresh={onRefresh} refreshing={result.isLoading || result.isFetching} />;
  }, [onRefresh, result.isLoading, result.isFetching]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ backgroundColor: CommonColors.background }}
      contentContainerStyle={localStyles.contentContainer}
      refreshControl={refreshControl}>
      <View>
        <Text style={AppCommonStyles.heading1}>Here you will see response body:</Text>
        <Text>{`isLoading: ${result.isLoading}`}</Text>
        <Text>{`isInitialLoading: ${result.isInitialLoading}`}</Text>
        <Text>{`isFetching: ${result.isFetching}`}</Text>
        <Text>{`isError: ${result.isError}`}</Text>
        {result.isError && <Text>{`Error: ${result.error}`}</Text>}
      </View>
      <Text>{`Data: ${JSON.stringify(result.data?.slice(0, 5))}`}</Text>
    </ScrollView>
  );
};
