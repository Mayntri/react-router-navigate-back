# [![npm version](https://img.shields.io/npm/v/react-router-navigate-back)](https://www.npmjs.com/package/react-router-navigate-back)

## Install

```npm
npm install react-router-navigate-back
```

## Import

```js
import { useNavigate, Link } from 'react-router-navigate-back'
```

## Usage

Use inside the Router component, for example as below

```tsx
<Link to="/settings" back>Back</Link>
navigate('/settings', {
    back: true
})
```
