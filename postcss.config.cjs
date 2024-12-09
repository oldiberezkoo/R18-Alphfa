config = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {
			overrideBrowserslist: ["> 1%", "last 2 versions", "not dead"],
		},
		cssnano: {
			preset: [
				"default",
				{
					// Минимизация с отключением специфических оптимизаций для более сжимаемых случаев
					discardComments: { removeAll: true },
					reduceIdents: false, // Отключаем редукцию идентификаторов, чтобы избежать их изменения в некоторых случаях
					mergeRules: true, // Оптимизация правил CSS
				},
			],
			// Дополнительные плагины для cssnano, если необходимо:
			plugins: [
				// Добавление пост-обработки для более новых фич CSS
				require("postcss-preset-env")({
					stage: 0, // Указание поддерживать все экспериментальные фичи
					features: {
						"nesting-rules": true, // Поддержка вложенных правил
						"custom-media-queries": true, // Поддержка пользовательских медиа-запросов
					},
				}),
			],
		},
	},
}
