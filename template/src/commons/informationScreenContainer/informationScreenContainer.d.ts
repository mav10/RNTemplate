export type InformationScreenContainerProps = {
  headerText: string;
  text: string;
  lottieSource: any;
  inProgress?: boolean;
  testIdPrefix?: string;
  animationConfig?: { loop?: boolean; lottieColorFilters?: ColorFilter[] } & (
    | {
        postLoopCycle?: {
          start: number;
          end: number;
        };
        loop?: false | undefined;
      }
    | { loop: true }
  );
} & ({ onPress: () => void; buttonLabel: string } | { onPress?: undefined });
