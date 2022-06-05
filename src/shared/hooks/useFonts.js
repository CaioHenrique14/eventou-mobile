import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    DosisRegular: require('../../../assets/fonts/Dosis-Regular.ttf'),
    DosisSemiBold: require('../../../assets/fonts/Dosis-SemiBold.ttf'),
    DosisBold: require('../../../assets/fonts/Dosis-Bold.ttf')
  });
