Transpile NL (New Language) to JavaScript.

I use 4 steps in this process. Some of the steps could be optimized away, but, thinking about solving the problem as a series of small steps helped me write this quickly ("divide and conquer" on steroids).

Of note is the final step which peephole optimizes the JavaScript converting
```
cache.at (num)
```
```
cache[num]
```
which is a technique used by GCC (see below).

# Source
The original source code for (part) of this new language comes from Kinect3000 on the OhmLang discord (channel "help").
```
CONST cache TO ARR ZERO SEP ONE END
FN fibonacci num DO
  IF cache OF length GT num DO
    RETURN cache OF at CALL num END
  END
  RETURN fibonacci CALL num SUB ONE END ADD fibonacci CALL sum SUB TWO END
END
```
# Step 1
I claim that it is slightly easier to use Ohm-JS to parse a modified version of the above source code.  At this point, I don't care about human-readability, I just want machine-readability, esp. Ohm-JS.  It is *slightly* easier to write a grammar in Ohm-JS where the keywords are marked in some way to keep them separated from other identifiers. I happen to use ":", but I could have used Unicode characters (Ohm-JS supports Unicode characters).
```
:const cache :to :arr 0 , 1 :end
:fn fibonacci num :do
  :if cache :of length > num :do
    :return cache :of at :call num :end
  :end
  :return fibonacci :call num :sub 1 :end :add fibonacci :call sum :sub 2 :end
:end
```
For convenience, I've mapped "SEP" to "," and "GT" to ">".
# Step 2
# Step 3
# Step 4

# Code (github)
[Step 1](
# Discussion
The technique of peephole optimizing appeared in a paper by Fraser/Davidson (see https://guitarvydas.github.io/2021/12/15/References.html) and was used in GCC (at least the original version, I haven't looked lately).

The technique is generalized and normalized in Cordy's thesis - Orthogonal Code Generator (see references, above).



