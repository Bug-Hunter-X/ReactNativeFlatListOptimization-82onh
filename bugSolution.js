The solution involves using React's `useMemo` hook to memoize the computationally expensive function, preventing redundant calculations on every render.  We also implement `getItemLayout` for improved scrolling performance with `FlatList`.

```javascript
import React, { useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => i);

const complexCalculation = (num) => {
  // Simulate a complex calculation
  let result = 0;
  for (let i = 0; i < 10000; i++) {
    result += Math.sqrt(num * i);
  }
  return result;
};

const Item = ({ item }) => {
  const calculatedValue = useMemo(() => complexCalculation(item), [item]);
  return (
    <View style={styles.item}>
      <Text>Item: {item}, Calculated Value: {calculatedValue}</Text>
    </View>
  );
};

const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.toString()}
      getItemLayout={(data, index) => ({
        length: 50,
        offset: 50 * index,
        index,
      })}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 50,
  },
});
```