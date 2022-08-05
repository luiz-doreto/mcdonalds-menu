import { StackScreensParams } from '../Types';

declare global {
  namespace ReactNavigation {
    type RootParamList = StackScreensParams;
  }
}
