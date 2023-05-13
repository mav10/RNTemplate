import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { Text } from 'react-native';
import { LanguageSwitcher } from '../../components/languageSwitcher/languageSwitcher.component';
import { VersionComponent } from '../../components/version/version.component';
import { localStyles } from './Dashboard.styles';

export const DashboardController = () => {
  return (
    <SafeAreaView style={localStyles.safeArea}>
      <View style={localStyles.container}>
        <Text>Dashboard screen</Text>
      </View>

      <View style={localStyles.footer}>
        <LanguageSwitcher />
        <VersionComponent />
      </View>
    </SafeAreaView>
  );
};
