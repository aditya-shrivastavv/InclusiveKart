# InclusiveKart (Work-in-Progress 🛠️)

InclusiveKart is a e-commerce platform focused on Luxury Beauty Products. This platform is built by keeping Accessibility in mind and is highly optimised and
feature-full for people with disability.

## Technical Details

### Tech Stack Used

- React
  - React Router
- Tailwind CSS
- ViteJS

### Linting and Formating

Linting is done by eslint

Config -

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "rules": {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  }
}
```

Code Formatting is done using Prettier on default settings/configurations.
