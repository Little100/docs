---
title: Recipe Settings
description: Plugin documentation for ProjectE-Plugin
---

# About Recipes
## accessories.yml,devices.yml,op_item.yml,recipe.yml
 - File content might look like this:
```yaml
TheItem:
  enabled: true
  type: "shaped"
  shape:
    - "XXX"
    - "YYY"
    - "ZZZ"
  ingredients:
    - "X": "a item"
    - "Y": "b item"
    - "Z": "c item"
  result:
    material: "TheResult"
```
### In the example above:
 - enabled: Whether to enable this recipe, defaults to `true`. If `false`, this recipe will be removed.
 - type: Recipe type, "shaped" and "shapeless" represent shaped and shapeless crafting respectively.
 - XXX YYY ZZZ represent the items needed for crafting.
 - ingredients: The list of items for the recipe. `X`, `Y`, and `Z` represent the shorthand for the items in the recipe.
 - result: The result of the recipe. `material` represents the base item of the result.

<QuestionBlock title="What's the difference between shaped and shapeless?">

For example, a **Diamond Sword** must be arranged **precisely**.
```
Crafting table layout:
[ ] [D] [ ]
[ ] [D] [ ]
[ ] [S] [ ]

D = Diamond
S = Stick
```
This is **shaped crafting**.
And items like bone meal that can be crafted by placing them in **any grid slot belong to shapeless crafting**.

</QuestionBlock>

<QuestionBlock title="I still don't get the corresponding items for the recipe.">

Let's take a **Diamond Sword** as another example:
```
[ ] [D] [ ]
[ ] [D] [ ]
[ ] [S] [ ]
```

In the configuration file, it should be written as:
```yaml
TheItem:
  enabled: true
  type: "shaped" # Shaped crafting
  shape:
    - " D "  # First row: empty-diamond-empty
    - " D "  # Second row: empty-diamond-empty
    - " S "  # Third row: empty-stick-empty
  ingredients:
    - "D": "DIAMOND" # Full item name
    - "S": "STICK"
  result:
    material: "DIAMOND_SWORD"  # Crafted item
```

</QuestionBlock>