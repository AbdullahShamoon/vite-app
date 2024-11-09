# React useCallback
React useCallback Hook returns a memoized callback function.

It is done so that it does not need to be recalculated resulting in improved performance. 

If we don't use useCallback function would run on every render. This helps us to memoize resource intensive functions so that they will not automatically run on every render. 

With useCallback Hook, memoized function only runs when any of its dependencies update. 