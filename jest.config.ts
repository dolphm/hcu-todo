module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ["/node_modules/", "/dist/"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	transformIgnorePatterns: ["node_modules/(?!axios)"],
};
