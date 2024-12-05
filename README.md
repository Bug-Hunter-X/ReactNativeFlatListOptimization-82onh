# React Native FlatList Performance Issue

This repository demonstrates a performance issue in React Native's FlatList component when rendering a large dataset with complex components. The issue manifests as slow scrolling, dropped frames, and potential crashes.

## Problem
The `FlatList` component struggles to maintain smooth scrolling when each list item involves intensive computations or network requests within its render method. The problem is exacerbated with larger datasets.

## Solution
The solution involves optimizing the rendering process using techniques such as memoization, virtualization, and data optimization.  The proposed solution uses `useMemo` to optimize expensive calculations, improving performance significantly.