---
slug: "/what-are-hoc"
date: "2021-12-07"
title: "What are Higher-Order Components?"
---
A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.

We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.

HOC can be used for many use cases:

Code reuse, logic and bootstrap abstraction.
Render hijacking.
State abstraction and manipulation.
Props manipulation.