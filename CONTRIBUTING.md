# Contribution guide lines

## Table of Contents

1. [Commit Messages](https://github.com/costacruise/one/blob/master/CONTRIBUTING.md#commit-messages)
2. [Documentation](https://github.com/costacruise/one/blob/master/CONTRIBUTING.md#documentation)
3. [Pull Request Template](https://github.com/costacruise/one/blob/master/CONTRIBUTING.md#pull-request-template)

## Commit messages
This project uses the [Angular commit conventions][0] to describe the type and  
location of the change.
We use these conventions in order to have a machine-readable format to be able  
to automatically generate a changelog and automatically calculate the correct  
[semver][1] version for a given set of commits.

Please note that only the types `feat` and `fix` are going to land in the  
changelog. Since we use the changelog also for non-technical team members and  
we use it in the "what changed" section in the app stores - we should make sure  
that the commits are written correctly and are easy to understand.

In order for the commit messages to be useful they should follow the rules  
outlined in these posts:
- https://chris.beams.io/posts/git-commit/
- http://who-t.blogspot.de/2009/12/on-commit-messages.html
- https://wiki.openstack.org/wiki/GitCommitMessages

In detail this means:
- commit messages must have a "subject" line, no longer than 50/60 characters  
    that describe why a change was made.
- commit messages should have a "body", wrapped at 72 characters, that explains  
    in more detail the reasons for a change, the behaviour before/after the  
    change, known/suspected side-effects and potentially breaking behaviour  
    (which must be annotated as outlined in the [angular commit conventions][0]).
- commit messages should have a footer which is used to reference any related  
    issues or tickets that are closed by this change (for example the issue  
    numbers from our jira issue tracker).

Please make sure to read the linked documents carefully and - when reviewing a  
pull request -  to also verify that the commit conventions are being used  
correctly.

It is a good idea to make yourself familiar with the following git commands:
- [`git add -p`][2]
- [`git rebase -i`][3]
- [`git commit -v`][4] instead of `-m` - which should always be avoided because it  
    does not give you an overview of the line-length and does not allow you to  
    write multi-line commits.
- `git log` and `git log --one-line` or any other log viewing commands.


## Documentation

In order to upgrade the readability of our code and to ensure we do not create another legacy system out in the wild, we take documentation seriously.

### In-file code documentation

Our in-file documentation styling is inspired by [Golang][5] and the [Airbnb documentation][6] both.

Every block of code (e.g. a function or a class) should be described by a block comment above it explaining what it is doing.

```javascript
/**
 * add() returns the sum of the parameters a and b.
 */
function add(a, b) {
    return a + b;
}
```

If the function is quite verbose, maybe you should consider how you've written it to ensure that the comment must not be so in depth. If this verbosity of a function cannot be avoided, please clarify how the function works within the function itself. In this case please add single line comments above the code that must be clarified.

```javascript
/**
 * complicatedFunction() returns an array containing mapped and sorted
 * mutations of the original parameters
 */
function complicatedFunction(a, b) {
    let newA = doSomethingWithA(a);
    let newB = doSomethingWithB();
    let array = [newA, newB];

    // we map and sort the array according to such and such rules.
    array.map(a => {
        ...
    }).sort((a, b) => {
        ...
    });

    return array;
}
```

#### using TODO

The use of TODO is encouraged. If the implementation will take substantial time (hours or days), creating a JIRA ticket for the implementation is recommended.

```javascript
function add(a, b) {
    return a + b;
}

// TODO implement subtracting functionality here. OP-####

function multiply(a, b) {
    return a * b;
}
```

### Workflow documentation

Sometimes, larger workflows or functionality must be explained outside of the files it relates to. Use your best judgement to create a README.md within the related folder structure so we have a clue how these parts orchestrate together.

## Pull Request Template

### Footnotes

1. "OP-1000 | An Example Issue"
2. For now, a pseudocode implementation should be written as our acceptance test suite is not working.
3. All functionality that has impact on the application needs to have unit tests for all concievable edge cases.
4. Flow Type Checking should be used for all mobile_app javascript files.
5. Please explain the changes you've made as if a five year old were reading your message.

[0]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153#format-of-the-commit-message
[1]: http://semver.org/
[2]: https://git-scm.com/docs/git-add#git-add--p
[3]: https://git-scm.com/docs/git-rebase#git-rebase--i
[4]: https://git-scm.com/docs/git-commit#git-commit--v
[5]: https://blog.golang.org/godoc-documenting-go-code
[6]: https://github.com/airbnb/javascript#comments
