export type ITheme = "dark" | "light";

export type IThemeOption = {
	key: ITheme;
	text: string;
};

export const availableThemes: IThemeOption[] = [
	{ key: "light", text: "Light" },
	{ key: "dark", text: "Dark" },
];

export function ThemeManager() {
	const themeSetting = useCookie<ITheme>("theme");

	// states
	const currentTheme = useState<ITheme>(
		"theme.current",
		() => themeSetting.value || "light"
	);

	const getThemeSetting = (): ITheme => themeSetting.value || "light";

	const onThemeSettingChange = (value: ITheme) => {
		themeSetting.value = value;
	};

	// init theme
	const init = () => {
		currentTheme.value = getThemeSetting();
	};

	// lifecycle
	onBeforeMount(() => init());

	return {
		currentTheme,

		getThemeSetting,
		onThemeSettingChange,
	};
}
