## Transition (Svelte et D3)

Les transitions sont utilisé pour faire évoluer des éléments du DOM par rapport à une échelle temporelle. 

Dans d3 cela ressemble à ceci:

```js
 rect
    .transition()
    .duration(1000)
    .attr('y', d => yScale(d[key]))
    .attr('height', d => HEIGHT - MARGIN_BOTTOM - yScale(d[key]))
```

Dans Svelte à ceci: 

```typescript
const y = tweened(HEIGHT - MARGIN_BOTTOM, {
  duration: 1000,
  easing: cubicOut,
})

<rect
  x={i * BAR_WIDTH}
  width={BAR_WIDTH - MARGIN}
  y={$y}
  height={HEIGHT - MARGIN_BOTTOM - $y}
  fill="steelblue"
  />
```

Dans les deux cas cela marche avec un changements d'attribut sur l'élément DOM sélectionné puis y ajoute le temps de l'animation, Le reste (états subsidiaires ) sont calculé automatiquement (bénéfice d'utiliser une librairie).

