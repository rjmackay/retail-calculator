## Thoughts and notes

- I've tried to make my slices as small as possible. However they are *very* sequential which isn't ideal as there's not a lot of flexibility about what order they're done in.
- I've intentionally left issues simple. I'll edit and add details as I start each one
- I'm not completely happy that the first slice was a vague chunk of 'bootstrap the whole app' but I needed a hello world to start from, and thanks to create-react-app it was still only 5 minutes work.
- I've ranked the issues in the project board so they're rough in the order I'd expect to complete them.
- I've start with the basic goal of just taking input and generating a total, then adding taxes and discounts after that.
- I've also included basics to make a useful interface: showing subtotals, and validating input. However those would all be complete *after* the calculator actually works. 

- I've built everything so far in a single component.
    - It's fairly obvious that the results / output should live in their own component separate from the input form
    - And the actions and calculations should probably move too
    - I've left them in 1 component for now to prioritize shipping something useful first, and then using tests
      to drive the need to restructure.
