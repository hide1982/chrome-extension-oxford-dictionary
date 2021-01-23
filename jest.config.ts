import path from "path"

export default {
  roots: [path.resolve(__dirname, "./src")],
  displayName: "local",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["node_modules/(?!@bit/.*)"],
}
