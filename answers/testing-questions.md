# Testing Questions

#### What are some advantages/disadvantages to testing your code?

###### Advantages

- Prevent regression errors
- Ensure there is no missing part to change when refactoring
- Tests can be used as specs
- Test process can be shared amongst team members

###### Disadvantages: there are rarely disadvantages

- It may or may not take more time to prototype.

#### What tools would you use to test your code's functionality?

For JavaScript, the basic `assert` module is quite enough for simple tests.
But when it gets a big and production-level project, it is a better idea to
set a test framework. For backend, I usually use Mocha. For frontend, Mocha
can still be used with headless browsers such as PhantomJS. There are also
other famous tools like Selenium for browser tests.

#### What is the difference between a unit test and a functional/integration test?

- A unit test is on a small unit and checks if each unit works well.
- A functional test is on a particular feature and check if it generates a
  proper output for a provided input.
- An integration test checks if each part(or unit) of code works well together
  and results in combination functions correctly.

#### What is the purpose of a code style linting tool?

It is to keep source codes in a repository consistent and easy to read. Linting
also prevent possible mistakes developers can make. For example, some linter
provides options to check which indentation should be used(it is not actually
what a linter should do though). A linter can also check if there is any used
variable which hasn't been declared, or if there is any unused variable. In
short, linting is a kind of static analysis.
