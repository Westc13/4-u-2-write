TASKS

-   creating visual design: _taimoor_
-   coming up with writing prompts :) : _sadie_

-   html: _sadie chris_
-   implementing design css: _taimoor kevin_

-   timer/keep writing reminder js: _chris taimoor_

-   daily prompt js: _sadie kevin_

-   night mode: _chris kevin_

-   error sadie: _sadie taimoor_

-   pull requests: each feature the ppl who weren't working on it approve it

SCHED

-   work all-together in class work time
-   start/end a given work together session with status updates

-   aug 24 all hands on deck "midterm review"
-   aug 26 set aside for (if needed) "work together time"
-   case by case of whether a feature should be worked on together or independently

PSEUDO CODE

writing prompt

-   have an array of objects writing prompts, some pre-written, users can add to it
    -   somehow use date.now to select a new quote at random
    -   when it chooses a quote for the day, then delete that quote from the array so it doesn't come up twice
-   print to page

-   bottom of page: "add quote" button, onclick slide out textinput and submit button
-   on submit, send textinput to database and slide it back in
-   mini-stretch: clicking on add quote button again slides the textinput back into hidden in case they want to not do it in the end + button label to cancel or an arrow left or smth

timer

-   dropdown to select how long they want to write for
-   print countdown to page somewhere

    -   display a fontawesome clock icon, on hover show time left
    -   every 5(?) minutes, show a visual indicator of time elapsing
        -   clock pulses red? something like that?
    -   at 2 minutes left, show timer directly

-   use set time interval to alert at the end
-   onChange on the writing textarea, set time interval 15s -- if 15s has elapsed since new change, it will yell at them.
    -   basic: pop an alert
    -   complex: dim screen, put a netflix "are you still watching" type message
    -

night mode

-   onclick of night mode button, change nightmode state
-   conditionally add css class
    -   OR: look into css function/conditional capability to see if we can just change the values of color variables directly?

error handling

-   you tell us boss
