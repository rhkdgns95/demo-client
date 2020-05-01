import * as StyledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

const {
	default: styled,
	createGlobalStyle,
	ThemeProvider,
	keyframes,
} = StyledComponents as ThemedStyledComponentsModule<ITheme>;

export { createGlobalStyle, ThemeProvider, keyframes };
export default styled;
