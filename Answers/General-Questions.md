# General Questions

#### What did you learn yesterday/this week?
This week, I learned about Web Notifications API while creating a personal service. Web Notifications API is described well in its [specification](http://www.w3.org/TR/notifications/). What interests me was that it's not fully implemented in Chrome yet even though Firefox implements it well. To use the feature fully in Chrome, we should use Chrome's webkitNotifications API as well.

#### What excites or interests you about coding?
The most interesting thing about coding is that I create something used by others. It excites me a lot when users praise and thank for my works. I love this work.

#### What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?
First of all, I'm in fact not a front-end developer. I surely can be, but am currently a server developer, and my considerations when building a web app are mostly server-sided. My main considerations are an easiness of prototyping, distribution and interaction between a server and a client. When it's an official project, I also consider web securities like CORS or injection attacks and maintainabilities like CLI tools or continuous tests. I always think UI is very important, but unfortunately I don't have much sence of a good design(but **always** trying to make a better UI :D).

#### Talk about your preferred development environment. (OS, Editor, Browsers, Tools etc.)
I nearly always work on my Macbook Pro when the work is about web. I prefer OS X to Windows or Linux environments. For an editor, I use VIM and Sublime Text 2. They're great editors and I'm very satisfied with them. For browsers, I use Chrome mainly, and love the Chrome's developer tools. I also use Firefox and Safari for the compatibility tests. I rarely use IE cause I don't have a Windows environment(and I'll not use it even I have one).

#### Can you describe your workflow when you create a web page?
As I described above, I'm a server developer, and I alsways create server-side first. First of all, I think of an environment such as a language, platform or frameworks. The decision varies between projects. For personal projects, I select the thing from which I learn the most. When the environment is decided, I bootstrap the project. Creating a directory structure, a main script, a router and templates. After that I code each page. For the page, I implement the router function first, and then the front-end view and scripts. And so on.

#### Can you describe the difference between progressive enhancement and graceful degradation?
  * Bonus points for describing feature detection

In fact I have no idea about the topic, I searched some articles. Among them, I read this article: [Graceful Degredation Versus Progressive Enhancement](http://docs.webplatform.org/wiki/tutorials/Graceful_degredation_versus_progressive_enhancement).

Both progressive enhancement and graceful degradation are web development methodologies. These methodologies are needed because web environment varies within browsers, devices and even user preferences. Their object is the same, to create the web application which can provide a proper user experience for all environments, but the difference is how they achive it. Progressive enhancement is the method in which the very basic feature that covers all environments is implemented first, and then adding up the additional enhancement for a specific environment. But in graceful degradation, a feature is implemented regardless of its compatibility, and the fallback for the feature is implemented later. Both methods have cons and pros. Generally progressive enhancement is much safer way, and graceful degradation spends less time to create a product.

Feature detection is a technical way to implement the methodologies described above. There're many features which are implemented in a browser, but not in another. Feature detection is to detect if a certain feature can be used in a given environment. There're already many feature detection tables in web. When it's a JavaScript feature, the simplest way to achive it is check if there's JavaScript property in the API object. For other features like CSS styles or HTML elements, there're also many ways to check whether they're usable.

#### Explain what "Semantic HTML" means.
Semantic HTML is to use HTML as what it means. HTML is a markup language, and each tags have their own meanings. If it's `<h1>` element, it means that it's a main header. We shouldn't use the element just to make a text bigger. It's Semantic HTML to make it clear that a tag is used properly for what it means. Semantic HTML helps developers to read and comprehend the code easily, and also make the non-person such as search engines parse the page right.

#### How would you optimize a websites assets/resources?
  * Looking for a number of solutions which can include:
    * File concatenation
    * File minification
    * CDN Hosted
    * Caching
    * etc.

When it's a small personal project, I don't consider much about optimization, but for the business projects, I used all these examples. Minification and concatenation for the scripts and stylesheets are very common technic to optimize the resource load. It can be easily done with several CLI tools like Grunt for Node.js. Also there're many CDN hosted resources like jQuery on Google CDN. They can reduce the load on the service server. Caching is already an essential part to build a web application. There're many solutions which can be used as a cache layer, such as Memcached or Redis. If the load is very heavy, we can use load distribution technics like load balancing. Load balancing can be done with both hardware and software ways.

#### Why is it better to serve site assets from multiple domains?
  * How many resources will a browser download from a given domain at a time?

To avoid overloading on one server, the browser has the limit on the number of resources loaded from a domain simultaneously. The number varies between browsers. So it's better to serve resources from multiple domains for increasing the number of resources loaded simultaneously in a page.

#### Name 3 ways to decrease page load. (perceived or actual load time)

#### If you jumped on a project and they used tabs and you used spaces, what would you do?
  * Suggest the project utilize something like EditorConfig (http://editorconfig.org)
  * Conform to the conventions (stay consistent)
  * `issue :retab! command`

#### Write a simple slideshow page
  * Bonus points if it does not use JS.

#### What tools do you use to test your code's performance?
  * Profiler, JSPerf, Dromaeo

#### If you could master one technology this year, what would it be?

#### Explain the importance of standards and standards bodies.

#### What is FOUC? How do you avoid FOUC?
