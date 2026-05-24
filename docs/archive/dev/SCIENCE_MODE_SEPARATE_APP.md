
# Science Mode as Separate App

Science Mode is implemented as a separate static page:

```text
science.html
```

Explorer Mode links to Science Mode through the existing Science Mode button.

Science Mode links back to Explorer Mode through:

```text
index.html
```

Both pages share:

- the same visual language
- the same theme system
- the same v6-compatible dataset
- the same static deployment model

This keeps Explore Mode stable while allowing Science Mode to evolve independently.
