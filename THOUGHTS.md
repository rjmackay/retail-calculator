## Random thoughts and notes

- I've tried to make my slices as small as possible.
  - However they are *very* sequential. I probably need to track dependencies better
- It took a while just writing up slices in github (vs on paper). I've intentionally left issue simple.
  I'll edit and add details as I start each one
- I've built everything so far in a single component.
    - It's fairly obvious that the results / output should live somewhere separate from the input form
    - And the actions and calculations should probably move too
    - I've left them in 1 component for now to prioritize shipping something useful first, and using tests
      to drive the need to restructure.