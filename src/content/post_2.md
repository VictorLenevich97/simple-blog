---
slug: "/where-is-context"
date: "2021-12-10"
title: "What is context?"
---

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

For example, authenticated user, locale preference, UI theme need to be accessed in the application by many components.

`
const {Provider, Consumer} = React.createContext(defaultValue) 
`